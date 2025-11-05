import AverageGradeCalculator from "@/components/calculators/average-grade/average-grade-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RelatedTools } from "@/components/related-tools";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Discover the Smartest Way to Track Grades Fast: Average Grade Calculator",
  description:
    "Quickly find your average grade with our smart calculator! Fast, accurate, and simple—track your progress and boost your GPA in seconds",
  keywords: [
    "average grade calculator",
    "weighted average grade calculator",
    "grade calculator",
    "calculate average grade",
    "free grade calculator",
    "online grade calculator",
    "weighted grade calculator",
    "average calculator for grades",
    "class grade calculator",
    "course grade calculator",
    "semester grade calculator",
    "grade average calculator online",
    "calculate weighted average grade",
    "grade point average calculator",
    "student grade calculator",
    "school grade calculator",
    "college grade calculator",
    "university grade calculator",
    "grade calculator with weights",
    "assignment grade calculator",
    "test grade calculator",
    "weighted grade calculator online",
    "average grade calculator free",
    "grade calculator percentage",
    "letter grade calculator",
    "points grade calculator",
    "grade calculator app",
    "calculate class average",
    "academic grade calculator",
    "grading calculator",
    "grade average calculator with weights",
    "final grade average calculator",
    "overall grade calculator",
    "weighted grading calculator",
    "grade tracker calculator",
    "calculate course average",
    "grade calculation tool",
    "student average calculator",
    "grade percentage calculator",
    "weighted average calculator for students",
  ],
  openGraph: {
    title:
      "Discover the Smartest Way to Track Grades Fast: Average Grade Calculator",
    description:
      "Quickly find your average grade with our smart calculator! Fast, accurate, and simple—track your progress and boost your GPA in seconds.",
    type: "website",
    url: "https://grade-calculator-smoky.vercel.app/average-grade-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Average Grade Calculator - Weighted Grade Calculator",
    description:
      "Quickly find your average grade with our smart calculator! Fast, accurate, and simple—supports percentages, letters, and points.",
  },
};

