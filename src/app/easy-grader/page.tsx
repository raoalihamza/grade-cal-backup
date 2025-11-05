import EasyGraderCalculator from "@/components/calculators/easy-grader/easy-grader-calculator";
import { Card, CardContent } from "@/components/ui/card";
import { RelatedTools } from "@/components/related-tools";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Easy Grade Calculator Online",
  description:
    "Instantly calculate your grades with our easy online Grade Calculator! Fast, accurate, and hassle free—discover your scores in seconds. Free EZ Grader for teachers and students. Calculate test scores, quiz grades, and assignment percentages with our quick grading tool. Supports 10-point and 7-point grading scales. Perfect for educators grading multiple-choice tests and students checking their performance.",
  keywords: [
    "easy grader",
    "ez grader",
    "easy grader calculator",
    "ez grader calculator",
    "test score calculator",
    "grade calculator",
    "teacher grader",
    "online grader",
    "free easy grader",
    "ez grading calculator",
    "quick grade calculator",
    "test grade calculator",
    "grading calculator",
    "score calculator",
    "easy grade calculator",
    "teacher grade calculator",
    "grading scale calculator",
    "quiz grade calculator",
    "assignment grade calculator",
    "free grading calculator",
    "online easy grader",
    "digital ez grader",
    "grade calculator for teachers",
    "test grading calculator",
    "easy grader online",
    "ez grader online",
    "teacher grading tool",
    "grading chart calculator",
    "percentage grade calculator",
    "grading tool for teachers",
    "free ez grader",
    "instant grade calculator",
    "quick grader",
    "easy grader for teachers",
    "ez grader for teachers",
    "test percentage calculator",
    "grade percentage calculator",
    "multiple choice grader",
    "quiz grader",
    "exam grader calculator",
    "student score calculator",
    "teacher grading calculator online",
    "grading calculator online free",
    "ez grader 2025",
    "easy grader app",
  ],
  openGraph: {
    title:
      "Free Easy Grader (EZ Grader) - Online Test Score Calculator for Teachers",
    description:
      "Instantly calculate test scores and grades with our free Easy Grader calculator. Fast, accurate grading for teachers and students. Supports multiple grading scales.",
    type: "website",
    url: "https://grade-calculator-smoky.vercel.app/easy-grader",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Easy Grader (EZ Grader) Calculator - Quick Grading Tool",
    description:
      "Grade tests in seconds! Free online EZ Grader calculator for teachers. Calculate test scores, percentages, and letter grades instantly.",
  },
};

