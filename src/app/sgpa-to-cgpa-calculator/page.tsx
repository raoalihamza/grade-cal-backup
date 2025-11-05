import { Metadata } from "next";
import SgpaToCgpaCalculator from "@/components/calculators/sgpa-to-cgpa/sgpa-to-cgpa-calculator";
import { RelatedTools } from "@/components/related-tools";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calculator, GraduationCap, CheckCircle, TrendingUp, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Transform Your Grades Instantly - SGPA to CGPA Converter | Convert SGPA to CGPA Online Free",
  description:
    "Free online SGPA to CGPA calculator. Easily convert your Semester Grade Point Average (SGPA) to Cumulative Grade Point Average (CGPA). Supports 4.0, 5.0, and 10.0 grading scales. Fast, accurate, and reliable conversion tool for students.",
  keywords: [
    "SGPA to CGPA calculator",
    "SGPA to CGPA converter",
    "convert SGPA to CGPA",
    "online SGPA CGPA calculator",
    "semester grade point average calculator",
    "cumulative grade point average calculator",
    "SGPA CGPA conversion tool",
    "academic grade calculator",
    "student grade converter",
    "university grade calculator",
  ],
  openGraph: {
    title: "SGPA to CGPA Calculator - Convert Grades Online Free",
    description:
      "Convert your SGPA to CGPA effortlessly with our free online calculator. Supports multiple grading scales and provides instant accurate results.",
    type: "website",
  },
};

