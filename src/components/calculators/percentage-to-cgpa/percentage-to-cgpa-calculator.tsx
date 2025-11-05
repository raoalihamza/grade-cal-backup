"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, RotateCcw, ArrowLeftRight, AlertTriangle } from "lucide-react";
import { useToast } from "@/components/ui/toast";

export default function PercentageToCgpaCalculator() {
  const { toast } = useToast();
  const [percentage, setPercentage] = useState<string>("");
  const [gradingScale, setGradingScale] = useState<string>("10");
  const [result, setResult] = useState<{
    cgpa: number;
    grade?: string;
  } | null>(null);
  const [hasValidationError, setHasValidationError] = useState<boolean>(false);
  const [validationMessage, setValidationMessage] = useState<string>("");

  // Conversion formulas based on grading scale
  const getConversionFormula = (scale: string) => {
    switch (scale) {
      case "10":
        return { divisor: 9.5, max: 10.0, formula: "Percentage ÷ 9.5" };
      case "5":
        return { divisor: 20, max: 5.0, formula: "Percentage ÷ 20" };
      case "4":
        return { divisor: 25, max: 4.0, formula: "Percentage ÷ 25" };
      case "hec":
        return { divisor: 25, max: 4.0, formula: "Percentage ÷ 25" };
      default:
        return { divisor: 9.5, max: 10.0, formula: "Percentage ÷ 9.5" };
    }
  };

  // Grade classification based on CGPA
  const getGradeClassification = (cgpa: number, scale: string): string => {
    if (scale === "10") {
      if (cgpa >= 9.0) return "Outstanding (O)";
      if (cgpa >= 8.0) return "Excellent (A+)";
      if (cgpa >= 7.0) return "Very Good (A)";
      if (cgpa >= 6.0) return "Good (B+)";
      if (cgpa >= 5.0) return "Average (B)";
      if (cgpa >= 4.0) return "Pass (C)";
      return "Fail (F)";
    } else if (scale === "4") {
      if (cgpa >= 3.7) return "A";
      if (cgpa >= 3.3) return "A-";
      if (cgpa >= 3.0) return "B+";
      if (cgpa >= 2.7) return "B";
      if (cgpa >= 2.3) return "B-";
      if (cgpa >= 2.0) return "C+";
      if (cgpa >= 1.7) return "C";
      return "F";
    } else if (scale === "hec") {
      // Pakistan HEC Official Grading System
      if (cgpa >= 3.67) return "A (85% and above)";
      if (cgpa >= 3.34) return "A- (80-84%)";
      if (cgpa >= 3.01) return "B+ (75-79%)";
      if (cgpa >= 2.67) return "B (71-74%)";
      if (cgpa >= 2.34) return "B- (68-70%)";
      if (cgpa >= 2.01) return "C+ (64-67%)";
      if (cgpa >= 1.67) return "C (61-63%)";
      if (cgpa >= 1.31) return "C- (58-60%)";
      if (cgpa >= 1.01) return "D+ (54-57%)";
      if (cgpa >= 0.10) return "D (50-53%)";
      return "F (Below 50%)";
    } else if (scale === "5") {
      if (cgpa >= 4.5) return "Excellent";
      if (cgpa >= 4.0) return "Very Good";
      if (cgpa >= 3.5) return "Good";
      if (cgpa >= 3.0) return "Average";
      if (cgpa >= 2.5) return "Pass";
      return "Fail";
    }
    return "";
  };

  // Validate percentage input
  const validatePercentage = useCallback((value: string): boolean => {
    if (!value.trim()) {
      setHasValidationError(false);
      setValidationMessage("");
      return false;
    }

    const num = parseFloat(value);

    if (isNaN(num)) {
      setHasValidationError(true);
      setValidationMessage("Please enter a valid number");
      return false;
    }

    if (num < 0) {
      setHasValidationError(true);
      setValidationMessage("Percentage cannot be negative");
      return false;
    }

    if (num > 100) {
      setHasValidationError(true);
      setValidationMessage("Percentage cannot exceed 100%");
      return false;
    }

    setHasValidationError(false);
    setValidationMessage("");
    return true;
  }, []);

  // Debounced calculation
  const debouncedCalculate = useCallback(() => {
    const timeoutId = setTimeout(() => {
      calculateCGPA();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [percentage, gradingScale]);

  useEffect(() => {
    const cleanup = debouncedCalculate();
    return cleanup;
  }, [debouncedCalculate]);

  useEffect(() => {
    validatePercentage(percentage);
  }, [percentage, validatePercentage]);

  const calculateCGPA = () => {
    if (!validatePercentage(percentage)) {
      setResult(null);
      return;
    }

    const percentValue = parseFloat(percentage);
    const { divisor, max } = getConversionFormula(gradingScale);

    // Calculate CGPA
    let cgpa = percentValue / divisor;

    // Cap at maximum for the scale
    cgpa = Math.min(cgpa, max);

    // Round to 2 decimal places
    cgpa = parseFloat(cgpa.toFixed(2));

    const grade = getGradeClassification(cgpa, gradingScale);

    setResult({ cgpa, grade });
  };

  const handleCalculate = () => {
    if (!percentage.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter a percentage value to convert.",
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

    calculateCGPA();

    toast({
      title: "CGPA Calculated",
      description: `Your CGPA is ${result?.cgpa} on a ${gradingScale}.0 scale.`,
    });
  };

  const resetCalculator = () => {
    setPercentage("");
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

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl font-bold">
            <Calculator className="h-5 w-5 hidden sm:block" />
            Free Online Percentage to CGPA Calculator
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Convert your percentage marks to CGPA instantly using our free and
            accurate online calculator
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="percentage"
                className="text-sm sm:text-base font-semibold"
              >
                Enter Percentage (%)
              </Label>
              <div className="relative">
                <Input
                  id="percentage"
                  type="number"
                  step="0.01"
                  min="0"
                  max="100"
                  placeholder="e.g., 85.5"
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                  className={`text-base sm:text-lg ${
                    hasValidationError ? "border-red-500" : ""
                  }`}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  %
                </span>
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
                className="text-sm sm:text-base font-semibold"
              >
                Select Grading Scale
              </Label>
              <Select value={gradingScale} onValueChange={setGradingScale}>
                <SelectTrigger
                  id="grading-scale"
                  className="text-base sm:text-lg"
                >
                  <SelectValue placeholder="Select grading scale" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10.0 Point Scale (India)</SelectItem>
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
              Calculate CGPA
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
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    Your CGPA
                  </h3>
                  <p className="text-3xl sm:text-4xl font-bold mb-2">
                    {result.cgpa}
                  </p>
                  <p className="text-sm opacity-90">
                    on{" "}
                    {gradingScale === "hec"
                      ? "4.0 Point Scale (Pakistan HEC)"
                      : `${gradingScale}.0 Point Scale`}
                  </p>
                </div>
              </div>

              {result.grade && (
                <div className="bg-secondary/40 rounded-lg p-4">
                  <h4 className="text-sm font-semibold mb-2">
                    Grade Classification
                  </h4>
                  <p className="text-lg sm:text-2xl font-bold text-primary">
                    {result.grade}
                  </p>
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-secondary/40 rounded-lg p-4 text-center">
                  <p className="font-semibold mb-1">Input Percentage</p>
                  <p className="text-base sm:text-lg text-primary">
                    {percentage}%
                  </p>
                </div>
                <div className="bg-secondary/40 rounded-lg p-4 text-center">
                  <p className="font-semibold mb-1">Grading Scale</p>
                  <p className="text-base sm:text-lg text-primary">
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
                  <strong>Note:</strong> CGPA conversion formulas may vary
                  across institutions. This calculator uses standard conversion
                  methods. Please check with your institution for their specific
                  conversion formula.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Reference Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            Quick Reference: Percentage to CGPA Conversion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b text-sm sm:text-base">
                  <th className="text-left p-3 bg-secondary/40">Percentage</th>
                  <th className="text-left p-3 bg-secondary/40">CGPA (10.0)</th>
                  <th className="text-left p-3 bg-secondary/40">HEC (4.0)</th>
                  <th className="text-left p-3 bg-secondary/40">US (4.0)</th>
                  <th className="text-left p-3 bg-secondary/40">CGPA (5.0)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    percent: "95-100",
                    cgpa10: "10.0",
                    hec: "3.8-4.0",
                    cgpa4: "4.0",
                    cgpa5: "5.0",
                  },
                  {
                    percent: "90-95",
                    cgpa10: "9.5",
                    hec: "3.6-3.8",
                    cgpa4: "3.8",
                    cgpa5: "4.75",
                  },
                  {
                    percent: "85-90",
                    cgpa10: "9.0",
                    hec: "3.4-3.6",
                    cgpa4: "3.6",
                    cgpa5: "4.5",
                  },
                  {
                    percent: "80-85",
                    cgpa10: "8.5",
                    hec: "3.2-3.4",
                    cgpa4: "3.4",
                    cgpa5: "4.25",
                  },
                  {
                    percent: "75-80",
                    cgpa10: "8.0",
                    hec: "3.0-3.2",
                    cgpa4: "3.2",
                    cgpa5: "4.0",
                  },
                  {
                    percent: "70-75",
                    cgpa10: "7.5",
                    hec: "2.8-3.0",
                    cgpa4: "3.0",
                    cgpa5: "3.75",
                  },
                  {
                    percent: "65-70",
                    cgpa10: "7.0",
                    hec: "2.6-2.8",
                    cgpa4: "2.8",
                    cgpa5: "3.5",
                  },
                  {
                    percent: "60-65",
                    cgpa10: "6.5",
                    hec: "2.4-2.6",
                    cgpa4: "2.6",
                    cgpa5: "3.25",
                  },
                  {
                    percent: "55-60",
                    cgpa10: "6.0",
                    hec: "2.2-2.4",
                    cgpa4: "2.4",
                    cgpa5: "3.0",
                  },
                  {
                    percent: "50-55",
                    cgpa10: "5.5",
                    hec: "2.0-2.2",
                    cgpa4: "2.2",
                    cgpa5: "2.75",
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-secondary/20 text-sm sm:text-base"
                  >
                    <td className="p-3">{row.percent}%</td>
                    <td className="p-3">{row.cgpa10}</td>
                    <td className="p-3">{row.hec}</td>
                    <td className="p-3">{row.cgpa4}</td>
                    <td className="p-3">{row.cgpa5}</td>
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
