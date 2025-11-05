"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Calculator, Trash2, Plus, X } from "lucide-react";

interface TestScore {
  id: string;
  scoredMarks: string;
  totalMarks: string;
}

interface CalculationResult {
  percentage: number;
  totalScored: number;
  totalMaximum: number;
  grade: string;
}

const MarksPercentageCalculator = () => {
  const [calculationMode, setCalculationMode] = useState<"single" | "multiple">(
    "single"
  );
  const [scoredMarks, setScoredMarks] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [testScores, setTestScores] = useState<TestScore[]>([
    { id: "1", scoredMarks: "", totalMarks: "" },
    { id: "2", scoredMarks: "", totalMarks: "" },
  ]);
  const [result, setResult] = useState<CalculationResult | null>(null);

  // Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("marksPercentageData");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (parsed.calculationMode) setCalculationMode(parsed.calculationMode);
        if (parsed.scoredMarks) setScoredMarks(parsed.scoredMarks);
        if (parsed.totalMarks) setTotalMarks(parsed.totalMarks);
        if (parsed.testScores) setTestScores(parsed.testScores);
      } catch (error) {
        console.error("Error loading saved data:", error);
      }
    }
  }, []);

  // Save data to localStorage
  const saveToLocalStorage = useCallback(() => {
    const dataToSave = {
      calculationMode,
      scoredMarks,
      totalMarks,
      testScores,
    };
    localStorage.setItem("marksPercentageData", JSON.stringify(dataToSave));
  }, [calculationMode, scoredMarks, totalMarks, testScores]);

  // Debounced calculation
  useEffect(() => {
    const timer = setTimeout(() => {
      calculatePercentage();
    }, 300);

    return () => clearTimeout(timer);
  }, [calculationMode, scoredMarks, totalMarks, testScores]);

  const getGradeClassification = (percentage: number): string => {
    if (percentage >= 90) return "A+ (Outstanding)";
    if (percentage >= 80) return "A (Excellent)";
    if (percentage >= 70) return "B+ (Very Good)";
    if (percentage >= 60) return "B (Good)";
    if (percentage >= 50) return "C (Average)";
    if (percentage >= 40) return "D (Pass)";
    return "F (Fail)";
  };

  const validateInput = (value: string, max?: number): boolean => {
    const num = parseFloat(value);
    if (isNaN(num) || num < 0) return false;
    if (max !== undefined && num > max) return false;
    return true;
  };

  const calculatePercentage = useCallback(() => {
    try {
      if (calculationMode === "single") {
        if (!scoredMarks || !totalMarks) {
          setResult(null);
          return;
        }

        const scored = parseFloat(scoredMarks);
        const total = parseFloat(totalMarks);

        if (!validateInput(scoredMarks) || !validateInput(totalMarks)) {
          setResult(null);
          return;
        }

        if (total === 0) {
          toast.error("Total marks cannot be zero");
          setResult(null);
          return;
        }

        if (scored > total) {
          toast.error("Scored marks cannot exceed total marks");
          setResult(null);
          return;
        }

        const percentage = (scored / total) * 100;
        const grade = getGradeClassification(percentage);

        setResult({
          percentage: parseFloat(percentage.toFixed(2)),
          totalScored: scored,
          totalMaximum: total,
          grade,
        });
      } else {
        // Multiple tests mode
        const validScores = testScores.filter(
          (test) => test.scoredMarks && test.totalMarks
        );

        if (validScores.length === 0) {
          setResult(null);
          return;
        }

        let totalScored = 0;
        let totalMaximum = 0;
        let hasError = false;

        for (const test of validScores) {
          const scored = parseFloat(test.scoredMarks);
          const total = parseFloat(test.totalMarks);

          if (
            !validateInput(test.scoredMarks) ||
            !validateInput(test.totalMarks)
          ) {
            hasError = true;
            break;
          }

          if (total === 0) {
            toast.error("Total marks cannot be zero");
            hasError = true;
            break;
          }

          if (scored > total) {
            toast.error("Scored marks cannot exceed total marks in any test");
            hasError = true;
            break;
          }

          totalScored += scored;
          totalMaximum += total;
        }

        if (hasError || totalMaximum === 0) {
          setResult(null);
          return;
        }

        const percentage = (totalScored / totalMaximum) * 100;
        const grade = getGradeClassification(percentage);

        setResult({
          percentage: parseFloat(percentage.toFixed(2)),
          totalScored,
          totalMaximum,
          grade,
        });
      }
    } catch (error) {
      console.error("Calculation error:", error);
      setResult(null);
    }
  }, [calculationMode, scoredMarks, totalMarks, testScores]);

  const handleAddTest = () => {
    if (testScores.length >= 10) {
      toast.error("Maximum 10 tests allowed");
      return;
    }
    const newTest: TestScore = {
      id: Date.now().toString(),
      scoredMarks: "",
      totalMarks: "",
    };
    setTestScores([...testScores, newTest]);
    toast.success("Test added");
  };

  const handleRemoveTest = (id: string) => {
    if (testScores.length <= 2) {
      toast.error("Minimum 2 tests required");
      return;
    }
    setTestScores(testScores.filter((test) => test.id !== id));
    toast.success("Test removed");
  };

  const handleTestScoreChange = (
    id: string,
    field: "scoredMarks" | "totalMarks",
    value: string
  ) => {
    setTestScores(
      testScores.map((test) =>
        test.id === id ? { ...test, [field]: value } : test
      )
    );
  };

  const handleReset = () => {
    setScoredMarks("");
    setTotalMarks("");
    setTestScores([
      { id: "1", scoredMarks: "", totalMarks: "" },
      { id: "2", scoredMarks: "", totalMarks: "" },
    ]);
    setResult(null);
    localStorage.removeItem("marksPercentageData");
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
            Free Online Marks Percentage Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Mode Selection */}
          <div className="space-y-2">
            <Label>Calculation Mode</Label>
            <div className="flex gap-4 text-sm sm:text-base">
              <button
                onClick={() => setCalculationMode("single")}
                className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                  calculationMode === "single"
                    ? "border-primary bg-primary/10 font-semibold"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                Single Test
              </button>
              <button
                onClick={() => setCalculationMode("multiple")}
                className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                  calculationMode === "multiple"
                    ? "border-primary bg-primary/10 font-semibold"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                Multiple Tests
              </button>
            </div>
          </div>

          {/* Single Test Mode */}
          {calculationMode === "single" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="scoredMarks" className="text-base sm:text-lg">
                  Marks Obtained (Scored)
                </Label>
                <Input
                  id="scoredMarks"
                  type="number"
                  placeholder="e.g., 85"
                  value={scoredMarks}
                  onChange={(e) => setScoredMarks(e.target.value)}
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="totalMarks" className="text-base sm:text-lg">
                  Total Marks (Out of)
                </Label>
                <Input
                  id="totalMarks"
                  type="number"
                  placeholder="e.g., 100"
                  value={totalMarks}
                  onChange={(e) => setTotalMarks(e.target.value)}
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
          )}

          {/* Multiple Tests Mode */}
          {calculationMode === "multiple" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label>Test Scores (Add multiple tests/exams)</Label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAddTest}
                  disabled={testScores.length >= 10}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Test
                </Button>
              </div>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {testScores.map((test, index) => (
                  <div
                    key={test.id}
                    className="grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-3 p-4 border rounded-lg bg-secondary/50"
                  >
                    <div className="space-y-2">
                      <Label htmlFor={`scored-${test.id}`}>
                        Test {index + 1} - Scored Marks
                      </Label>
                      <Input
                        id={`scored-${test.id}`}
                        type="number"
                        placeholder="e.g., 85"
                        value={test.scoredMarks}
                        onChange={(e) =>
                          handleTestScoreChange(
                            test.id,
                            "scoredMarks",
                            e.target.value
                          )
                        }
                        min="0"
                        step="0.01"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`total-${test.id}`}>
                        Test {index + 1} - Total Marks
                      </Label>
                      <Input
                        id={`total-${test.id}`}
                        type="number"
                        placeholder="e.g., 100"
                        value={test.totalMarks}
                        onChange={(e) =>
                          handleTestScoreChange(
                            test.id,
                            "totalMarks",
                            e.target.value
                          )
                        }
                        min="0"
                        step="0.01"
                      />
                    </div>
                    <div className="flex items-end">
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleRemoveTest(test.id)}
                        disabled={testScores.length <= 2}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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
            <Card className="border-blue-200 px-2 py-4 sm:p-6">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Your Percentage Score
                    </p>
                    <p className="text-3xl sm:text-4xl font-bold text-blue-600">
                      {result.percentage}%
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-blue-200">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Total Scored</p>
                      <p className="text-2xl font-semibold text-white">
                        {result.totalScored}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Total Maximum</p>
                      <p className="text-2xl font-semibold text-white">
                        {result.totalMaximum}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Grade</p>
                      <p className="text-xl font-semibold text-green-500">
                        {result.grade}
                      </p>
                    </div>
                  </div>
                  {calculationMode === "single" && (
                    <div className="pt-4 border-t border-blue-200">
                      <p className="text-sm text-[#d4d4d4] text-center">
                        <span className="font-semibold">Formula Used:</span>{" "}
                        Percentage = (Scored Marks ÷ Total Marks) × 100
                      </p>
                      <p className="text-sm text-muted-foreground text-center mt-2">
                        ({result.totalScored} ÷ {result.totalMaximum}) × 100 ={" "}
                        {result.percentage}%
                      </p>
                    </div>
                  )}
                  {calculationMode === "multiple" && (
                    <div className="pt-4 border-t border-blue-200">
                      <p className="text-sm text-gray-700 text-center">
                        <span className="font-semibold">Formula Used:</span>{" "}
                        Percentage = (Sum of Scored Marks ÷ Sum of Total Marks)
                        × 100
                      </p>
                      <p className="text-sm text-muted-foreground text-center mt-2">
                        ({result.totalScored} ÷ {result.totalMaximum}) × 100 ={" "}
                        {result.percentage}%
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MarksPercentageCalculator;
