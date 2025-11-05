import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Type definitions for better type safety
export type LetterGrade = 'A+' | 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D+' | 'D' | 'D-' | 'F';

export interface GradeRow {
  id: number;
  value: string;
  weight: string;
}

export interface PointsGradeRow extends GradeRow {
  maxValue: string;
}

export interface CalculatorData {
  rows: GradeRow[];
  targetGrade?: string;
}

export interface PointsCalculatorData {
  rows: PointsGradeRow[];
  targetGrade?: string;
}

export interface CourseData {
  id: number;
  name: string;
  grade: LetterGrade | '';
  credits: string;
}

export interface SemesterData {
  id: number;
  sgpa: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface EasyGraderData {
  totalQuestions: number;
  wrongAnswers: number;
  showChart: boolean;
  showDecimals: boolean;
}

export interface FinalGradeData {
  gradeScale: string;
  currentGrade: string;
  desiredGrade: string;
  examWeight: string;
  currentLetterGrade: string;
  desiredLetterGrade: string;
  letterExamWeight: string;
}

export interface GPACalculatorData {
  scale: string;
  courses: CourseData[];
  previousGPA: string;
  previousCredits: string;
}

/**
 * Combines Tailwind CSS classes with clsx for efficient class merging
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Convert a letter grade to a percentage
 */
export function letterToPercentage(letter: LetterGrade | string): number {
  const gradeScale: Record<LetterGrade, number> = {
    "A+": 97,
    A: 95,
    "A-": 92,
    "B+": 87,
    B: 85,
    "B-": 82,
    "C+": 77,
    C: 75,
    "C-": 72,
    "D+": 67,
    D: 65,
    "D-": 62,
    F: 50,
  };

  return gradeScale[letter as LetterGrade] || 0;
}

/**
 * Convert a percentage to a letter grade
 */
export function percentageToLetter(percentage: number): LetterGrade {
  if (percentage >= 97) return "A+";
  if (percentage >= 93) return "A";
  if (percentage >= 90) return "A-";
  if (percentage >= 87) return "B+";
  if (percentage >= 83) return "B";
  if (percentage >= 80) return "B-";
  if (percentage >= 77) return "C+";
  if (percentage >= 73) return "C";
  if (percentage >= 70) return "C-";
  if (percentage >= 67) return "D+";
  if (percentage >= 63) return "D";
  if (percentage >= 60) return "D-";
  return "F";
}

/**
 * Generate a unique ID
 */
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Format a percentage value
 */
export function formatPercentage(value: number, decimals: number = 2): string {
  return Number(value).toFixed(decimals).replace(/\.00$/, "");
}

/**
 * Calculate weighted average from an array of grades and weights
 */
export function calculateWeightedAverage(grades: number[], weights: number[]): number {
  if (!grades?.length || !weights?.length) return 0;

  const totalWeight = weights?.reduce((sum, weight) => sum + weight, 0);

  if (totalWeight === 0) return 0;

  const weightedSum = grades?.reduce((sum, grade, index) => {
    return sum + grade * weights[index];
  }, 0);

  return weightedSum / totalWeight;
}

/**
 * Calculate required grade to achieve a target average
 */
export function calculateRequiredGrade(
  currentAverage: number,
  targetAverage: number,
  currentWeight: number,
  examWeight: number
): number {
  // Convert weights to percentages (0-1)
  const currentWeightPercent = currentWeight / 100;
  const examWeightPercent = examWeight / 100;

  // Calculate what grade is needed on the exam
  const totalWeight = currentWeightPercent + examWeightPercent;
  const requiredGrade =
    (targetAverage * totalWeight - currentAverage * currentWeightPercent) /
    examWeightPercent;

  return Math.min(100, Math.max(0, requiredGrade));
}

/**
 * Check if a grade is achievable
 */
export function isGradeAchievable(requiredGrade: number): boolean {
  return requiredGrade <= 100;
}

/**
 * Get color for a grade percentage
 */
export function getGradeColor(percentage: number): string {
  if (percentage >= 90) return "bg-grade-a";
  if (percentage >= 80) return "bg-grade-b";
  if (percentage >= 70) return "bg-grade-c";
  if (percentage >= 60) return "bg-grade-d";
  return "bg-grade-f";
}

/**
 * Save calculator state to localStorage
 */
export function saveToLocalStorage<T>(key: string, data: T): void {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(`grade-calculator-${key}`, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }
}

/**
 * Load calculator state from localStorage
 */
export function loadFromLocalStorage<T>(key: string): T | null {
  if (typeof window !== 'undefined') {
    try {
      const data = localStorage.getItem(`grade-calculator-${key}`);
      return data ? JSON.parse(data) as T : null;
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return null;
    }
  }
  return null;
}

/**
 * Validate input ranges for different calculator types
 */
export function validateGradeInput(value: number, min: number = 0, max: number = 100): ValidationResult {
  const errors: string[] = [];

  if (isNaN(value)) {
    errors.push('Value must be a valid number');
  } else {
    if (value < min) {
      errors.push(`Value cannot be less than ${min}`);
    }
    if (value > max) {
      errors.push(`Value cannot be greater than ${max}`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Validate weight totals don't exceed 100%
 */
export function validateWeights(weights: number[]): ValidationResult {
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  const errors: string[] = [];

  if (total > 100) {
    errors.push(`Total weights (${total.toFixed(1)}%) exceed 100%`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
