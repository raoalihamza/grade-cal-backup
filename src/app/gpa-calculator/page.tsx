"use client";

import { useRef } from "react";
import CalculatorContainer from "@/components/shared/calculator-container";
import GPACalculator from "@/components/calculators/gpa/gpa-calculator";
import { RelatedTools } from "@/components/related-tools";
import {
  Calculator,
  BookOpen,
  GraduationCap,
  CheckCircle,
  Target,
  TrendingUp,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function GPACalculatorPage() {
  const calculatorRef = useRef<any>(null);

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          GPA Calculator - Course Based Grade Point Average
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Calculate your term GPA and cumulative GPA from individual course
          letter grades (A, B+, C, etc.). Perfect for planning your current
          semester and tracking academic progress with letter grade systems.
        </p>
      </section>

      {/* Calculator Section */}
      <section>
        <CalculatorContainer storageKey="gpa-calculator">
          <GPACalculator ref={calculatorRef} />
        </CalculatorContainer>
      </section>

      {/* What is GPA Section */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-primary hidden sm:block" />
              What is GPA (Grade Point Average)?
            </CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none pb-4">
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              <strong>GPA stands for Grade Point Average</strong>, a
              standardized way to measure academic achievement in colleges and
              universities, primarily in the United States and Canada. GPA
              converts letter grades (A, B, C, D, F) into numerical values to
              create a weighted average based on credit hours.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Most institutions use a 4.0 scale where an A equals 4.0, but some
              use 4.3 or 5.0 scales. Your GPA is calculated by multiplying each
              course grade by its credit hours, summing these values, and
              dividing by total credit hours. To calculate what you need on individual assignments within a course, use our{" "}
              <Link
                href="/average-grade-calculator"
                className="text-blue-500 hover:text-blue-600 underline font-medium"
              >
                average grade calculator
              </Link>
              .
            </p>
            <ul className="text-sm sm:text-base text-muted-foreground list-disc pl-6 space-y-2">
              <li>Used for academic standing and dean's list recognition</li>
              <li>Required for scholarship and financial aid eligibility</li>
              <li>Important for graduate school admissions</li>
              <li>Considered by employers for entry-level positions</li>
              <li>Determines academic probation or honors status</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* How to Calculate GPA Section */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <Calculator className="h-8 w-8 text-primary hidden sm:block" />
              How to Calculate GPA - Step by Step Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-950/30 px-4 py-6 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                GPA Calculation Formula:
              </h3>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-md font-mono text-center text-base sm:text-lg">
                GPA = (Sum of Grade Points) ÷ (Total Credit Hours)
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">
                Step-by-Step GPA Calculation:
              </h3>

              <div className="grid gap-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">
                      Convert Letter Grades to Points
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Use your school's grading scale. On a 4.0 scale: A = 4.0,
                      A- = 3.7, B+ = 3.3, B = 3.0, etc.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">
                      Multiply by Credit Hours
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      For each course: Grade Points × Credit Hours = Quality
                      Points
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">
                      Sum Quality Points
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Add up all quality points from all courses to get total
                      quality points.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">
                      Sum Credit Hours
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Add up all credit hours from all courses to get total
                      credit hours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">
                      Divide to Get GPA
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Divide total quality points by total credit hours: GPA =
                      Quality Points ÷ Credit Hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example Calculation */}
            <div className="bg-green-50 dark:bg-green-950/30 px-4 py-6 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Example GPA Calculation:
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green-200 dark:border-green-800 text-sm sm:text-base">
                      <th className="p-2">Course</th>
                      <th className="p-2">Grade</th>
                      <th className="p-2">Grade Points</th>
                      <th className="p-2">Credits</th>
                      <th className="p-2">Quality Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-green-100 dark:border-green-900 text-sm sm:text-base">
                      <td className="p-2">Biology</td>
                      <td className="p-2">A</td>
                      <td className="p-2">4.0</td>
                      <td className="p-2">4</td>
                      <td className="p-2">16.0</td>
                    </tr>
                    <tr className="border-b border-green-100 dark:border-green-900 text-sm sm:text-base">
                      <td className="p-2">English</td>
                      <td className="p-2">B+</td>
                      <td className="p-2">3.3</td>
                      <td className="p-2">3</td>
                      <td className="p-2">9.9</td>
                    </tr>
                    <tr className="border-b border-green-100 dark:border-green-900 text-sm sm:text-base">
                      <td className="p-2">Math</td>
                      <td className="p-2">A-</td>
                      <td className="p-2">3.7</td>
                      <td className="p-2">4</td>
                      <td className="p-2">14.8</td>
                    </tr>
                    <tr className="border-b border-green-100 dark:border-green-900 text-sm sm:text-base">
                      <td className="p-2">History</td>
                      <td className="p-2">B</td>
                      <td className="p-2">3.0</td>
                      <td className="p-2">3</td>
                      <td className="p-2">9.0</td>
                    </tr>
                    <tr className="font-bold bg-green-100 dark:bg-green-900 text-sm sm:text-base">
                      <td className="p-2">Total</td>
                      <td className="p-2">-</td>
                      <td className="p-2">-</td>
                      <td className="p-2">14</td>
                      <td className="p-2">49.7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-white dark:bg-gray-900 rounded-md">
                <p className="text-base sm:text-lg">
                  <strong>GPA = 49.7 ÷ 14 = 3.55</strong> (on a 4.0 scale)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* GPA Scales Section */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <TrendingUp className="h-8 w-8 text-primary hidden sm:block" />
              Understanding GPA Scales
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pb-4">
            <p className="text-base md:text-lg text-muted-foreground">
              Different institutions use different GPA scales. Here are the most
              common scales:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-lg sm:text-xl">
                  4.0 Scale (Most Common)
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>A+ / A</span>{" "}
                    <span className="font-semibold">4.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A-</span> <span className="font-semibold">3.7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B+</span> <span className="font-semibold">3.3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B</span> <span className="font-semibold">3.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B-</span> <span className="font-semibold">2.7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>C+</span> <span className="font-semibold">2.3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>C</span> <span className="font-semibold">2.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>D</span> <span className="font-semibold">1.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>F</span> <span className="font-semibold">0.0</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-lg sm:text-xl">
                  4.3 Scale
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>A+</span> <span className="font-semibold">4.3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A</span> <span className="font-semibold">4.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A-</span> <span className="font-semibold">3.7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B+</span> <span className="font-semibold">3.3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B</span> <span className="font-semibold">3.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B-</span> <span className="font-semibold">2.7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>C+</span> <span className="font-semibold">2.3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>C</span> <span className="font-semibold">2.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>F</span> <span className="font-semibold">0.0</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-lg sm:text-xl">
                  5.0 Scale (Weighted)
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>A+ / A</span>{" "}
                    <span className="font-semibold">5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A-</span> <span className="font-semibold">4.7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B+</span> <span className="font-semibold">4.3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B</span> <span className="font-semibold">4.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B-</span> <span className="font-semibold">3.7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>C+</span> <span className="font-semibold">3.3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>C</span> <span className="font-semibold">3.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>D</span> <span className="font-semibold">2.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>F</span> <span className="font-semibold">0.0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg flex gap-3">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5 hidden sm:block" />
              <div>
                <p className="font-semibold text-yellow-900 dark:text-yellow-100">
                  Note:
                </p>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm sm:text-base">
                  Always verify your institution's specific grading scale, as
                  some schools may use variations or have different grade point
                  assignments.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Term GPA vs Cumulative GPA */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary hidden sm:block" />
              Term GPA vs Cumulative GPA
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pb-4">
            <p className="text-base sm:text-lg text-muted-foreground">
              Understanding the difference between term GPA and cumulative GPA
              is essential for tracking academic progress:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-950/30 px-4 py-6 sm:p-6 rounded-lg">
                <h4 className="font-semibold text-base sm:text-lg mb-3">
                  Term GPA (Semester GPA)
                </h4>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Calculated for a single semester or quarter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Only includes courses from that specific term</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Useful for tracking current semester performance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Resets each semester</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 px-4 py-6 sm:p-6 rounded-lg">
                <h4 className="font-semibold text-base sm:text-lg mb-3">
                  Cumulative GPA (Overall GPA)
                </h4>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Average of all semesters combined</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Includes all courses from entire academic career
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Used for graduation requirements and honors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Appears on official transcripts</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="text-xs sm:text-sm">
                <strong>Pro Tip:</strong> Our calculator can compute both! Enter
                your current courses for term GPA, or add your previous GPA and
                credits to calculate your new cumulative GPA.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Why GPA Matters */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <Target className="h-8 w-8 text-primary hidden sm:block" />
              Why Your GPA Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">
                    Academic Standing
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Determines dean's list eligibility, academic probation, and
                    honors designation at graduation.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">
                    Scholarships & Financial Aid
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Many scholarships require maintaining a minimum GPA for
                    renewal and eligibility.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">
                    Graduate School Admissions
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    GPA is a key factor in admissions to master's, PhD, law, and
                    medical programs.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">
                    Job Opportunities
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Employers often set GPA minimums for campus recruitment and
                    internship programs.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">
                    Honor Societies
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Membership in organizations like Phi Beta Kappa requires
                    high GPA maintenance.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">
                    Athletic Eligibility
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    NCAA and college sports require minimum GPA standards for
                    participation.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-8 w-8 text-primary hidden sm:block" />
              Frequently Asked Questions (FAQ)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 !pb-4">
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                What is a good GPA?
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                On a 4.0 scale: 3.5-4.0 is excellent, 3.0-3.4 is good, 2.5-2.9
                is average, below 2.0 may result in academic probation. However,
                "good" varies by institution and program requirements.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                How do I calculate cumulative GPA with this calculator?
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                Enter your current course grades and credits to get term GPA.
                Then, add your previous cumulative GPA and total credits earned
                to calculate your new cumulative GPA after the current term. For semester-wise cumulative calculations across multiple terms, try our{" "}
                <Link
                  href="/cgpa-calculator"
                  className="text-blue-500 hover:text-blue-600 underline font-medium"
                >
                  CGPA calculator
                </Link>
                .
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                Do all colleges use the same GPA scale?
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                No. While most US colleges use a 4.0 scale, some use 4.3 or 5.0
                scales. Some high schools use weighted GPAs for honors/AP
                classes. Always check your institution's specific grading
                policy.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                Can I raise my GPA significantly in one semester?
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                It depends on how many credits you've completed. Early in your
                academic career (freshman year), one strong semester can
                significantly impact GPA. Later, the effect is smaller due to
                more accumulated credits.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                What GPA do I need for graduate school?
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                Most graduate programs require a minimum 3.0 GPA. Competitive
                programs (top MBA, law, medical schools) typically look for 3.5
                or higher. Check specific program requirements as they vary
                widely.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                How are pass/fail courses calculated in GPA?
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                Pass/fail courses typically don't affect GPA calculation. They
                count toward credit hours for graduation but aren't included in
                GPA calculations. Policies vary by institution.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                What's the difference between weighted and unweighted GPA?
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                Unweighted GPA uses a standard 4.0 scale for all courses.
                Weighted GPA gives extra points for honors, AP, or IB courses
                (often up to 5.0 or 6.0 scale), rewarding course difficulty.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tips Section */}
      <section className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="">Tips to Improve Your GPA</CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Prioritize High-Credit Courses
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Focus extra effort on courses worth more credits—they have
                      a bigger impact on your GPA.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Use Office Hours
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Regularly visit professors during office hours for
                      clarification and to show engagement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Form Study Groups
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Collaborate with classmates to review material and prepare
                      for exams together.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Stay Organized
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Use planners and calendars to track assignments, exams,
                      and deadlines effectively.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Utilize Tutoring Services
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Take advantage of free campus tutoring for challenging
                      subjects before falling behind.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Manage Your Course Load
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Don't overload yourself. Balance challenging courses with
                      easier ones each semester.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    7
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Start Strong
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Perform well on early assignments and exams—they set the
                      tone and build momentum.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    8
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Consider Grade Replacement
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      If allowed, retake courses where you received low grades
                      to improve your GPA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Tools Section */}
      <RelatedTools
        tools={[
          {
            title: "CGPA Calculator",
            description: "Calculate Cumulative Grade Point Average across multiple semesters for international systems.",
            href: "/cgpa-calculator",
            icon: "graduation",
          },
          {
            title: "Average Grade Calculator",
            description: "Calculate weighted averages for assignments within a course.",
            href: "/average-grade-calculator",
            icon: "calculator",
          },
          {
            title: "Final Grade Calculator",
            description: "Find out what you need on your final exam to achieve your target grade.",
            href: "/final-grade-calculator",
            icon: "trending",
          },
          {
            title: "Percentage to CGPA",
            description: "Convert percentage scores to CGPA for different grading systems.",
            href: "/percentage-to-cgpa-calculator",
            icon: "percent",
          },
        ]}
      />
    </div>
  );
}
