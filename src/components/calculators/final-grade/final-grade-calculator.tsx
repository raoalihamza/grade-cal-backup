"use client";

import {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import ResultsDisplay from "@/components/shared/results-display";
import {
  calculateRequiredGrade,
  percentageToLetter,
  letterToPercentage,
  isGradeAchievable,
  loadFromLocalStorage,
  type FinalGradeData,
} from "@/lib/utils";
import { RotateCcw, AlertTriangle } from "lucide-react";
import { useToast } from "@/components/ui/toast";
import CalculatorContainer from "@/components/shared/calculator-container";

const FinalGradeCalculator = forwardRef((props, ref) => {
  const { toast } = useToast();
  // Grade scale state
  const [gradeScale, setGradeScale] = useState("percentage"); // 'percentage' or 'letter'

  // Percentage mode state
  const [currentGrade, setCurrentGrade] = useState("");
  const [desiredGrade, setDesiredGrade] = useState("");
  const [examWeight, setExamWeight] = useState("");

  // Letter mode state
  const [currentLetterGrade, setCurrentLetterGrade] = useState("");
  const [desiredLetterGrade, setDesiredLetterGrade] = useState("");
  const [letterExamWeight, setLetterExamWeight] = useState("");

  // Results
  const [requiredGrade, setRequiredGrade] = useState<number | null>(null);
  const [letterGrade, setLetterGrade] = useState("");
  const [achievable, setAchievable] = useState(true);
  const [hasValidationError, setHasValidationError] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  // Load saved data on mount
  useEffect(() => {
    const savedData = loadFromLocalStorage<FinalGradeData>("final-grade");
    if (savedData) {
      if (savedData.gradeScale) setGradeScale(savedData.gradeScale);

      // Percentage mode
      if (savedData.currentGrade) setCurrentGrade(savedData.currentGrade);
      if (savedData.desiredGrade) setDesiredGrade(savedData.desiredGrade);
      if (savedData.examWeight) setExamWeight(savedData.examWeight);

      // Letter mode
      if (savedData.currentLetterGrade)
        setCurrentLetterGrade(savedData.currentLetterGrade);
      if (savedData.desiredLetterGrade)
        setDesiredLetterGrade(savedData.desiredLetterGrade);
      if (savedData.letterExamWeight)
        setLetterExamWeight(savedData.letterExamWeight);
    }
  }, []);

  // Calculate required grade based on inputs
  const calculateGrade = () => {
    if (hasValidationError) {
      setRequiredGrade(null);
      setLetterGrade("");
      setAchievable(true);
      return;
    }

    if (gradeScale === "percentage") {
      if (!currentGrade || !desiredGrade || !examWeight) return;

      const current = parseFloat(currentGrade);
      const desired = parseFloat(desiredGrade);
      const weight = parseFloat(examWeight);

      if (current >= desired) {
        setRequiredGrade(0);
        setLetterGrade("A+");
        setAchievable(true);
        return;
      }

      const required = calculateRequiredGrade(
        current,
        desired,
        100 - weight,
        weight
      );

      setRequiredGrade(required);
      setLetterGrade(percentageToLetter(required));
      setAchievable(isGradeAchievable(required));

      if (!isGradeAchievable(required)) {
        toast({
          title: "Target May Not Be Achievable",
          description:
            "You need more than 100% on the final exam to reach your target grade.",
          variant: "destructive",
        });
      }
    } else {
      if (!currentLetterGrade || !desiredLetterGrade || !letterExamWeight)
        return;

      const current = letterToPercentage(currentLetterGrade);
      const desired = letterToPercentage(desiredLetterGrade);
      const weight = parseFloat(letterExamWeight);

      if (current >= desired) {
        setRequiredGrade(0);
        setLetterGrade("A+");
        setAchievable(true);
        return;
      }

      const required = calculateRequiredGrade(
        current,
        desired,
        100 - weight,
        weight
      );

      setRequiredGrade(required);
      setLetterGrade(percentageToLetter(required));
      setAchievable(isGradeAchievable(required));

      if (!isGradeAchievable(required)) {
        toast({
          title: "Target May Not Be Achievable",
          description:
            "You need more than 100% on the final exam to reach your target grade.",
          variant: "destructive",
        });
      }
    }
  };

  // Debounced calculation to improve performance
  const debouncedCalculateGrade = useCallback(() => {
    const timeoutId = setTimeout(() => {
      calculateGrade();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [
    currentGrade,
    desiredGrade,
    examWeight,
    currentLetterGrade,
    desiredLetterGrade,
    letterExamWeight,
    gradeScale,
  ]);

  // Calculate grade when inputs change (with debouncing)
  useEffect(() => {
    const cleanup = debouncedCalculateGrade();
    return cleanup;
  }, [debouncedCalculateGrade]);

  // Validation effect
  useEffect(() => {
    validateInputs();
  }, [
    currentGrade,
    desiredGrade,
    examWeight,
    currentLetterGrade,
    desiredLetterGrade,
    letterExamWeight,
    gradeScale,
  ]);

  const validateInputs = () => {
    const errors: string[] = [];
    let hasError = false;

    if (gradeScale === "percentage") {
      if (
        currentGrade &&
        (parseFloat(currentGrade) < 0 || parseFloat(currentGrade) > 100)
      ) {
        errors.push("Current grade must be between 0 and 100");
        hasError = true;
      }
      if (
        desiredGrade &&
        (parseFloat(desiredGrade) < 0 || parseFloat(desiredGrade) > 100)
      ) {
        errors.push("Desired grade must be between 0 and 100");
        hasError = true;
      }
      if (
        examWeight &&
        (parseFloat(examWeight) <= 0 || parseFloat(examWeight) > 100)
      ) {
        errors.push("Exam weight must be between 1 and 100");
        hasError = true;
      }
    } else {
      if (
        letterExamWeight &&
        (parseFloat(letterExamWeight) <= 0 ||
          parseFloat(letterExamWeight) > 100)
      ) {
        errors.push("Exam weight must be between 1 and 100");
        hasError = true;
      }
    }

    setValidationErrors(errors);
    setHasValidationError(hasError);
  };

  const handleReset = () => {
    setCurrentGrade("");
    setDesiredGrade("");
    setExamWeight("");
    setCurrentLetterGrade("");
    setDesiredLetterGrade("");
    setLetterExamWeight("");
    setRequiredGrade(null);
    setLetterGrade("");
    setAchievable(true);
    setHasValidationError(false);
    setValidationErrors([]);
    toast({
      title: "Calculator Reset",
      description: "All inputs have been cleared.",
    });
  };

  const handleSave = () => {
    return {
      gradeScale,
      currentGrade,
      desiredGrade,
      examWeight,
      currentLetterGrade,
      desiredLetterGrade,
      letterExamWeight,
    };
  };

  useImperativeHandle(ref, () => ({
    handleSave,
    handleReset,
  }));

  // Letter grade options
  const letterGradeOptions = [
    "A+",
    "A",
    "A-",
    "B+",
    "B",
    "B-",
    "C+",
    "C",
    "C-",
    "D+",
    "D",
    "D-",
    "F",
  ];

  return (
    <CalculatorContainer>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">
          Find out what grade you need on your final exam:
        </h3>

        <div className="mb-6">
          <p className="mb-2 font-medium">Select the grade scale:</p>
          <Tabs
            value={gradeScale}
            onValueChange={setGradeScale}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="percentage">Percentage</TabsTrigger>
              <TabsTrigger value="letter">Letters</TabsTrigger>
            </TabsList>

            <TabsContent value="percentage" className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-grade">Current Grade</Label>
                <div className="flex items-center">
                  <Input
                    id="current-grade"
                    type="number"
                    value={currentGrade}
                    onChange={(e) => setCurrentGrade(e.target.value)}
                    min="0"
                    max="100"
                    step="0.1"
                    className="w-full"
                  />
                  <span className="ml-2 text-sm text-muted-foreground">%</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="desired-grade">Desired Grade</Label>
                <div className="flex items-center">
                  <Input
                    id="desired-grade"
                    type="number"
                    value={desiredGrade}
                    onChange={(e) => setDesiredGrade(e.target.value)}
                    min="0"
                    max="100"
                    step="0.1"
                    className="w-full"
                  />
                  <span className="ml-2 text-sm text-muted-foreground">%</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="exam-weight">Final Exam Weight</Label>
                <div className="flex items-center">
                  <Input
                    id="exam-weight"
                    type="number"
                    value={examWeight}
                    onChange={(e) => setExamWeight(e.target.value)}
                    min="0"
                    max="100"
                    step="1"
                    className="w-full"
                  />
                  <span className="ml-2 text-sm text-muted-foreground">%</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="letter" className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-letter-grade">Current Grade</Label>
                <Select
                  value={currentLetterGrade}
                  onValueChange={setCurrentLetterGrade}
                >
                  <SelectTrigger id="current-letter-grade">
                    <SelectValue placeholder="Select grade" />
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

              <div className="space-y-2">
                <Label htmlFor="desired-letter-grade">Desired Grade</Label>
                <Select
                  value={desiredLetterGrade}
                  onValueChange={setDesiredLetterGrade}
                >
                  <SelectTrigger id="desired-letter-grade">
                    <SelectValue placeholder="Select grade" />
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

              <div className="space-y-2">
                <Label htmlFor="letter-exam-weight">Final Exam Weight</Label>
                <div className="flex items-center">
                  <Input
                    id="letter-exam-weight"
                    type="number"
                    value={letterExamWeight}
                    onChange={(e) => setLetterExamWeight(e.target.value)}
                    min="0"
                    max="100"
                    step="1"
                    className="w-full"
                  />
                  <span className="ml-2 text-sm text-muted-foreground">%</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex justify-center mt-4">
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Clear All
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

      {requiredGrade !== null && (
        <div className="space-y-4">
          <ResultsDisplay
            title="Final Exam Grade Needed:"
            result={requiredGrade}
            showLetter={true}
            isSuccess={achievable}
            customMessage={
              !achievable
                ? "You need more than 100% on the final exam. Consider adjusting your desired grade."
                : requiredGrade < 50
                ? "You're in good shape! You need less than 50% to reach your goal."
                : "Grade needed on your final exam to achieve your desired course grade"
            }
          />
        </div>
      )}
    </CalculatorContainer>
  );
});

FinalGradeCalculator.displayName = "FinalGradeCalculator";

export default FinalGradeCalculator;
