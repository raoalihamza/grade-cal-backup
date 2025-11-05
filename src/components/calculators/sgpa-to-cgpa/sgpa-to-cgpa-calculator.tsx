"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, MinusCircle, Calculator, RotateCcw } from "lucide-react";
import { useToast } from "@/components/ui/toast";

interface SemesterData {
  id: number;
  sgpa: string;
}

export default function SgpaToCgpaCalculator() {
  const { toast } = useToast();
  const [gradingScale, setGradingScale] = useState<string>("10");
  const [calculationMethod, setCalculationMethod] = useState<string>("individual");
  const [semesters, setSemesters] = useState<SemesterData[]>([
    { id: 1, sgpa: "" },
    { id: 2, sgpa: "" },
  ]);
  const [totalSgpa, setTotalSgpa] = useState<string>("");
  const [totalSemesters, setTotalSemesters] = useState<string>("");
  const [result, setResult] = useState<{
    cgpa: number;
    percentage?: number;
  } | null>(null);

  const getMaxGrade = (scale: string): number => {
    switch (scale) {
      case "4":
        return 4.0;
      case "5":
        return 5.0;
      case "10":
        return 10.0;
      default:
        return 10.0;
    }
  };

  const validateSgpa = (value: string, scale: string): boolean => {
    const num = parseFloat(value);
    const max = getMaxGrade(scale);
    return !isNaN(num) && num >= 0 && num <= max;
  };

  const addSemester = () => {
    if (semesters.length >= 12) {
      toast({
        title: "Maximum Limit Reached",
        description: "You can add up to 12 semesters only.",
        variant: "destructive",
      });
      return;
    }

    const newId = Math.max(...semesters.map(s => s.id)) + 1;
    setSemesters([...semesters, { id: newId, sgpa: "" }]);
  };

  const removeSemester = (id: number) => {
    if (semesters.length <= 2) {
      toast({
        title: "Minimum Requirement",
        description: "At least 2 semesters are required for CGPA calculation.",
        variant: "destructive",
      });
      return;
    }
    setSemesters(semesters.filter(s => s.id !== id));
  };

  const updateSemesterSgpa = (id: number, value: string) => {
    setSemesters(semesters.map(s =>
      s.id === id ? { ...s, sgpa: value } : s
    ));
  };

  const calculateCgpaIndividual = () => {
    const validSemesters = semesters.filter(s => s.sgpa.trim() !== "");

    if (validSemesters.length < 2) {
      toast({
        title: "Insufficient Data",
        description: "Please enter SGPA for at least 2 semesters.",
        variant: "destructive",
      });
      return;
    }

    // Validate all SGPA values
    for (const semester of validSemesters) {
      if (!validateSgpa(semester.sgpa, gradingScale)) {
        toast({
          title: "Invalid SGPA",
          description: `SGPA must be between 0 and ${getMaxGrade(gradingScale)} for the selected grading scale.`,
          variant: "destructive",
        });
        return;
      }
    }

    const totalSgpaSum = validSemesters.reduce((sum, sem) => sum + parseFloat(sem.sgpa), 0);
    const cgpa = totalSgpaSum / validSemesters.length;

    // Calculate percentage based on grading scale
    let percentage;
    if (gradingScale === "10") {
      percentage = cgpa * 9.5; // Common conversion for 10-point scale
    } else if (gradingScale === "4") {
      percentage = (cgpa / 4) * 100;
    } else if (gradingScale === "5") {
      percentage = (cgpa / 5) * 100;
    }

    setResult({ cgpa: parseFloat(cgpa.toFixed(2)), percentage: percentage ? parseFloat(percentage.toFixed(2)) : undefined });

    toast({
      title: "CGPA Calculated",
      description: `Your CGPA is ${cgpa.toFixed(2)} based on ${validSemesters.length} semesters.`,
    });
  };

  const calculateCgpaTotal = () => {
    if (!totalSgpa.trim() || !totalSemesters.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter both total SGPA and number of semesters.",
        variant: "destructive",
      });
      return;
    }

    const sgpaValue = parseFloat(totalSgpa);
    const semesterCount = parseInt(totalSemesters);

    if (isNaN(sgpaValue) || isNaN(semesterCount)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numeric values.",
        variant: "destructive",
      });
      return;
    }

    if (semesterCount <= 0 || semesterCount > 12) {
      toast({
        title: "Invalid Semester Count",
        description: "Number of semesters must be between 1 and 12.",
        variant: "destructive",
      });
      return;
    }

    const maxTotalSgpa = getMaxGrade(gradingScale) * semesterCount;
    if (sgpaValue < 0 || sgpaValue > maxTotalSgpa) {
      toast({
        title: "Invalid Total SGPA",
        description: `Total SGPA must be between 0 and ${maxTotalSgpa} for ${semesterCount} semesters with ${gradingScale}-point scale.`,
        variant: "destructive",
      });
      return;
    }

    const cgpa = sgpaValue / semesterCount;

    // Calculate percentage based on grading scale
    let percentage;
    if (gradingScale === "10") {
      percentage = cgpa * 9.5;
    } else if (gradingScale === "4") {
      percentage = (cgpa / 4) * 100;
    } else if (gradingScale === "5") {
      percentage = (cgpa / 5) * 100;
    }

    setResult({ cgpa: parseFloat(cgpa.toFixed(2)), percentage: percentage ? parseFloat(percentage.toFixed(2)) : undefined });

    toast({
      title: "CGPA Calculated",
      description: `Your CGPA is ${cgpa.toFixed(2)} based on ${semesterCount} semesters.`,
    });
  };

  const resetCalculator = () => {
    setSemesters([
      { id: 1, sgpa: "" },
      { id: 2, sgpa: "" },
    ]);
    setTotalSgpa("");
    setTotalSemesters("");
    setResult(null);
    setGradingScale("10");
    setCalculationMethod("individual");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Calculator className="h-5 w-5 hidden sm:block" />
            SGPA to CGPA Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pb-4">
          <div className="space-y-2">
            <Label htmlFor="grading-scale" className="text-base sm:text-lg">
              Grading Scale
            </Label>
            <Select value={gradingScale} onValueChange={setGradingScale}>
              <SelectTrigger>
                <SelectValue placeholder="Select grading scale" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10.0 Point Scale</SelectItem>
                <SelectItem value="4">4.0 Point Scale</SelectItem>
                <SelectItem value="5">5.0 Point Scale</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs value={calculationMethod} onValueChange={setCalculationMethod}>
            <TabsList className="grid w-full grid-cols-2 h-auto mb-4">
              <TabsTrigger
                value="individual"
                className="text-xs sm:text-sm px-2 py-2"
              >
                <span className="hidden sm:inline">Individual Semesters</span>
                <span className="sm:hidden">Individual</span>
              </TabsTrigger>
              <TabsTrigger
                value="total"
                className="text-xs sm:text-sm px-2 py-2"
              >
                <span className="hidden sm:inline">Total SGPA Method</span>
                <span className="sm:hidden">Total SGPA</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="individual" className="space-y-4">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <Label className="text-sm sm:text-base font-medium">
                    Enter SGPA for Each Semester
                  </Label>
                  <Button
                    onClick={addSemester}
                    size="sm"
                    variant="outline"
                    className="w-full sm:w-auto hidden sm:flex"
                  >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Semester
                  </Button>
                </div>

                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                  {semesters.map((semester, index) => (
                    <div key={semester.id} className="flex items-end gap-2">
                      <div className="flex-1 space-y-1.5">
                        <Label
                          htmlFor={`semester-${semester.id}`}
                          className="text-sm"
                        >
                          Semester {index + 1}
                        </Label>
                        <Input
                          id={`semester-${semester.id}`}
                          type="number"
                          step="0.01"
                          min="0"
                          max={getMaxGrade(gradingScale)}
                          placeholder={`SGPA (0-${getMaxGrade(gradingScale)})`}
                          value={semester.sgpa}
                          onChange={(e) =>
                            updateSemesterSgpa(semester.id, e.target.value)
                          }
                          className="h-10"
                        />
                      </div>
                      {semesters.length > 2 && (
                        <Button
                          onClick={() => removeSemester(semester.id)}
                          size="sm"
                          variant="outline"
                          className="h-10 w-10 p-0 shrink-0"
                        >
                          <MinusCircle className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <div className="flex sm:hidden">
                    <Button
                      onClick={addSemester}
                      size="sm"
                      variant="outline"
                      className="w-full sm:w-auto border-2"
                    >
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Semester
                    </Button>
                  </div>
                </div>

                <div className="flex gap-2 !mt-[2rem]">
                  <Button onClick={calculateCgpaIndividual} className="w-[70%]">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate CGPA
                  </Button>
                  <Button
                    onClick={resetCalculator}
                    variant="outline"
                    className="w-[30%]"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="total" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="total-sgpa" className="text-base sm:text-lg">
                    Total SGPA Sum
                  </Label>
                  <Input
                    id="total-sgpa"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Sum of all SGPAs"
                    value={totalSgpa}
                    onChange={(e) => setTotalSgpa(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="total-semesters"
                    className="text-base sm:text-lg"
                  >
                    Number of Semesters
                  </Label>
                  <Input
                    id="total-semesters"
                    type="number"
                    min="1"
                    max="12"
                    placeholder="Total semesters"
                    value={totalSemesters}
                    onChange={(e) => setTotalSemesters(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={calculateCgpaTotal} className="w-[70%]">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate CGPA
                </Button>
                <Button
                  onClick={resetCalculator}
                  variant="outline"
                  className="w-[30%]"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-green-600">
              Calculation Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-green-600 mb-2">
                  Your CGPA
                </h3>
                <p className="text-xl sm:text-2xl font-bold text-green-700">
                  {result.cgpa}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                  On {gradingScale}.0 Point Scale
                </p>
              </div>

              {result.percentage && (
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 sm:p-6">
                  <h3 className="text-sm sm:text-base font-semibold text-blue-600 mb-2">
                    Equivalent Percentage
                  </h3>
                  <p className="text-lg sm:text-xl font-bold text-blue-700">
                    {result.percentage}%
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    *Approximate conversion based on common formulas
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
                <div className="text-center p-3 sm:p-0 bg-secondary/30 sm:bg-transparent rounded-lg">
                  <p className="font-semibold">Grade Classification</p>
                  <p className="text-muted-foreground">
                    {result.cgpa >=
                    (gradingScale === "10"
                      ? 8.5
                      : gradingScale === "4"
                      ? 3.5
                      : 4.5)
                      ? "Excellent"
                      : result.cgpa >=
                        (gradingScale === "10"
                          ? 7.0
                          : gradingScale === "4"
                          ? 3.0
                          : 3.5)
                      ? "Good"
                      : result.cgpa >=
                        (gradingScale === "10"
                          ? 6.0
                          : gradingScale === "4"
                          ? 2.5
                          : 3.0)
                      ? "Average"
                      : "Below Average"}
                  </p>
                </div>
                <div className="text-center p-3 sm:p-0 bg-secondary/30 sm:bg-transparent rounded-lg">
                  <p className="font-semibold">Scale Used</p>
                  <p className="text-muted-foreground">
                    {gradingScale}.0 Point
                  </p>
                </div>
                <div className="text-center p-3 sm:p-0 bg-secondary/30 sm:bg-transparent rounded-lg">
                  <p className="font-semibold">Method</p>
                  <p className="text-muted-foreground">
                    {calculationMethod === "individual"
                      ? "Individual Semesters"
                      : "Total SGPA"}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}