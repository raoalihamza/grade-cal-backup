"use client";

import {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useCallback,
  useRef,
} from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ResultsDisplay from "@/components/shared/results-display";
import {
  loadFromLocalStorage,
  percentageToLetter,
  getGradeColor,
  type EasyGraderData,
} from "@/lib/utils";
import { RotateCcw, AlertTriangle } from "lucide-react";
import { useToast } from "@/components/ui/toast";
import CalculatorContainer from "@/components/shared/calculator-container";

const EasyGraderCalculator = (props) => {
  const { toast } = useToast();
  const calculatorRef = useRef<any>(null);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [showChart, setShowChart] = useState(false);
  const [showDecimals, setShowDecimals] = useState(false);
  const [grade, setGrade] = useState(100);
  const [hasValidationError, setHasValidationError] = useState(false);

  // Load saved data on mount
  useEffect(() => {
    const savedData = loadFromLocalStorage<EasyGraderData>("easy-grader");
    if (savedData) {
      setTotalQuestions(savedData.totalQuestions);
      setWrongAnswers(savedData.wrongAnswers);
      setShowChart(savedData.showChart);
      setShowDecimals(savedData.showDecimals);
    }
  }, []);

  // Debounced calculation to improve performance
  const debouncedCalculateGrade = useCallback(() => {
    const timeoutId = setTimeout(() => {
      calculateGrade();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [totalQuestions, wrongAnswers]);

  // Calculate grade whenever inputs change (with debouncing)
  useEffect(() => {
    const cleanup = debouncedCalculateGrade();
    return cleanup;
  }, [debouncedCalculateGrade]);

  // Validation effect
  useEffect(() => {
    validateInputs();
  }, [totalQuestions, wrongAnswers]);

  const validateInputs = () => {
    let hasError = false;

    if (totalQuestions <= 0) {
      hasError = true;
    }

    if (wrongAnswers < 0 || wrongAnswers > totalQuestions) {
      hasError = true;
    }

    setHasValidationError(hasError);
  };

  const calculateGrade = () => {
    if (totalQuestions > 0) {
      const correctAnswers = Math.max(0, totalQuestions - wrongAnswers);
      const calculatedGrade = (correctAnswers / totalQuestions) * 100;
      setGrade(calculatedGrade);
    } else {
      setGrade(0);
    }
  };

  // Generate grading chart data
  const generateGradingChart = () => {
    if (totalQuestions <= 0) return [];

    return Array.from({ length: totalQuestions + 1 }, (_, i) => {
      const numWrong = i;
      const calculatedGrade =
        ((totalQuestions - numWrong) / totalQuestions) * 100;
      return {
        numWrong,
        grade: showDecimals
          ? calculatedGrade.toFixed(2)
          : Math.round(calculatedGrade),
        color: getGradeColor(calculatedGrade),
      };
    });
  };

  const handleTotalQuestionsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(e.target.value, 10) || 0;

    if (value < 1) {
      toast({
        title: "Invalid Input",
        description: "Total questions must be at least 1.",
        variant: "destructive",
      });
      return;
    }

    if (value > 1000) {
      toast({
        title: "Maximum Limit Exceeded",
        description: "Total questions cannot exceed 1000.",
        variant: "destructive",
      });
      return;
    }

    setTotalQuestions(value);
    // Ensure wrong answers doesn't exceed total questions
    if (wrongAnswers > value) {
      setWrongAnswers(value);
    }
  };

  const handleWrongAnswersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10) || 0;

    if (value < 0) {
      toast({
        title: "Invalid Input",
        description: "Wrong answers cannot be negative.",
        variant: "destructive",
      });
      return;
    }

    if (value > totalQuestions) {
      toast({
        title: "Invalid Input",
        description: "Wrong answers cannot exceed total questions.",
        variant: "destructive",
      });
      setWrongAnswers(totalQuestions);
      return;
    }

    setWrongAnswers(value);
  };

  const handleReset = () => {
    setTotalQuestions(10);
    setWrongAnswers(0);
    setShowChart(false);
    setShowDecimals(false);
    setGrade(100);
    setHasValidationError(false);
    toast({
      title: "Calculator Reset",
      description: "All settings have been restored to defaults.",
    });
  };

  const handleSave = () => {
    return {
      totalQuestions,
      wrongAnswers,
      showChart,
      showDecimals,
    };
  };

  useImperativeHandle(calculatorRef, () => ({
    handleSave,
    handleReset,
  }));

  // Format the grade display
  const formattedGrade = showDecimals ? grade.toFixed(2) : Math.round(grade);

  // Determine letter grade
  const letterGrade = percentageToLetter(grade);

  // Grading chart data
  const gradingChartData = generateGradingChart().reverse();

  return (
    <CalculatorContainer storageKey="easy-grader">
      <div className="mb-6" ref={calculatorRef}>
        <h3 className="text-lg font-medium mb-4">Enter quiz information:</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="total-questions"># of questions:</Label>
            <Input
              id="total-questions"
              type="number"
              value={totalQuestions}
              onChange={handleTotalQuestionsChange}
              min="1"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="wrong-answers"># wrong:</Label>
            <Input
              id="wrong-answers"
              type="number"
              value={wrongAnswers}
              onChange={handleWrongAnswersChange}
              min="0"
              max={totalQuestions}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="show-chart"
              checked={showChart}
              onCheckedChange={(checked) => setShowChart(!!checked)}
            />
            <Label htmlFor="show-chart">Show Grading Chart</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="show-decimals"
              checked={showDecimals}
              onCheckedChange={(checked) => setShowDecimals(!!checked)}
            />
            <Label htmlFor="show-decimals">Show Decimals</Label>
          </div>

          <Button variant="outline" size="sm" onClick={handleReset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>

        {/* Validation feedback */}
        {hasValidationError && (
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <div className="flex items-center gap-1 text-red-500 text-sm">
              <AlertTriangle className="h-4 w-4" />
              Please check your inputs. Total questions must be positive and
              wrong answers cannot exceed total questions.
            </div>
          </div>
        )}
      </div>

      <div className="mb-6">
        <ResultsDisplay
          title="Result"
          result={`${
            totalQuestions - wrongAnswers
          }/${totalQuestions} = ${formattedGrade}%`}
          units=""
          showLetter={true}
          isSuccess={grade >= 70}
          customMessage={`${
            totalQuestions - wrongAnswers
          } correct out of ${totalQuestions} questions`}
        />
      </div>

      {showChart && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-6"
        >
          <h3 className="text-lg font-medium mb-4">Grading Chart:</h3>

          <div className="grade-chart border rounded-md overflow-hidden">
            <div className="grade-chart-row bg-secondary font-medium">
              <span># Wrong</span>
              <span>Grade</span>
            </div>

            {gradingChartData.map((row) => (
              <div
                key={row.numWrong}
                className={`grade-chart-row ${row.color} text-white`}
              >
                <span>{row.numWrong}</span>
                <span>{row.grade}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </CalculatorContainer>
  );
};

EasyGraderCalculator.displayName = "EasyGraderCalculator";

export default EasyGraderCalculator;
