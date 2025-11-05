"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Calculator, Trash2 } from "lucide-react";

interface CalculationResult {
  sgpa: number;
  percentage: number;
  scale: string;
  formula: string;
  grade: string;
}

const PercentageToSgpaCalculator = () => {
  const [percentage, setPercentage] = useState("");
  const [scale, setScale] = useState("10.0");
  const [result, setResult] = useState<CalculationResult | null>(null);

  // Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("percentageToSgpaData");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (parsed.percentage) setPercentage(parsed.percentage);
        if (parsed.scale) setScale(parsed.scale);
      } catch (error) {
        console.error("Error loading saved data:", error);
      }
    }
  }, []);

  // Save data to localStorage
  const saveToLocalStorage = useCallback(() => {
    const dataToSave = { percentage, scale };
    localStorage.setItem("percentageToSgpaData", JSON.stringify(dataToSave));
  }, [percentage, scale]);

  const getMaxSgpa = (scale: string): number => {
    switch (scale) {
      case "10.0":
        return 10.0;
      case "5.0":
        return 5.0;
      case "4.0":
        return 4.0;
      case "hec":
        return 4.0;
      default:
        return 10.0;
    }
  };

  const getConversionFormula = (scale: string) => {
    switch (scale) {
      case "10.0":
        return { divisor: 9.5, formula: "Percentage ÷ 9.5" };
      case "5.0":
        return { divisor: 20, formula: "Percentage ÷ 20" };
      case "4.0":
        return { divisor: 25, formula: "Percentage ÷ 25" };
      case "hec":
        return { divisor: 25, formula: "Percentage ÷ 25" };
      default:
        return { divisor: 9.5, formula: "Percentage ÷ 9.5" };
    }
  };

  const getGradeClassification = (sgpa: number, scale: string): string => {
    if (scale === "hec") {
      if (sgpa >= 3.67) return "A (85% and above)";
      if (sgpa >= 3.34) return "A- (80-84%)";
      if (sgpa >= 3.0) return "B+ (75-79%)";
      if (sgpa >= 2.84) return "B (71-74%)";
      if (sgpa >= 2.67) return "B- (68-70%)";
      if (sgpa >= 2.5) return "C+ (64-67%)";
      if (sgpa >= 2.34) return "C (61-63%)";
      if (sgpa >= 2.17) return "C- (58-60%)";
      if (sgpa >= 2.0) return "D+ (54-57%)";
      if (sgpa >= 1.84) return "D (50-53%)";
      return "F (Below 50%)";
    }

    // Standard grading based on SGPA
    const percentage =
      sgpa * (scale === "10.0" ? 9.5 : scale === "5.0" ? 20 : 25);
    if (percentage >= 90) return "A+ (Outstanding)";
    if (percentage >= 80) return "A (Excellent)";
    if (percentage >= 70) return "B+ (Very Good)";
    if (percentage >= 60) return "B (Good)";
    if (percentage >= 50) return "C (Average)";
    if (percentage >= 40) return "D (Pass)";
    return "F (Fail)";
  };

  const validateInput = (value: string): boolean => {
    const num = parseFloat(value);
    if (isNaN(num) || num < 0 || num > 100) return false;
    return true;
  };

  // Debounced calculation
  useEffect(() => {
    const timer = setTimeout(() => {
      calculateSgpa();
    }, 300);

    return () => clearTimeout(timer);
  }, [percentage, scale]);

  const calculateSgpa = useCallback(() => {
    try {
      if (!percentage) {
        setResult(null);
        return;
      }

      const percentageValue = parseFloat(percentage);

      if (!validateInput(percentage)) {
        toast.error("Percentage must be between 0 and 100");
        setResult(null);
        return;
      }

      const { divisor, formula } = getConversionFormula(scale);
      const sgpa = percentageValue / divisor;
      const maxSgpa = getMaxSgpa(scale);

      // Cap SGPA at maximum for the scale
      const finalSgpa = Math.min(sgpa, maxSgpa);
      const grade = getGradeClassification(finalSgpa, scale);

      setResult({
        sgpa: parseFloat(finalSgpa.toFixed(2)),
        percentage: percentageValue,
        scale: scale,
        formula: formula,
        grade: grade,
      });
    } catch (error) {
      console.error("Calculation error:", error);
      setResult(null);
    }
  }, [percentage, scale]);

  const handleReset = () => {
    setPercentage("");
    setScale("10.0");
    setResult(null);
    localStorage.removeItem("percentageToSgpaData");
    toast.success("Calculator reset successfully");
  };

  const handleSave = () => {
    saveToLocalStorage();
    toast.success("Data saved successfully");
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 hidden sm:block" />
            Free Online Percentage to SGPA Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="percentage" className="text-base sm:text-lg">
                Enter Your Percentage
              </Label>
              <Input
                id="percentage"
                type="number"
                placeholder="e.g., 85"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                min="0"
                max="100"
                step="0.01"
              />
              <p className="text-xs text-muted-foreground">
                Enter percentage between 0 and 100
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="scale" className="text-base sm:text-lg">
                Grading Scale
              </Label>
              <Select value={scale} onValueChange={setScale}>
                <SelectTrigger id="scale">
                  <SelectValue placeholder="Select grading scale" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10.0">10.0 Point Scale (India)</SelectItem>
                  <SelectItem value="5.0">5.0 Point Scale</SelectItem>
                  <SelectItem value="4.0">
                    4.0 Point Scale (US/Canada)
                  </SelectItem>
                  <SelectItem value="hec">
                    4.0 Point Scale (Pakistan HEC)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button onClick={handleSave} variant="outline" className="flex-1">
              Save Progress
            </Button>
            <Button onClick={handleReset} variant="outline" className="flex-1">
              <Trash2 className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Result Display */}
          {result && (
            <Card className="border-2">
              <CardContent>
                <div className="space-y-4 px-4 py-6 sm:p-6">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Your SGPA Score
                    </p>
                    <p className="text-3xl sm:text-4xl font-bold text-white">
                      {result.sgpa}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Percentage
                      </p>
                      <p className="text-xl sm:text-2xl font-semibold text-white">
                        {result.percentage}%
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Grading Scale
                      </p>
                      <p className="text-base sm:text-lg font-semibold text-white">
                        {scale === "hec" ? "4.0 (HEC)" : scale}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Grade</p>
                      <p className="text-xl font-semibold text-green-500">
                        {result.grade}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground text-center">
                      <span className="font-semibold">Formula Used:</span>{" "}
                      {result.formula}
                    </p>
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      {result.percentage}% ÷{" "}
                      {getConversionFormula(scale).divisor} = {result.sgpa} SGPA
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PercentageToSgpaCalculator;