export default function EasyGraderPage() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          Discover the Magic of an Easy Grade Calculator Online
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Use this simple EZ Grading calculator to find quiz, test and
          assignment scores. Enter the number of questions and wrong answers to
          instantly calculate grades and percentages.
        </p>
      </section>

      {/* Calculator Section */}
      <EasyGraderCalculator />

      {/* What is Easy Grader Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <Card className="p-6 space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">
            What is an Easy Grader?
          </h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-muted-foreground">
              An Easy Grader (also known as EZ Grader) is a quick grading tool
              that helps teachers, professors, and educators instantly calculate
              student scores and grades based on the number of questions and
              incorrect answers. It's designed to save time during the grading
              process by automatically computing percentages and letter grades. If you need to convert your{" "}
              <Link
                href="/marks-percentage-calculator"
                className="text-blue-500 hover:text-blue-600 underline font-medium"
              >
                marks to percentages
              </Link>
              , we have a dedicated tool for that as well.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              Originally a physical grading wheel or slide chart, the Easy
              Grader has evolved into a digital calculator that provides instant
              results. Simply input the total number of questions on a test,
              quiz, or assignment, and the number of wrong answers - the
              calculator does the rest.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              This tool is especially useful for:
            </p>
            <ul className="text-sm sm:text-base text-muted-foreground list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Teachers:</strong> Grade multiple-choice tests, quizzes,
                and assignments quickly
              </li>
              <li>
                <strong>Students:</strong> Check your own test scores and
                understand your performance. For college students tracking overall academic performance, try our{" "}
                <Link
                  href="/gpa-calculator"
                  className="text-blue-500 hover:text-blue-600 underline font-medium"
                >
                  GPA calculator
                </Link>{" "}
                or{" "}
                <Link
                  href="/cgpa-calculator"
                  className="text-blue-500 hover:text-blue-600 underline font-medium"
                >
                  CGPA calculator
                </Link>
              </li>
              <li>
                <strong>Parents:</strong> Review and understand your child's
                test results
              </li>
              <li>
                <strong>Tutors:</strong> Assess student progress on practice
                tests and worksheets
              </li>
            </ul>
          </div>
        </Card>
      </section>

      {/* How to Use Easy Grader Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center">
          How to Use the Easy Grader Calculator
        </h2>
        <Card>
          <CardContent className="space-y-4 !pt-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-1">
                  Enter Total Number of Questions
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Input the total number of questions on your test, quiz, or
                  assignment (e.g., 20, 50, 100).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-1">
                  Enter Number of Wrong Answers
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Input how many questions were answered incorrectly (e.g., 3,
                  5, 10).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-1">
                  View Instant Results
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  The calculator instantly shows the score percentage, letter
                  grade, and number of correct answers.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-1">
                  Adjust Grading Scale (Optional)
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Choose your preferred grading scale (e.g., 10-point scale,
                  custom thresholds) to match your institution's standards.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Example Calculation Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center">
          Example Calculation
        </h2>
        <Card>
          <CardContent className="space-y-4 !pt-6">
            <p className="text-base sm:text-lg text-muted-foreground">
              Here's a practical example of how the Easy Grader works:
            </p>
            <div className="bg-green-50 dark:bg-green-950/30 px-4 py-6 sm:p-6 rounded-lg">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green-200 dark:border-green-800 text-sm sm:text-base">
                      <th className="text-left p-3 font-semibold">Input</th>
                      <th className="text-left p-3 font-semibold">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-green-100 dark:border-green-900 text-sm sm:text-base">
                      <td className="p-3">Total Questions</td>
                      <td className="p-3 font-mono">25</td>
                    </tr>
                    <tr className="border-b border-green-100 dark:border-green-900 text-sm sm:text-base">
                      <td className="p-3">Wrong Answers</td>
                      <td className="p-3 font-mono">3</td>
                    </tr>
                    <tr className="border-b border-green-100 dark:border-green-900 text-sm sm:text-base">
                      <td className="p-3 font-semibold">Correct Answers</td>
                      <td className="p-3 font-mono">22</td>
                    </tr>
                    <tr className="border-b border-green-100 dark:border-green-900 text-sm sm:text-base">
                      <td className="p-3 font-semibold">Score Percentage</td>
                      <td className="p-3 font-mono">88%</td>
                    </tr>
                    <tr className="font-bold bg-green-100 dark:bg-green-900 text-sm sm:text-base">
                      <td className="p-3">Letter Grade</td>
                      <td className="p-3 font-mono">B+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-white dark:bg-gray-900 rounded-md">
                <p className="text-base sm:text-lg">
                  <strong>Calculation:</strong> (22 correct ÷ 25 total) × 100 = 88%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Grading Scale Reference Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center">
          Standard Grading Scales
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-950/30 px-4 py-6 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              10-Point Scale (Most Common)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b text-sm sm:text-base">
                    <th className="text-left p-2 font-semibold">Grade</th>
                    <th className="text-left p-2 font-semibold">Percentage</th>
                  </tr>
                </thead>
                <tbody className="text-sm sm:text-base">
                  <tr className="border-b">
                    <td className="p-2">A</td>
                    <td className="p-2">90-100%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">B</td>
                    <td className="p-2">80-89%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">C</td>
                    <td className="p-2">70-79%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">D</td>
                    <td className="p-2">60-69%</td>
                  </tr>
                  <tr>
                    <td className="p-2">F</td>
                    <td className="p-2">0-59%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-950/30 px-4 py-6 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              7-Point Scale
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b text-sm sm:text-base">
                    <th className="text-left p-2 font-semibold">Grade</th>
                    <th className="text-left p-2 font-semibold">Percentage</th>
                  </tr>
                </thead>
                <tbody className="text-sm sm:text-base">
                  <tr className="border-b">
                    <td className="p-2">A</td>
                    <td className="p-2">93-100%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">B</td>
                    <td className="p-2">85-92%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">C</td>
                    <td className="p-2">77-84%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">D</td>
                    <td className="p-2">70-76%</td>
                  </tr>
                  <tr>
                    <td className="p-2">F</td>
                    <td className="p-2">0-69%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <Card className="p-6 space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Why Use an Easy Grader?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                <span className="text-primary">✓</span> Save Time
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Grade tests in seconds instead of minutes. Perfect for teachers
                with large class sizes.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                <span className="text-primary">✓</span> Reduce Errors
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Eliminate manual calculation mistakes and ensure accurate
                grading every time.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                <span className="text-primary">✓</span> Instant Feedback
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Provide students with immediate results and help them understand
                their performance.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                <span className="text-primary">✓</span> Flexible Scales
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Support for multiple grading scales to match different
                educational standards.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                <span className="text-primary">✓</span> Free & Online
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                No need to buy physical grading wheels. Access from any device,
                anywhere.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                <span className="text-primary">✓</span> Easy to Use
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Simple interface requires just two inputs - total questions and
                wrong answers.
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
        <Card>
          <CardContent className="space-y-6 !py-4">
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                How does an Easy Grader calculate percentages?
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                The Easy Grader uses this formula: (Correct Answers ÷ Total
                Questions) × 100 = Score Percentage. For example, if a student
                gets 18 out of 20 correct, the calculation is (18 ÷ 20) × 100 =
                90%.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                Can I use this for tests with different point values per
                question?
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                The Easy Grader is designed for tests where all questions have
                equal value. For weighted grading (different points per
                question), use our Points Calculator in the{" "}
                <Link
                  href="/average-grade-calculator"
                  className="text-blue-500 hover:text-blue-600 underline font-medium"
                >
                  weighted average grade calculator
                </Link>{" "}
                tool.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                What's the difference between 10-point and 7-point grading
                scales?
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                A 10-point scale has wider ranges (A = 90-100%), making it
                easier to earn higher grades. A 7-point scale has narrower
                ranges (A = 93-100%), making grading more strict. Different
                schools and states use different scales.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                Can I grade partial credit with this calculator?
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                The Easy Grader works with whole numbers (complete right or
                wrong answers). For partial credit, you'll need to convert your
                grading to a percentage first or use a different grading method.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                Is this the same as the physical EZ Grader wheel?
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                Yes! This digital calculator provides the same functionality as
                the classic physical EZ Grader wheels and slide charts used by
                teachers, but with the convenience of being accessible online
                from any device.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                How do I round grades?
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                Most grading systems round percentages to the nearest whole
                number. For example, 89.5% rounds up to 90% (an A), while 89.4%
                rounds down to 89% (a B). Check your institution's rounding
                policy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                Can this calculator handle tests with more than 100 questions?
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                Yes! Our Easy Grader calculator can handle any number of
                questions, from small quizzes with 5 questions to comprehensive
                exams with 200+ questions.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tips Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center">
          Tips for Using Easy Grader Effectively
        </h2>
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="grid md:grid-cols-2 gap-6 !pt-6">
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold">
                1. Double-Check Question Count
              </h4>
              <p className="text-sm text-muted-foreground">
                Always verify the total number of questions before grading to
                ensure accurate results.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold">
                2. Use Consistent Grading Scales
              </h4>
              <p className="text-sm text-muted-foreground">
                Stick to the same grading scale throughout a course or semester
                for fairness and consistency.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold">
                3. Consider Rounding Policies
              </h4>
              <p className="text-sm text-muted-foreground">
                Decide on your rounding approach early and apply it consistently
                to all student grades.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold">
                4. Save Grading Results
              </h4>
              <p className="text-sm text-muted-foreground">
                Use the save feature to keep records of your grading sessions for
                future reference.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold">
                5. Grade Answer Sheets in Batches
              </h4>
              <p className="text-sm text-muted-foreground">
                For efficiency, count wrong answers for multiple students first,
                then use the calculator for all at once.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold">
                6. Communicate Scale to Students
              </h4>
              <p className="text-sm text-muted-foreground">
                Make sure students know which grading scale you're using before
                they take the test.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Tools Section */}
      <RelatedTools
        tools={[
          {
            title: "Average Grade Calculator",
            description: "Calculate weighted averages for assignments with different point values and weights.",
            href: "/average-grade-calculator",
            icon: "calculator",
          },
          {
            title: "Final Grade Calculator",
            description: "Find out what score you need on your final exam to achieve your desired grade.",
            href: "/final-grade-calculator",
            icon: "trending",
          },
          {
            title: "Marks to Percentage Calculator",
            description: "Convert your marks or scores into percentages instantly.",
            href: "/marks-percentage-calculator",
            icon: "percent",
          },
          {
            title: "GPA Calculator",
            description: "Calculate your Grade Point Average with support for 4.0, 4.3, and 5.0 scales.",
            href: "/gpa-calculator",
            icon: "graduation",
          },
        ]}
      />
    </div>
  );
}