export default function SgpaToCgpaCalculatorPage() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-3 sm:space-y-4 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          Transform Your Grades Instantly - SGPA to CGPA Converter
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Welcome to this article where I will help you understand how SGPA and
          CGPA work in higher education. Honestly, many students find this
          conversion confusing, but it's actually quite simple once the concepts
          are clear. Grades are not just numbers, they reflect your hard work
          and diligence in every semester, and learning how to convert them can
          make your academic journey smoother.
        </p>
      </section>

      <section>
        <SgpaToCgpaCalculator />
      </section>

      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-primary hidden sm:block" />
              What is SGPA and CGPA?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pb-4">
            <div className="space-y-4 mb-6">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whenever you look at your report cards or transcripts, these
                grading schemes act as important factors in your performance.
                This article is designed to explain from A to Z about the
                calculator, converter, and metrics used by universities. So,
                don't worry, we'll go through the learning systems step by step,
                making this a perfect stepping stone toward understanding your
                academic career better.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-600">
                  SGPA (Semester Grade Point Average)
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  SGPA represents your academic performance for a single
                  semester. It's calculated by dividing the total grade points
                  earned in a semester by the total credit hours attempted in
                  that semester.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-600">
                  CGPA (Cumulative Grade Point Average)
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  CGPA provides a comprehensive view of your academic
                  performance across multiple semesters. It's the average of all
                  your SGPAs from the beginning of your academic program.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <Calculator className="h-8 w-8 text-primary hidden sm:block" />
              How to Convert SGPA to CGPA
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pb-4">
            <div className="bg-secondary/20 rounded-lg px-0 py-6 sm:px-4 sm:py-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Formula:</h3>
              <div className="bg-primary/10 p-4 rounded-lg mb-4">
                <code className="text-base sm:text-lg font-mono">
                  CGPA = (Sum of all SGPAs) ÷ (Total Number of Semesters)
                </code>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-muted-foreground">
                <li>Add up all your SGPA values from each semester</li>
                <li>Count the total number of semesters completed</li>
                <li>
                  Divide the sum of SGPAs by the total number of semesters
                </li>
                <li>The result is your CGPA</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <TrendingUp className="h-8 w-8 text-primary hidden sm:block" />
              Difference Between SGPA and CGPA
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pb-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-secondary/60 text-sm sm:text-base">
                    <th className="border border-border p-3 text-left">
                      Aspect
                    </th>
                    <th className="border border-border p-3 text-left">SGPA</th>
                    <th className="border border-border p-3 text-left">CGPA</th>
                  </tr>
                </thead>
                <tbody className="text-sm sm:text-base">
                  <tr>
                    <td className="border border-border p-3 font-semibold">
                      Full Form
                    </td>
                    <td className="border border-border p-3">
                      Semester Grade Point Average
                    </td>
                    <td className="border border-border p-3">
                      Cumulative Grade Point Average
                    </td>
                  </tr>
                  <tr className="bg-secondary/20">
                    <td className="border border-border p-3 font-semibold">
                      Time Period
                    </td>
                    <td className="border border-border p-3">
                      Single semester
                    </td>
                    <td className="border border-border p-3">
                      All semesters combined
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">
                      Purpose
                    </td>
                    <td className="border border-border p-3">
                      Track semester performance
                    </td>
                    <td className="border border-border p-3">
                      Overall academic standing
                    </td>
                  </tr>
                  <tr className="bg-secondary/20">
                    <td className="border border-border p-3 font-semibold">
                      Used For
                    </td>
                    <td className="border border-border p-3">
                      Semester evaluations
                    </td>
                    <td className="border border-border p-3">
                      Final transcripts, admissions
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary hidden sm:block" />
              Importance of CGPA
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pb-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-medium">Academic Benefits:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-muted-foreground">
                  <li>Reflects overall academic performance</li>
                  <li>Required for graduation requirements</li>
                  <li>Used for academic honors and awards</li>
                  <li>Important for scholarship eligibility</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-medium">Career Benefits:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-muted-foreground">
                  <li>Required for job applications</li>
                  <li>Important for higher education admissions</li>
                  <li>Used by employers for recruitment</li>
                  <li>Helps in competitive exam eligibility</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <AlertTriangle className="h-8 w-8 text-primary hidden sm:block" />
              Common Conversion Errors to Avoid
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pb-4">
            <p className="text-base md:text-lg text-muted-foreground">
              Making mistakes when converting SGPA to CGPA is common. Here are a
              few typical errors to steer clear of:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-red-600">
                  Inaccurate Weightage
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  An incorrect CGPA calculation often happens when students
                  forget to assign the right semester credits or weight. Always
                  multiply your SGPA by the appropriate number of credits for
                  each semester. Using proper measurement tools or statistical
                  software ensures accurate results every time.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-red-600">
                  Errors in Rounding Off
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  While calculating your CGPA, try to avoid rounding numbers too
                  early, as it can lead to significant errors in the final
                  result. Always take each step carefully and keep your values
                  precise until the end to ensure accuracy.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-red-600">
                  Ignoring Failed Subjects
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Every grading scheme incorporates failed subjects in both SGPA
                  and CGPA computation. Ignoring them can lead to an erroneously
                  high score, so always incorporate all subjects to get a fair
                  and accurate result.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-red-600">
                  Incorrect Credit System
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Each institution may use a different credit system, some
                  employ a 4-point scale while others follow a 10-point one.
                  Using the wrong conversion can affect accuracy, so always
                  choose the right scale used by your institution.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-red-600">
                  Ignoring to Double-Check
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Always review your computations to ensure they're correct, as
                  even a small math mistake can greatly impact your CGPA. Taking
                  a little extra time to verify results can save you from major
                  errors later.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <CheckCircle className="h-8 w-8 text-primary hidden sm:block" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pb-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  Q: Is CGPA more important than SGPA?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Both are important, but CGPA provides a comprehensive view of
                  your overall academic performance and is typically used for
                  final evaluations, admissions, and job applications.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  Q: Can I improve my CGPA after graduation?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Generally, CGPA cannot be changed after graduation. However,
                  some universities offer improvement exams or additional
                  courses that might affect your final grades.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  Q: What is a good CGPA?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  A good CGPA varies by grading scale and institution.
                  Generally, above 3.0 on a 4.0 scale, above 6.0 on a 10.0
                  scale, or above 3.5 on a 5.0 scale is considered good.
                </p>
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
            description: "Calculate cumulative CGPA from multiple semester GPAs.",
            href: "/cgpa-calculator",
            icon: "graduation",
          },
          {
            title: "SGPA to Percentage",
            description: "Convert your semester GPA directly to percentage.",
            href: "/sgpa-to-percentage-calculator",
            icon: "percent",
          },
          {
            title: "CGPA to Percentage",
            description: "Convert CGPA to percentage for applications.",
            href: "/cgpa-to-percentage-calculator",
            icon: "percent",
          },
          {
            title: "GPA Calculator",
            description: "Calculate GPA from course letter grades.",
            href: "/gpa-calculator",
            icon: "graduation",
          },
        ]}
      />
    </div>
  );
}