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
  percentage: number;
  cgpa: number;
  scale: string;
  formula: string;
  grade: string;
}

const CgpaToPercentageCalculator = () => {
  const [cgpa, setCgpa] = useState("");
  const [scale, setScale] = useState("10.0");
  const [result, setResult] = useState<CalculationResult | null>(null);

  // Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("cgpaToPercentageData");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (parsed.cgpa) setCgpa(parsed.cgpa);
        if (parsed.scale) setScale(parsed.scale);
      } catch (error) {
        console.error("Error loading saved data:", error);
      }
    }
  }, []);

  // Save data to localStorage
  const saveToLocalStorage = useCallback(() => {
    const dataToSave = { cgpa, scale };
    localStorage.setItem("cgpaToPercentageData", JSON.stringify(dataToSave));
  }, [cgpa, scale]);

  const getMaxCgpa = (scale: string): number => {
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
        return { multiplier: 9.5, formula: "CGPA × 9.5" };
      case "5.0":
        return { multiplier: 20, formula: "CGPA × 20" };
      case "4.0":
        return { multiplier: 25, formula: "CGPA × 25" };
      case "hec":
        return { multiplier: 25, formula: "CGPA × 25" };
      default:
        return { multiplier: 9.5, formula: "CGPA × 9.5" };
    }
  };

  const getGradeClassification = (percentage: number, scale: string): string => {
    if (scale === "hec") {
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
    if (percentage >= 90) return "A+ (Outstanding)";
    if (percentage >= 80) return "A (Excellent)";
    if (percentage >= 70) return "B+ (Very Good)";
    if (percentage >= 60) return "B (Good)";
    if (percentage >= 50) return "C (Average)";
    if (percentage >= 40) return "D (Pass)";
    return "F (Fail)";
  };

  const validateInput = (value: string, max: number): boolean => {
    const num = parseFloat(value);
    if (isNaN(num) || num < 0 || num > max) return false;
    return true;
  };

  // Debounced calculation
  useEffect(() => {
    const timer = setTimeout(() => {
      calculatePercentage();
    }, 300);

    return () => clearTimeout(timer);
  }, [cgpa, scale]);

  const calculatePercentage = useCallback(() => {
    try {
      if (!cgpa) {
        setResult(null);
        return;
      }

      const cgpaValue = parseFloat(cgpa);
      const maxCgpa = getMaxCgpa(scale);

      if (!validateInput(cgpa, maxCgpa)) {
        toast.error(`CGPA must be between 0 and ${maxCgpa} for ${scale} scale`);
        setResult(null);
        return;
      }

      const { multiplier, formula } = getConversionFormula(scale);
      const percentage = cgpaValue * multiplier;

      // Cap percentage at 100
      const finalPercentage = Math.min(percentage, 100);
      const grade = getGradeClassification(finalPercentage, scale);

      setResult({
        percentage: parseFloat(finalPercentage.toFixed(2)),
        cgpa: cgpaValue,
        scale: scale,
        formula: formula,
        grade: grade,
      });
    } catch (error) {
      console.error("Calculation error:", error);
      setResult(null);
    }
  }, [cgpa, scale]);

  const handleReset = () => {
    setCgpa("");
    setScale("10.0");
    setResult(null);
    localStorage.removeItem("cgpaToPercentageData");
    toast.success("Calculator reset successfully");
  };

  const handleSave = () => {
    saveToLocalStorage();
    toast.success("Data saved successfully");
  };

  const getScaleLabel = (scaleValue: string): string => {
    switch (scaleValue) {
      case "10.0":
        return "10.0 Point Scale (India)";
      case "5.0":
        return "5.0 Point Scale";
      case "4.0":
        return "4.0 Point Scale (US/Canada)";
      case "hec":
        return "4.0 Point Scale (Pakistan HEC)";
      default:
        return scaleValue;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 hidden md:block" />
            Free Online CGPA to Percentage Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cgpa" className="text-base sm:text-lg">
                Enter Your CGPA
              </Label>
              <Input
                id="cgpa"
                type="number"
                placeholder="e.g., 8.5"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
                min="0"
                max={getMaxCgpa(scale)}
                step="0.01"
              />
              <p className="text-xs text-muted-foreground">
                Maximum CGPA: {getMaxCgpa(scale)}
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
            <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">
                      Your Percentage Score
                    </p>
                    <p className="text-5xl font-bold text-purple-600">
                      {result.percentage}%
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-purple-200">
                    <div className="text-center">
                      <p className="text-sm text-gray-600">CGPA</p>
                      <p className="text-2xl font-semibold text-gray-800">
                        {result.cgpa}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Grading Scale</p>
                      <p className="text-lg font-semibold text-gray-800">
                        {scale === "hec" ? "4.0 (HEC)" : scale}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Grade</p>
                      <p className="text-xl font-semibold text-green-600">
                        {result.grade}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-purple-200">
                    <p className="text-sm text-gray-700 text-center">
                      <span className="font-semibold">Formula Used:</span>{" "}
                      {result.formula}
                    </p>
                    <p className="text-sm text-gray-600 text-center mt-2">
                      {result.cgpa} × {getConversionFormula(scale).multiplier} ={" "}
                      {result.percentage}%
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

export default CgpaToPercentageCalculator;
