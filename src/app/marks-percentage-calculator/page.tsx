import React from "react";
import MarksPercentageCalculator from "@/components/calculators/marks-percentage/marks-percentage-calculator";
import { RelatedTools } from "@/components/related-tools";
import { Metadata } from "next";
import {
  Calculator,
  BookOpen,
  TrendingUp,
  Award,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Free Online Marks Percentage Calculator | Convert Marks to Percentage",
  description:
    "Calculate marks percentage instantly with our free online marks to percentage calculator. Convert test scores, exam marks, and grades to percentages. Supports single and multiple test calculations with grade classifications.",
  keywords: [
    "marks percentage calculator",
    "marks to percentage",
    "percentage calculator for marks",
    "online marks percentage calculator",
    "free marks percentage calculator",
    "calculate marks percentage",
    "test score percentage calculator",
    "exam marks percentage",
    "convert marks to percentage",
    "marks percentage converter",
    "student marks calculator",
    "school marks percentage",
    "college marks percentage",
    "how to calculate percentage of marks",
    "percentage from marks",
    "marks obtained calculator",
    "total marks calculator",
    "grade percentage calculator",
    "test percentage calculator",
    "exam percentage calculator",
    "marks scored calculator",
    "multiple test percentage calculator",
    "average marks percentage",
    "marks to percentage formula",
    "percentage calculation for students",
    "academic percentage calculator",
    "semester marks percentage",
    "class marks percentage",
    "result percentage calculator",
    "marks percentage online tool",
  ],
  openGraph: {
    title:
      "Free Online Marks Percentage Calculator | Convert Marks to Percentage",
    description:
      "Calculate marks percentage instantly. Free online tool to convert test scores and exam marks to percentages. Supports single and multiple test calculations.",
    type: "website",
    url: "https://grade-calculator-smoky.vercel.app/marks-percentage-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Marks Percentage Calculator",
    description:
      "Calculate marks percentage instantly. Free online tool to convert test scores and exam marks to percentages.",
  },
};

export default function MarksPercentageCalculatorPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          Free Online Marks Percentage Calculator
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Convert marks to percentage instantly with our free online marks
          percentage calculator. Calculate test scores, exam marks, and academic
          percentages accurately for single or multiple tests. Perfect for
          students, teachers, and educators.
        </p>
      </section>

      {/* Calculator Component */}
      <section>
        <MarksPercentageCalculator />
      </section>

      {/* Educational Content */}
      <div className="space-y-12">
        {/* What is Marks Percentage */}
        <section className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-6 w-6 text-primary hidden sm:block" />
            <h2 className="text-xl sm:text-2xl font-bold">
              What is Marks Percentage Calculator?
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-muted-foreground">
              A <strong>marks percentage calculator</strong> is a free online
              tool that helps you convert your scored marks (marks obtained)
              into a percentage score. This calculator simplifies the process of
              calculating what percentage of the total marks you achieved in
              tests, exams, assignments, or any academic assessment. Whether
              you're a student checking your test scores, a teacher grading
              assignments, or a parent monitoring academic progress, this tool
              provides instant and accurate percentage calculations.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              Our <strong>online marks to percentage calculator</strong>{" "}
              supports both single test calculations and multiple test
              calculations, making it versatile for various academic scenarios.
              Simply enter your scored marks and total marks, and the calculator
              instantly converts them to a percentage with grade classification.
            </p>
          </div>
        </section>

        {/* How to Calculate Marks Percentage */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-primary hidden sm:block" />
                How to Calculate Marks Percentage?
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                Calculating marks percentage is simple using our{" "}
                <strong>free marks percentage calculator</strong>. Follow these
                easy steps to convert your marks to percentage:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    Single Test Calculation
                  </h3>
                  <ol className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Select "Single Test" mode</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Enter your scored marks (marks obtained)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Enter the total marks (maximum marks)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        View your percentage score instantly with grade
                        classification
                      </span>
                    </li>
                  </ol>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    Multiple Tests Calculation
                  </h3>
                  <ol className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Select "Multiple Tests" mode</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Enter scored and total marks for each test</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Add or remove tests as needed (up to 10 tests)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Get your overall percentage across all tests
                        automatically
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Marks to Percentage Formula */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary hidden sm:block" />
                Marks to Percentage Formula
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                Understanding the <strong>marks percentage formula</strong> is
                essential for converting test scores to percentages. Here are
                the formulas used by our calculator:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-bold mb-3">
                    Single Test Formula
                  </h3>
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-md mb-4">
                    <p className="text-center text-base sm:text-lg font-mono">
                      Percentage = (Scored Marks ÷ Total Marks) × 100
                    </p>
                  </div>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p className="font-semibold">Example:</p>
                    <p>Scored Marks: 85</p>
                    <p>Total Marks: 100</p>
                    <p className="font-semibold">
                      Percentage = (85 ÷ 100) × 100 = 85%
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-bold mb-3">
                    Multiple Tests Formula
                  </h3>
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-md mb-4">
                    <p className="text-center text-base sm:text-lg font-mono">
                      Percentage = (Sum of Scored Marks ÷ Sum of Total Marks) ×
                      100
                    </p>
                  </div>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p className="font-semibold">Example:</p>
                    <p>Test 1: 92/100, Test 2: 88/100</p>
                    <p>Total Scored: 180, Total Maximum: 200</p>
                    <p className="font-semibold">
                      Percentage = (180 ÷ 200) × 100 = 90%
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Grade Classification */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary hidden sm:block" />
                Percentage to Grade Classification
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                Our <strong>marks percentage calculator</strong> automatically
                converts your percentage score to a grade classification. Here's
                the standard grading scale used:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card shadow-md rounded-lg overflow-hidden border">
                  <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <tr className="text-sm sm:text-base">
                      <th className="px-6 py-4 text-left font-semibold">
                        Percentage Range
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Grade
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Classification
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-sm sm:text-base">
                    <tr className="hover:bg-accent">
                      <td className="px-6 py-4 font-medium">90% and above</td>
                      <td className="px-6 py-4 text-green-600 font-bold">A+</td>
                      <td className="px-6 py-4">Outstanding</td>
                    </tr>
                    <tr className="hover:bg-accent">
                      <td className="px-6 py-4 font-medium">80% - 89%</td>
                      <td className="px-6 py-4 text-green-600 font-bold">A</td>
                      <td className="px-6 py-4">Excellent</td>
                    </tr>
                    <tr className="hover:bg-accent">
                      <td className="px-6 py-4 font-medium">70% - 79%</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">B+</td>
                      <td className="px-6 py-4">Very Good</td>
                    </tr>
                    <tr className="hover:bg-accent">
                      <td className="px-6 py-4 font-medium">60% - 69%</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">B</td>
                      <td className="px-6 py-4">Good</td>
                    </tr>
                    <tr className="hover:bg-accent">
                      <td className="px-6 py-4 font-medium">50% - 59%</td>
                      <td className="px-6 py-4 text-yellow-600 font-bold">C</td>
                      <td className="px-6 py-4">Average</td>
                    </tr>
                    <tr className="hover:bg-accent">
                      <td className="px-6 py-4 font-medium">40% - 49%</td>
                      <td className="px-6 py-4 text-orange-600 font-bold">D</td>
                      <td className="px-6 py-4">Pass</td>
                    </tr>
                    <tr className="hover:bg-accent">
                      <td className="px-6 py-4 font-medium">Below 40%</td>
                      <td className="px-6 py-4 text-red-600 font-bold">F</td>
                      <td className="px-6 py-4">Fail</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Use This Calculator */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary hidden sm:block" />
                Why Use Our Free Marks Percentage Calculator?
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 dark:bg-blue-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    ⚡ Instant Results
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Get your percentage calculated instantly as you type. No
                    need to click calculate buttons or wait for processing.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    📊 Multiple Test Support
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Calculate percentage for single tests or combine multiple
                    test scores to get your overall percentage across all exams.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    🎯 Accurate Calculations
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Uses precise mathematical formulas to ensure 100% accurate
                    percentage calculations every time.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    💾 Save Progress
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Save your entered marks and calculations locally. Your data
                    persists even after closing the browser.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    🆓 Completely Free
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    100% free online tool with no registration, no hidden fees,
                    and unlimited calculations. Use it anytime, anywhere.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    📱 Mobile Friendly
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Fully responsive design works perfectly on all devices -
                    smartphones, tablets, laptops, and desktops.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Practical Examples */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary hidden sm:block" />
                Practical Examples of Marks to Percentage Conversion
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 dark:bg-blue-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    Example 1: School Exam Percentage
                  </h3>
                  <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <p>
                      <strong>Scenario:</strong> A student scored 425 marks out
                      of 500 in their final exams.
                    </p>
                    <p>
                      <strong>Calculation:</strong> (425 ÷ 500) × 100
                    </p>
                    <p>
                      <strong>Result:</strong>{" "}
                      <span className="text-green-600 font-bold">85%</span>{" "}
                      (Grade: A - Excellent)
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    Example 2: Multiple Subject Percentage
                  </h3>
                  <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <p>
                      <strong>Scenario:</strong> Math: 92/100, Science: 88/100,
                      English: 85/100
                    </p>
                    <p>
                      <strong>Total Scored:</strong> 92 + 88 + 85 = 265
                    </p>
                    <p>
                      <strong>Total Maximum:</strong> 100 + 100 + 100 = 300
                    </p>
                    <p>
                      <strong>Calculation:</strong> (265 ÷ 300) × 100
                    </p>
                    <p>
                      <strong>Result:</strong>{" "}
                      <span className="text-green-600 font-bold">88.33%</span>{" "}
                      (Grade: A - Excellent)
                    </p>
                  </div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    Example 3: Semester Marks Percentage
                  </h3>
                  <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <p>
                      <strong>Scenario:</strong> Mid-term: 78/100, Assignments:
                      45/50, Final Exam: 135/150
                    </p>
                    <p>
                      <strong>Total Scored:</strong> 78 + 45 + 135 = 258
                    </p>
                    <p>
                      <strong>Total Maximum:</strong> 100 + 50 + 150 = 300
                    </p>
                    <p>
                      <strong>Calculation:</strong> (258 ÷ 300) × 100
                    </p>
                    <p>
                      <strong>Result:</strong>{" "}
                      <span className="text-green-600 font-bold">86%</span>{" "}
                      (Grade: A - Excellent)
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
                <HelpCircle className="h-6 w-6 text-primary hidden sm:block" />
                Frequently Asked Questions (FAQ)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pb-4">
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  How do I calculate percentage from marks?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  To calculate percentage from marks, divide your scored marks
                  by the total marks and multiply by 100. Formula:{" "}
                  <strong>
                    Percentage = (Scored Marks ÷ Total Marks) × 100
                  </strong>
                  . For example, if you scored 85 out of 100, your percentage is
                  (85 ÷ 100) × 100 = 85%.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  Can I calculate percentage for multiple tests?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Yes! Our marks percentage calculator supports multiple test
                  calculations. Simply select "Multiple Tests" mode, enter the
                  scored and total marks for each test, and the calculator will
                  automatically compute your overall percentage by adding all
                  scored marks and dividing by the sum of total marks.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  What is the difference between marks and percentage?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Marks are the actual scores you obtained (e.g., 85 out of
                  100), while percentage is a standardized score out of 100 that
                  shows your performance relative to the maximum possible score.
                  Percentage makes it easier to compare scores across different
                  tests with different total marks.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  How accurate is this online marks percentage calculator?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Our calculator is 100% accurate and uses the standard
                  mathematical formula for percentage calculation. Results are
                  calculated to 2 decimal places for precision. The calculator
                  also includes input validation to prevent errors and ensure
                  accurate results every time.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  Is this marks percentage calculator free to use?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Yes! This is a completely free online marks percentage
                  calculator. There are no registration requirements, no hidden
                  fees, and no usage limits. You can use it unlimited times for
                  all your percentage calculation needs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  Can I use decimal marks in the calculator?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Yes, our marks percentage calculator fully supports decimal
                  marks. You can enter values like 85.5, 92.75, or any decimal
                  number up to 2 decimal places. This is useful for assignments,
                  projects, or assessments that use fractional marks.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  What grade corresponds to my percentage?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Our calculator automatically shows your grade classification
                  based on your percentage. Generally: 90%+ = A+ (Outstanding),
                  80-89% = A (Excellent), 70-79% = B+ (Very Good), 60-69% = B
                  (Good), 50-59% = C (Average), 40-49% = D (Pass), Below 40% = F
                  (Fail).
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  How do I calculate average percentage for multiple subjects?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Use the "Multiple Tests" mode. Enter the scored and total
                  marks for each subject. The calculator will automatically add
                  up all your scored marks, divide by the total maximum marks,
                  and give you the overall percentage across all subjects. This
                  is perfect for calculating semester or annual percentages.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Additional Information */}
        <section className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle>Understanding Marks Percentage in Education</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  <strong>Marks percentage</strong> is a fundamental metric in
                  education systems worldwide. It provides a standardized way to
                  evaluate and compare academic performance across different
                  subjects, tests, and educational levels. By converting
                  absolute marks to percentages, students, teachers, and parents
                  can better understand academic achievement relative to the
                  maximum possible score.
                </p>
                <p>
                  The <strong>percentage calculation from marks</strong> is
                  essential for various academic purposes including grade
                  reporting, college admissions, scholarship applications, and
                  academic progress tracking. Many educational institutions
                  require minimum percentage scores for promotion to the next
                  grade level or for eligibility in competitive exams.
                </p>
                <p>
                  Our <strong>free online marks percentage calculator</strong>{" "}
                  simplifies this important calculation, making it accessible to
                  everyone. Whether you're a student calculating your exam
                  percentage, a teacher grading assignments, or a parent
                  monitoring your child's academic progress, this tool provides
                  quick, accurate, and reliable results instantly. For quick grading of tests with equal-value questions, try our{" "}
                  <Link
                    href="/easy-grader"
                    className="text-blue-500 hover:text-blue-600 underline font-medium"
                  >
                    easy grader calculator
                  </Link>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Related Tools Section */}
      <RelatedTools
        tools={[
          {
            title: "Easy Grader",
            description: "Quick grading tool for tests and quizzes with equal-value questions.",
            href: "/easy-grader",
            icon: "calculator",
          },
          {
            title: "Average Grade Calculator",
            description: "Calculate weighted averages for assignments with different point values.",
            href: "/average-grade-calculator",
            icon: "calculator",
          },
          {
            title: "GPA Calculator",
            description: "Convert your percentages and letter grades into a Grade Point Average.",
            href: "/gpa-calculator",
            icon: "graduation",
          },
          {
            title: "CGPA Calculator",
            description: "Calculate your Cumulative Grade Point Average across semesters.",
            href: "/cgpa-calculator",
            icon: "graduation",
          },
        ]}
      />
    </div>
  );
}