export default function AverageGradeCalculatorPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="text-center space-y-4 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          Average Grade Calculator - Weighted Grade Calculator
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Calculate your weighted average grade from multiple assignments,
          tests, and exams. Support for percentages, letter grades, and
          points-based grading systems.
        </p>
      </section>

      {/* Calculator Section */}
      <AverageGradeCalculator />

      {/* What is Average Grade Calculator Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <Card className="px-4 py-6 sm:p-6 space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">
            What is a Weighted Average Grade Calculator?
          </h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-muted-foreground">
              A Weighted Average Grade Calculator is a tool that helps students,
              teachers, and parents calculate the overall grade for a course by
              considering different weights for various assignments, tests,
              quizzes, and exams. Unlike a simple average, a weighted average
              gives more importance to assignments with higher weights,
              providing a more accurate representation of academic performance.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              For example, if your final exam is worth 40% of your grade and
              homework is worth 10%, the weighted average calculator ensures
              that your final exam score has four times the impact on your
              overall grade compared to homework. Once you know your course grades, you can use our{" "}
              <Link
                href="/gpa-calculator"
                className="text-blue-500 hover:text-blue-600 underline font-medium"
              >
                GPA calculator
              </Link>{" "}
              to calculate your overall Grade Point Average across all courses.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">Our calculator supports three different grading formats:</p>
            <ul className="text-sm sm:text-base text-muted-foreground list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Percentage:</strong> Enter grades as percentages (e.g.,
                85%, 92%, 78%)
              </li>
              <li>
                <strong>Letters:</strong> Enter grades as letter grades (e.g.,
                A, B+, C-)
              </li>
              <li>
                <strong>Points:</strong> Enter grades as points earned out of
                maximum points (e.g., 45/50, 38/40)
              </li>
            </ul>
          </div>
        </Card>
      </section>

      {/* How to Calculate Weighted Average Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center">
          How to Calculate Weighted Average Grade
        </h2>
        <Card className="px-4 py-6 sm:p-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-1">
                  Select Your Grade Format
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Choose between Percentage, Letters, or Points based on how
                  your grades are recorded.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-1">
                  Enter Your Grades
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Input each assignment, test, or exam grade along with its
                  weight (importance).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-1">
                  Assign Weights
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Enter the weight for each grade. Weights can be percentages
                  (e.g., 20%, 30%) or decimal values (e.g., 0.2, 0.3).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-1">
                  View Your Weighted Average
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  The calculator automatically computes your weighted average
                  grade, showing both percentage and letter grade.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                5
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-1">
                  Calculate Target Grade (Optional)
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Enter your desired final grade to see what you need on
                  remaining assignments.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Weighted Average Formula Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center">
          Weighted Average Formula
        </h2>
        <Card className="px-4 py-6 sm:p-6 space-y-4">
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-muted-foreground">The weighted average is calculated using this formula:</p>
            <div className="bg-muted p-4 rounded-lg font-mono text-center text-base sm:text-lg">
              Weighted Average = (Grade₁ × Weight₁ + Grade₂ × Weight₂ + ... +
              Gradeₙ × Weightₙ) ÷ (Weight₁ + Weight₂ + ... + Weightₙ)
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mt-4">
              <strong>Example Calculation:</strong>
            </p>
            <ul className="text-sm sm:text-base text-muted-foreground list-none space-y-1 ml-4">
              <li>• Homework: 85% (weight: 20%)</li>
              <li>• Midterm: 78% (weight: 30%)</li>
              <li>• Final Exam: 92% (weight: 50%)</li>
            </ul>
            <div className="bg-muted p-4 rounded-lg space-y-2 text-sm sm:text-base">
              <p>
                Weighted Average = (85 × 0.20 + 78 × 0.30 + 92 × 0.50) ÷ (0.20 +
                0.30 + 0.50)
              </p>
              <p>Weighted Average = (17 + 23.4 + 46) ÷ 1.0</p>
              <p>
                <strong>Weighted Average = 86.4%</strong>
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Example Calculations Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center">
          Example Calculations
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="px-4 py-6 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Percentage Example
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b text-sm sm:text-base">
                    <th className="text-left p-2 font-semibold">Assignment</th>
                    <th className="text-left p-2 font-semibold">Grade</th>
                    <th className="text-left p-2 font-semibold">Weight</th>
                  </tr>
                </thead>
                <tbody className="text-sm sm:text-base">
                  <tr className="border-b">
                    <td className="p-2">Quizzes</td>
                    <td className="p-2">88%</td>
                    <td className="p-2">15%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Homework</td>
                    <td className="p-2">92%</td>
                    <td className="p-2">25%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Midterm</td>
                    <td className="p-2">81%</td>
                    <td className="p-2">25%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Final Exam</td>
                    <td className="p-2">89%</td>
                    <td className="p-2">35%</td>
                  </tr>
                  <tr className="bg-muted/50 font-semibold">
                    <td className="p-2">Average</td>
                    <td className="p-2" colSpan={2}>
                      87.75% (B+)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
          <Card className="px-4 py-6 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Letter Grades Example
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b text-sm sm:text-base">
                    <th className="text-left p-2 font-semibold">Assignment</th>
                    <th className="text-left p-2 font-semibold">Grade</th>
                    <th className="text-left p-2 font-semibold">Weight</th>
                  </tr>
                </thead>
                <tbody className="text-sm sm:text-base">
                  <tr className="border-b">
                    <td className="p-2">Essays</td>
                    <td className="p-2">A-</td>
                    <td className="p-2">30%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Participation</td>
                    <td className="p-2">A</td>
                    <td className="p-2">10%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Midterm</td>
                    <td className="p-2">B+</td>
                    <td className="p-2">25%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Final Paper</td>
                    <td className="p-2">A</td>
                    <td className="p-2">35%</td>
                  </tr>
                  <tr className="bg-muted/50 font-semibold">
                    <td className="p-2">Average</td>
                    <td className="p-2" colSpan={2}>
                      91.5% (A-)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Calculator Types Comparison Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center">
          Comparison: Simple vs. Weighted Average
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="px-4 py-6 sm:p-6 space-y-3 border-primary">
            <h3 className="text-lg sm:text-xl font-semibold">Simple Average</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              All grades have equal importance
            </p>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <strong>Formula:</strong> Sum of grades ÷ Number of grades
              </p>
              <p>
                <strong>Example:</strong>
              </p>
              <p className="ml-4">(85 + 78 + 92) ÷ 3 = 85%</p>
              <p>
                <strong>Best for:</strong> When all assignments are equally
                important
              </p>
            </div>
          </Card>
          <Card className="p-6 space-y-3 border-primary">
            <h3 className="text-lg sm:text-xl font-semibold">Weighted Average</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Different grades have different importance
            </p>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <strong>Formula:</strong> (Grade × Weight) for each, then sum ÷
                Total weight
              </p>
              <p>
                <strong>Example:</strong>
              </p>
              <p className="ml-4">(85×20% + 78×30% + 92×50%) = 86.4%</p>
              <p>
                <strong>Best for:</strong> When assignments have different
                weights (most courses)
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <Card className="px-4 py-6 sm:p-6 space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Why Use a Weighted Average Calculator?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                <span className="text-primary">✓</span> Accurate Grade
                Calculation
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Reflect the true importance of each assignment in your final
                grade.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                <span className="text-primary">✓</span> Plan Your Study Strategy
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Know which assignments to prioritize based on their impact on
                your grade.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                <span className="text-primary">✓</span> Set Realistic Goals
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Calculate what grade you need on remaining assignments to reach
                your target.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                <span className="text-primary">✓</span> Multiple Input Formats
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Support for percentages, letter grades, and points-based
                systems.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                <span className="text-primary">✓</span> Save Time
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Avoid manual calculations and reduce errors with automated
                computation.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                <span className="text-primary">✓</span> Track Progress
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Monitor your academic performance throughout the semester in
                real-time.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <Card className="px-4 py-6 sm:p-6">
            <h4 className="font-semibold text-base sm:text-lg mb-2">
              What's the difference between weighted and unweighted grades?
            </h4>
            <p className="text-muted-foreground text-sm sm:text-base">
              An unweighted grade treats all assignments equally (simple
              average), while a weighted grade gives different importance to
              different assignments based on their weight. For example, a final
              exam might be worth 40% while homework is only 10%.
            </p>
          </Card>
          <Card className="px-4 py-6 sm:p-6">
            <h4 className="font-semibold text-base sm:text-lg mb-2">
              How do I know the weights for my assignments?
            </h4>
            <p className="text-muted-foreground text-sm sm:text-base">
              Check your course syllabus - teachers typically outline the
              grading breakdown there. Common weights are: homework (10-20%),
              quizzes (10-15%), midterm (20-30%), final exam (30-40%), and
              participation (5-10%).
            </p>
          </Card>
          <Card className="px-4 py-6 sm:p-6">
            <h4 className="font-semibold text-base sm:text-lg mb-2">
              Can weights add up to more than 100%?
            </h4>
            <p className="text-muted-foreground text-sm sm:text-base">
              No, the total weight should equal 100% (or 1.0 in decimal form).
              If your weights don't add up to 100%, the calculator will
              normalize them proportionally to ensure accurate results.
            </p>
          </Card>
          <Card className="px-4 py-6 sm:p-6">
            <h4 className="font-semibold text-base sm:text-lg mb-2">
              What if I don't know my grade yet on some assignments?
            </h4>
            <p className="text-muted-foreground text-sm sm:text-base">
              You can use the Target Grade feature to calculate what you need on
              remaining assignments. Simply enter your current grades and their
              weights, then specify your desired final grade. For more specific calculations about what you need on your final exam, check out our{" "}
              <Link
                href="/final-grade-calculator"
                className="text-blue-500 hover:text-blue-600 underline font-medium"
              >
                final grade calculator
              </Link>
              .
            </p>
          </Card>
          <Card className="px-4 py-6 sm:p-6">
            <h4 className="font-semibold text-base sm:text-lg mb-2">
              How are letter grades converted to percentages?
            </h4>
            <p className="text-muted-foreground text-sm sm:text-base">
              We use the standard conversion: A=93%, A-=90%, B+=87%, B=83%,
              B-=80%, C+=77%, C=73%, C-=70%, D+=67%, D=63%, D-=60%, F=50%. Some
              schools may use slightly different values.
            </p>
          </Card>
          <Card className="px-4 py-6 sm:p-6">
            <h4 className="font-semibold text-base sm:text-lg mb-2">
              Can I calculate grades for multiple classes?
            </h4>
            <p className="text-muted-foreground text-sm sm:text-base">
              Yes! You can use this calculator for each of your classes
              separately. We recommend saving each class calculation with a
              descriptive name so you can track all your courses.
            </p>
          </Card>
          <Card className="px-4 py-6 sm:p-6">
            <h4 className="font-semibold text-base sm:text-lg mb-2">
              What's the best way to use the Points calculator?
            </h4>
            <p className="text-muted-foreground text-sm sm:text-base">
              The Points calculator is perfect when your grades are given as
              "points earned out of total points" (e.g., 45/50). Enter the
              points you earned, the maximum points possible, and the weight for
              each assignment.
            </p>
          </Card>
          <Card className="px-4 py-6 sm:p-6">
            <h4 className="font-semibold text-base sm:text-lg mb-2">
              How accurate is this calculator?
            </h4>
            <p className="text-muted-foreground text-sm sm:text-base">
              Our calculator uses precise mathematical formulas to ensure 100%
              accuracy. However, different schools may use different grading
              scales or rounding methods, so always verify with your
              institution's grading policy.
            </p>
          </Card>
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle>Tips for Managing Your Grades</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 pb-4">
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold">
                1. Update Grades Regularly
              </h4>
              <p className="text-sm text-muted-foreground">
                Add new grades as soon as you receive them to keep an accurate
                picture of your performance.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold">
                2. Focus on High-Weight Assignments
              </h4>
              <p className="text-sm text-muted-foreground">
                Prioritize studying for assignments with higher weights - they
                have the biggest impact on your final grade.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold">
                3. Calculate "What-If" Scenarios
              </h4>
              <p className="text-sm text-muted-foreground">
                Use the target grade feature to see what you need on upcoming
                assignments to reach your goal.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold">
                4. Verify Your Syllabus Weights
              </h4>
              <p className="text-sm text-muted-foreground">
                Double-check that the weights you enter match your course syllabus
                exactly.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold">
                5. Save Your Calculations
              </h4>
              <p className="text-sm text-muted-foreground">
                Use the save feature to keep track of your grades throughout the
                semester.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold">
                6. Don't Ignore Low-Weight Items
              </h4>
              <p className="text-sm text-muted-foreground">
                Even though some assignments are worth less, completing them all
                helps maintain a strong overall grade.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold">
                7. Plan Ahead for Finals
              </h4>
              <p className="text-sm text-muted-foreground">
                Calculate early what grade you need on finals to achieve your
                target - gives you time to prepare.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold">
                8. Compare Across Courses
              </h4>
              <p className="text-sm text-muted-foreground">
                Calculate grades for all your classes to identify where you need
                to focus more effort.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Tools Section */}
      <RelatedTools
        tools={[
          {
            title: "Final Grade Calculator",
            description: "Calculate what score you need on your final exam to achieve your target grade.",
            href: "/final-grade-calculator",
            icon: "trending",
          },
          {
            title: "Easy Grader",
            description: "Quick grading tool for tests and quizzes with equal-value questions.",
            href: "/easy-grader",
            icon: "calculator",
          },
          {
            title: "GPA Calculator",
            description: "Convert your course grades into a Grade Point Average on 4.0, 4.3, or 5.0 scale.",
            href: "/gpa-calculator",
            icon: "graduation",
          },
          {
            title: "CGPA Calculator",
            description: "Calculate your Cumulative Grade Point Average across multiple semesters.",
            href: "/cgpa-calculator",
            icon: "graduation",
          },
        ]}
      />
    </div>
  );
}
