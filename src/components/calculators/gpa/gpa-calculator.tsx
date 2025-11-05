"use client";

import {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ResultsDisplay from "@/components/shared/results-display";
import { PlusCircle, Trash, RotateCcw, AlertTriangle } from "lucide-react";
import { loadFromLocalStorage, type GPACalculatorData } from "@/lib/utils";
import { useToast } from "@/components/ui/toast";

// GPA scale mapping
const gpaScales: { [key: string]: { [key: string]: number } } = {
  "4.0": {
    "A+": 4.0,
    A: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C: 2.0,
    "C-": 1.7,
    "D+": 1.3,
    D: 1.0,
    "D-": 0.7,
    F: 0.0,
  },
  "4.3": {
    "A+": 4.3,
    A: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C: 2.0,
    "C-": 1.7,
    "D+": 1.3,
    D: 1.0,
    "D-": 0.7,
    F: 0.0,
  },
  "5.0": {
    "A+": 5.0,
    A: 5.0,
    "A-": 4.7,
    "B+": 4.3,
    B: 4.0,
    "B-": 3.7,
    "C+": 3.3,
    C: 3.0,
    "C-": 2.7,
    "D+": 2.3,
    D: 2.0,
    "D-": 1.7,
    F: 0.0,
  },
};

const GPACalculator = forwardRef((props, ref) => {
  const { toast } = useToast();
  const [scale, setScale] = useState("4.0");
  const [courses, setCourses] = useState([
    { id: 1, name: "", grade: "", credits: "3" },
    { id: 2, name: "", grade: "", credits: "3" },
    { id: 3, name: "", grade: "", credits: "3" },
    { id: 4, name: "", grade: "", credits: "3" },
  ]);

  const [gpa, setGpa] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState(0);
  const [totalGradePoints, setTotalGradePoints] = useState(0);
  const [previousGPA, setPreviousGPA] = useState("");
  const [previousCredits, setPreviousCredits] = useState("");
  const [cumulativeGPA, setCumulativeGPA] = useState<number | null>(null);
  const [hasValidationError, setHasValidationError] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  // Load saved data on mount
  useEffect(() => {
    const savedData = loadFromLocalStorage<GPACalculatorData>("gpa-calculator");
    if (savedData) {
      if (savedData.scale) setScale(savedData.scale);
      if (savedData.courses) setCourses(savedData.courses);
      if (savedData.previousGPA) setPreviousGPA(savedData.previousGPA);
      if (savedData.previousCredits)
        setPreviousCredits(savedData.previousCredits);
    }
  }, []);

  // Debounced calculation to improve performance
  const debouncedCalculateGPA = useCallback(() => {
    const timeoutId = setTimeout(() => {
      calculateGPA();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [courses, scale, previousGPA, previousCredits]);

  // Calculate GPA whenever inputs change (with debouncing)
  useEffect(() => {
    const cleanup = debouncedCalculateGPA();
    return cleanup;
  }, [debouncedCalculateGPA]);

  // Validation effect
  useEffect(() => {
    validateInputs();
  }, [courses, previousGPA, previousCredits, scale]);

  const validateInputs = () => {
    const errors: string[] = [];
    let hasError = false;

    courses.forEach((course, index) => {
      if (course.credits && parseFloat(course.credits) < 0) {
        errors.push(`Course ${index + 1}: Credits cannot be negative`);
        hasError = true;
      }
      if (course.credits && parseFloat(course.credits) > 20) {
        errors.push(`Course ${index + 1}: Credits cannot exceed 20`);
        hasError = true;
      }
    });

    if (
      previousGPA &&
      (parseFloat(previousGPA) < 0 ||
        parseFloat(previousGPA) > parseFloat(scale))
    ) {
      errors.push(`Previous GPA must be between 0 and ${scale}`);
      hasError = true;
    }

    if (previousCredits && parseFloat(previousCredits) < 0) {
      errors.push("Previous credits cannot be negative");
      hasError = true;
    }

    setValidationErrors(errors);
    setHasValidationError(hasError);
  };

  const handleCourseChange = (id: number, field: string, value: string) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, [field]: value } : course
      )
    );
  };

  const handleAddCourse = () => {
    if (courses.length >= 15) {
      toast({
        title: "Maximum Limit Reached",
        description: "You can add up to 15 courses only.",
        variant: "destructive",
      });
      return;
    }

    const newId =
      courses.length > 0
        ? Math.max(...courses.map((course) => course.id)) + 1
        : 1;

    setCourses((prevCourses) => [
      ...prevCourses,
      { id: newId, name: "", grade: "", credits: "3" },
    ]);
  };

  const handleRemoveCourse = (id: number) => {
    if (courses.length <= 1) {
      toast({
        title: "Minimum Requirement",
        description: "At least 1 course is required for GPA calculation.",
        variant: "destructive",
      });
      return;
    }
    setCourses((prevCourses) =>
      prevCourses.filter((course) => course.id !== id)
    );
  };

  const calculateGPA = () => {
    // Filter out courses with incomplete data
    const validCourses = courses.filter(
      (course) =>
        course.grade && course.credits && parseFloat(course.credits) > 0
    );

    if (validCourses.length === 0) {
      setGpa(null);
      setTotalCredits(0);
      setTotalGradePoints(0);
      setCumulativeGPA(null);
      return;
    }

    let totalCreditsValue = 0;
    let totalGradePointsValue = 0;

    // Calculate total grade points and total credits
    validCourses.forEach((course) => {
      const credits = parseFloat(course.credits);
      const gradePoints = gpaScales[scale][course.grade] * credits;

      totalCreditsValue += credits;
      totalGradePointsValue += gradePoints;
    });

    // Calculate current GPA
    const calculatedGPA = totalGradePointsValue / totalCreditsValue;

    setGpa(calculatedGPA);
    setTotalCredits(totalCreditsValue);
    setTotalGradePoints(totalGradePointsValue);

    // Calculate cumulative GPA if previous GPA and credits are provided
    if (previousGPA && previousCredits) {
      const prevGPAValue = parseFloat(previousGPA);
      const prevCreditsValue = parseFloat(previousCredits);

      const prevGradePoints = prevGPAValue * prevCreditsValue;
      const cumulativeCredits = prevCreditsValue + totalCreditsValue;
      const cumulativeGradePoints = prevGradePoints + totalGradePointsValue;

      setCumulativeGPA(cumulativeGradePoints / cumulativeCredits);
    } else {
      setCumulativeGPA(null);
    }
  };

  const handleReset = () => {
    setCourses([
      { id: 1, name: "", grade: "", credits: "3" },
      { id: 2, name: "", grade: "", credits: "3" },
      { id: 3, name: "", grade: "", credits: "3" },
      { id: 4, name: "", grade: "", credits: "3" },
    ]);
    setPreviousGPA("");
    setPreviousCredits("");
    setGpa(null);
    setTotalCredits(0);
    setTotalGradePoints(0);
    setCumulativeGPA(null);
    setHasValidationError(false);
    setValidationErrors([]);
    toast({
      title: "Calculator Reset",
      description: "All courses and data have been cleared.",
    });
  };

  const handleSave = () => {
    return {
      scale,
      courses,
      previousGPA,
      previousCredits,
    };
  };

  useImperativeHandle(ref, () => ({
    handleSave,
    handleReset,
  }));

  // Letter grade options
  const letterGradeOptions = Object.keys(gpaScales[scale]);

  return (
    <div>
      <div className="mb-6">
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-bold">GPA Calculator</h3>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-2">
            Enter your course letter grades (A, B+, C, etc.) and credit hours to
            calculate your term GPA. Add previous GPA to calculate cumulative
            GPA.
          </p>
        </div>

        <div className="mb-6">
          <Label htmlFor="gpa-scale" className="text-base sm:text-lg">
            GPA Scale
          </Label>
          <Select value={scale} onValueChange={setScale}>
            <SelectTrigger id="gpa-scale" className="w-full md:w-48">
              <SelectValue placeholder="Select scale" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4.0">4.0 Scale (Standard)</SelectItem>
              <SelectItem value="4.3">4.3 Scale (A+ = 4.3)</SelectItem>
              <SelectItem value="5.0">5.0 Scale (AP/Honors)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4 mb-6">
          <h4 className="font-medium text-base sm:text-lg">Enter Courses:</h4>

          <div className="grid grid-cols-12 gap-2 mb-2 font-medium text-sm sm:text-base">
            <div className="col-span-5 sm:col-span-4">Course Name</div>
            <div className="col-span-3">Grade</div>
            <div className="col-span-3">Credits</div>
            <div className="col-span-1"></div>
          </div>

          {courses.map((course) => (
            <div
              key={course.id}
              className="grid grid-cols-12 gap-2 items-center"
            >
              <div className="col-span-5 sm:col-span-4">
                <Input
                  type="text"
                  value={course.name}
                  onChange={(e) =>
                    handleCourseChange(course.id, "name", e.target.value)
                  }
                  placeholder="Course name"
                  className="w-full"
                />
              </div>

              <div className="col-span-3">
                <Select
                  value={course.grade}
                  onValueChange={(value) =>
                    handleCourseChange(course.id, "grade", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {letterGradeOptions.map((grade) => (
                      <SelectItem key={grade} value={grade}>
                        {grade}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-3">
                <Input
                  type="number"
                  value={course.credits}
                  onChange={(e) =>
                    handleCourseChange(course.id, "credits", e.target.value)
                  }
                  min="0"
                  step="0.5"
                  className="w-full"
                />
              </div>

              <div className="col-span-1 flex justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveCourse(course.id)}
                >
                  <Trash className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={handleAddCourse}
            className="mt-2"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Course
          </Button>
        </div>

        <div className="border-t pt-6 space-y-4 mb-6">
          <h4 className="font-medium text-lg sm:text-xl">
            Calculate Cumulative GPA (Optional):
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="previous-gpa" className="text-base sm:text-lg">
                Previous GPA
              </Label>
              <Input
                id="previous-gpa"
                type="number"
                value={previousGPA}
                onChange={(e) => setPreviousGPA(e.target.value)}
                min="0"
                max={scale}
                step="0.01"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="previous-credits "
                className="text-base sm:text-lg"
              >
                Previous Credits
              </Label>
              <Input
                id="previous-credits"
                type="number"
                value={previousCredits}
                onChange={(e) => setPreviousCredits(e.target.value)}
                min="0"
                step="0.5"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset Calculator
          </Button>
        </div>

        {/* Validation feedback */}
        {hasValidationError && validationErrors.length > 0 && (
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <div className="flex items-center gap-1 text-red-500 text-sm mb-2">
              <AlertTriangle className="h-4 w-4" />
              Please fix the following issues:
            </div>
            <ul className="list-disc list-inside text-red-500 text-sm space-y-1">
              {validationErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {gpa !== null && (
        <div className="space-y-4">
          <ResultsDisplay
            title="Term GPA"
            result={gpa}
            units=""
            showLetter={false}
            isSuccess={gpa >= (scale === "5.0" ? 3.0 : 2.0)}
            customMessage={`${totalCredits} credits • ${totalGradePoints.toFixed(
              1
            )} grade points`}
          />

          {cumulativeGPA !== null && (
            <ResultsDisplay
              title="Cumulative GPA"
              result={cumulativeGPA}
              units=""
              showLetter={false}
              isSuccess={cumulativeGPA >= (scale === "5.0" ? 3.0 : 2.0)}
              customMessage={`${
                parseFloat(previousCredits) + totalCredits
              } total credits`}
            />
          )}
        </div>
      )}
    </div>
  );
});

GPACalculator.displayName = "GPACalculator";

export default GPACalculator;
