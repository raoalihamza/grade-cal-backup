"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, RotateCcw, AlertTriangle } from "lucide-react";
import { useToast } from "@/components/ui/toast";

export default function SgpaToPercentageCalculator() {
  const { toast } = useToast();
  const [sgpa, setSgpa] = useState<string>("");
  const [gradingScale, setGradingScale] = useState<string>("10");
  const [result, setResult] = useState<{
    percentage: number;
    grade?: string;
  } | null>(null);
  const [hasValidationError, setHasValidationError] = useState<boolean>(false);
  const [validationMessage, setValidationMessage] = useState<string>("");

  // Get maximum SGPA for selected scale
  const getMaxSgpa = (scale: string): number => {
    switch (scale) {
      case "10":
        return 10.0;
      case "5":
        return 5.0;
      case "4":
        return 4.0;
      case "hec":
        return 4.0;
      default:
        return 10.0;
    }
  };

  // Conversion formulas based on grading scale
  const getConversionFormula = (scale: string) => {
    switch (scale) {
      case "10":
        return {
          multiplier: 10,
          subtractor: 7.5,
          formula: "(SGPA × 10) - 7.5",
        };
      case "5":
        return {
          multiplier: 20,
          subtractor: 7.5,
          formula: "(SGPA × 20) - 7.5",
        };
      case "4":
        return { multiplier: 25, subtractor: 0, formula: "SGPA × 25" };
      case "hec":
        return { multiplier: 25, subtractor: 0, formula: "SGPA × 25" };
      default:
        return {
          multiplier: 10,
          subtractor: 7.5,
          formula: "(SGPA × 10) - 7.5",
        };
    }
  };

  // Grade classification based on percentage
  const getGradeClassification = (
    percentage: number,
    scale: string
  ): string => {
    if (scale === "hec") {
      // Pakistan HEC grading system
      if (percentage >= 85) return "A (85% and above)";
      if (percentage >= 80) return "A- (80-84%)";
      if (percentage >= 75) return "B+ (75-79%)";
      if (percentage >= 71) return "B (71-74%)";
      if (percentage >= 68) return "B- (68-70%)";
      if (percentage >= 64) return "C+ (64-67%)";
      if (percentage >= 61) return "C (61-63%)";
      if (percentage >= 58) return "C- (58-60%)";
      if (percentage >= 54) return "D+ (54-57%)";
      if (percentage >= 50) return "D (50-53%)";
      return "F (Below 50%)";
    }

    // Standard grading
    if (percentage >= 90) return "O (Outstanding)";
    if (percentage >= 80) return "A+ (Excellent)";
    if (percentage >= 70) return "A (Very Good)";
    if (percentage >= 60) return "B+ (Good)";
    if (percentage >= 50) return "B (Above Average)";
    if (percentage >= 40) return "C (Average)";
    if (percentage >= 35) return "D (Pass)";
    return "F (Fail)";
  };

  // Validate SGPA input
  const validateSgpa = useCallback((value: string, scale: string): boolean => {
    if (!value.trim()) {
      setHasValidationError(false);
      setValidationMessage("");
      return false;
    }

    const num = parseFloat(value);
    const maxSgpa = getMaxSgpa(scale);

    if (isNaN(num)) {
      setHasValidationError(true);
      setValidationMessage("Please enter a valid number");
      return false;
    }

    if (num < 0) {
      setHasValidationError(true);
      setValidationMessage("SGPA cannot be negative");
      return false;
    }

    if (num > maxSgpa) {
      setHasValidationError(true);
      setValidationMessage(
        `SGPA cannot exceed ${maxSgpa} for ${scale}.0 scale`
      );
      return false;
    }

    setHasValidationError(false);
    setValidationMessage("");
    return true;
  }, []);

  // Debounced calculation
  const debouncedCalculate = useCallback(() => {
    const timeoutId = setTimeout(() => {
      calculatePercentage();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [sgpa, gradingScale]);

  useEffect(() => {
    const cleanup = debouncedCalculate();
    return cleanup;
  }, [debouncedCalculate]);

  useEffect(() => {
    validateSgpa(sgpa, gradingScale);
  }, [sgpa, gradingScale, validateSgpa]);

  const calculatePercentage = () => {
    if (!validateSgpa(sgpa, gradingScale)) {
      setResult(null);
      return;
    }

    const sgpaValue = parseFloat(sgpa);
    const { multiplier, subtractor } = getConversionFormula(gradingScale);

    // Calculate percentage
    let percentage = sgpaValue * multiplier - subtractor;

    // Cap at 100%
    percentage = Math.min(percentage, 100);

    // Ensure not negative
    percentage = Math.max(percentage, 0);

    // Round to 2 decimal places
    percentage = parseFloat(percentage.toFixed(2));

    const grade = getGradeClassification(percentage, gradingScale);

    setResult({ percentage, grade });
  };

  const handleCalculate = () => {
    if (!sgpa.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter an SGPA value to convert.",
        variant: "destructive",
      });
      return;
    }

    if (hasValidationError) {
      toast({
        title: "Invalid Input",
        description: validationMessage,
        variant: "destructive",
      });
      return;
    }

    calculatePercentage();

    toast({
      title: "Percentage Calculated",
      description: `Your percentage is ${result?.percentage}% from SGPA ${sgpa}.`,
    });
  };

  const resetCalculator = () => {
    setSgpa("");
    setResult(null);
    setGradingScale("10");
    setHasValidationError(false);
    setValidationMessage("");

    toast({
      title: "Calculator Reset",
      description: "All fields have been cleared.",
    });
  };

  const { formula } = getConversionFormula(gradingScale);
  const maxSgpa = getMaxSgpa(gradingScale);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 hidden sm:block" />
            Free Online SGPA to Percentage Calculator
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Convert your SGPA to percentage instantly using our free and
            accurate online calculator
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="sgpa" className="text-base font-semibold">
                Enter SGPA
              </Label>
              <div className="relative">
                <Input
                  id="sgpa"
                  type="number"
                  step="0.01"
                  min="0"
                  max={maxSgpa}
                  placeholder={`e.g., ${
                    maxSgpa === 10 ? "8.5" : maxSgpa === 5 ? "4.2" : "3.5"
                  }`}
                  value={sgpa}
                  onChange={(e) => setSgpa(e.target.value)}
                  className={`text-lg ${
                    hasValidationError ? "border-red-500" : ""
                  }`}
                />
              </div>
              {hasValidationError && (
                <div className="flex items-center gap-1 text-red-500 text-sm">
                  <AlertTriangle className="h-3 w-3" />
                  {validationMessage}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="grading-scale"
                className="text-base font-semibold"
              >
                Select Grading Scale
              </Label>
              <Select value={gradingScale} onValueChange={setGradingScale}>
                <SelectTrigger id="grading-scale" className="text-lg">
                  <SelectValue placeholder="Select grading scale" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">
                    10.0 Point Scale (India/UGC)
                  </SelectItem>
                  <SelectItem value="hec">
                    4.0 Point Scale (Pakistan HEC)
                  </SelectItem>
                  <SelectItem value="4">4.0 Point Scale (US/Canada)</SelectItem>
                  <SelectItem value="5">5.0 Point Scale (Germany)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <h4 className="text-sm font-semibold mb-2 text-blue-900 dark:text-blue-100">
              Conversion Formula
            </h4>
            <p className="text-sm text-blue-700 dark:text-blue-300 font-mono">
              {formula}
            </p>
          </div>

          <div className="flex gap-3">
            <Button onClick={handleCalculate} className="flex-1">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Percentage
            </Button>
            <Button onClick={resetCalculator} variant="outline">
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-2 border-green-500">
          <CardHeader className="bg-green-50 dark:bg-green-900/20">
            <CardTitle className="text-center text-green-700 dark:text-green-300">
              Conversion Results
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-lg p-8 text-white">
                  <h3 className="text-lg font-semibold mb-2">
                    Your Percentage
                  </h3>
                  <p className="text-5xl font-bold mb-2">
                    {result.percentage}%
                  </p>
                  <p className="text-sm opacity-90">
                    from SGPA {sgpa} on{" "}
                    {gradingScale === "hec"
                      ? "4.0 scale (Pakistan HEC)"
                      : `${gradingScale}.0 scale`}
                  </p>
                </div>
              </div>

              {result.grade && (
                <div className="bg-secondary/40 rounded-lg p-4">
                  <h4 className="text-sm font-semibold mb-2">
                    Grade Classification
                  </h4>
                  <p className="text-2xl font-bold text-primary">
                    {result.grade}
                  </p>
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-secondary/40 rounded-lg p-4 text-center">
                  <p className="font-semibold mb-1">Input SGPA</p>
                  <p className="text-lg text-primary">{sgpa}</p>
                </div>
                <div className="bg-secondary/40 rounded-lg p-4 text-center">
                  <p className="font-semibold mb-1">Grading Scale</p>
                  <p className="text-lg text-primary">
                    {gradingScale === "hec"
                      ? "4.0 Point (HEC)"
                      : `${gradingScale}.0 Point`}
                  </p>
                </div>
                <div className="bg-secondary/40 rounded-lg p-4 text-center">
                  <p className="font-semibold mb-1">Formula Used</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {formula}
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                <p className="text-xs text-amber-800 dark:text-amber-200">
                  <strong>Note:</strong> SGPA to percentage conversion formulas
                  may vary across institutions. This calculator uses the most
                  commonly accepted conversion methods. Always verify with your
                  institution for their specific conversion formula.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Reference Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            Quick Reference: SGPA to Percentage Conversion (10.0 Scale)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b text-sm sm:text-base">
                  <th className="text-left p-3 bg-secondary/40">SGPA</th>
                  <th className="text-left p-3 bg-secondary/40">Percentage</th>
                  <th className="text-left p-3 bg-secondary/40">Grade</th>
                  <th className="text-left p-3 bg-secondary/40">
                    Classification
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    sgpa: "10.0",
                    percent: "92.5%",
                    grade: "O",
                    class: "Outstanding",
                  },
                  {
                    sgpa: "9.5",
                    percent: "87.5%",
                    grade: "A+",
                    class: "Excellent",
                  },
                  {
                    sgpa: "9.0",
                    percent: "82.5%",
                    grade: "A+",
                    class: "Excellent",
                  },
                  {
                    sgpa: "8.5",
                    percent: "77.5%",
                    grade: "A",
                    class: "Very Good",
                  },
                  {
                    sgpa: "8.0",
                    percent: "72.5%",
                    grade: "A",
                    class: "Very Good",
                  },
                  { sgpa: "7.5", percent: "67.5%", grade: "B+", class: "Good" },
                  { sgpa: "7.0", percent: "62.5%", grade: "B+", class: "Good" },
                  {
                    sgpa: "6.5",
                    percent: "57.5%",
                    grade: "B",
                    class: "Above Average",
                  },
                  {
                    sgpa: "6.0",
                    percent: "52.5%",
                    grade: "B",
                    class: "Above Average",
                  },
                  {
                    sgpa: "5.5",
                    percent: "47.5%",
                    grade: "C",
                    class: "Average",
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-secondary/20 text-sm sm:text-base"
                  >
                    <td className="p-3 font-semibold">{row.sgpa}</td>
                    <td className="p-3">{row.percent}</td>
                    <td className="p-3 font-semibold text-primary">
                      {row.grade}
                    </td>
                    <td className="p-3">{row.class}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
