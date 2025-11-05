import React from "react";
import PercentageToSgpaCalculator from "@/components/calculators/percentage-to-sgpa/percentage-to-sgpa-calculator";
import { RelatedTools } from "@/components/related-tools";
import { Metadata } from "next";
import {
  Calculator,
  BookOpen,
  TrendingUp,
  Award,
  CheckCircle,
  HelpCircle,
  Table,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Free Online Percentage to SGPA Calculator | Convert Percentage to SGPA",
  description:
    "Convert percentage to SGPA instantly with our free online calculator. Supports 10.0, 5.0, 4.0, and Pakistan HEC grading scales. Accurate conversion formulas for Indian, Pakistani, US, and international university systems. Get instant SGPA from percentage marks.",
  keywords: [
    "percentage to sgpa calculator",
    "free percentage to sgpa calculator",
    "online percentage to sgpa converter",
    "percentage to sgpa converter free",
    "percentage to sgpa",
    "convert percentage to sgpa",
    "convert percentage to sgpa online",
    "percentage to sgpa conversion",
    "sgpa calculator online free",
    "free online sgpa converter",
    "percentage to sgpa formula",
    "10 point sgpa calculator",
    "percentage to semester gpa",
    "marks to sgpa converter",
    "university sgpa calculator",
    "college percentage to sgpa",
    "percentage to sgpa india",
    "percentage to sgpa pakistan",
    "pakistan hec sgpa calculator",
    "sgpa calculator from percentage",
    "instant sgpa converter",
    "accurate percentage to sgpa",
    "percentage to sgpa calculator online",
    "calculate sgpa from percentage",
    "percentage sgpa calculator",
    "grade point calculator online",
    "academic sgpa calculator",
    "percentage to sgpa 10 point scale",
    "percentage to sgpa 4 point scale",
    "percentage to sgpa 5 point scale",
  ],
  openGraph: {
    title:
      "Free Online Percentage to SGPA Calculator | Convert Percentage to SGPA",
    description:
      "Convert percentage to SGPA instantly with our free online calculator. Supports 10.0, 5.0, 4.0, and Pakistan HEC grading scales. Accurate conversion formulas.",
    type: "website",
    url: "https://grade-calculator-smoky.vercel.app/percentage-to-sgpa-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Percentage to SGPA Calculator",
    description:
      "Convert percentage to SGPA instantly with our free online calculator. Supports multiple grading scales.",
  },
};

export default function PercentageToSgpaCalculatorPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Free Online Percentage to SGPA Calculator
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Convert percentage to SGPA (Semester Grade Point Average) instantly
          with our free online calculator. Supports 10.0, 5.0, 4.0, and Pakistan
          HEC grading scales. Perfect for students converting semester marks to
          grade points for academic records and applications.
        </p>
      </div>

      {/* Calculator Component */}
      <PercentageToSgpaCalculator />

      {/* Educational Content */}
      <div className="space-y-12">
        {/* What is Percentage to SGPA */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className=" flex items-center gap-2">
                <BookOpen className="h-8 w-8 text-primary hidden sm:block" />
                What is Percentage to SGPA Calculator?
              </CardTitle>
            </CardHeader>

            <CardContent className="prose dark:prose-invert max-w-none pb-4">
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                A <strong>percentage to SGPA calculator</strong> is a free
                online tool that helps you convert your semester percentage
                marks into Semester Grade Point Average (SGPA). This calculator
                simplifies the process of converting percentage scores to grade
                points, which is essential for academic transcripts, university
                applications, scholarship eligibility, and maintaining
                consistent academic records across different grading systems.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Our <strong>online percentage to SGPA converter</strong>{" "}
                supports multiple grading systems including the 10.0 point scale
                (commonly used in India), 5.0 point scale, 4.0 point scale
                (US/Canada), and Pakistan HEC's 4.0 scale. Whether you're
                calculating your semester GPA for college applications or
                converting marks for international university admissions, this
                tool provides instant and accurate SGPA calculations from your
                percentage.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* How to Convert Percentage to SGPA */}
        <section className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="h-6 w-6 text-cyan-600 hidden sm:block" />
            <h2 className="text-xl sm:text-2xl font-bold">
              How to Convert Percentage to SGPA?
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
            Converting percentage to SGPA is simple using our{" "}
            <strong>free percentage to SGPA calculator</strong>. Follow these
            easy steps:
          </p>
          <div className="bg-blue-50 dark:bg-blue-950/30 px-4 py-6 sm:p-6 rounded-lg">
            <ol className="space-y-3">
              <li className="flex items-start gap-2 text-sm sm:text-base">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Step 1:</strong> Enter your semester percentage (e.g.,
                  85%, 76.5%, 92%)
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Step 2:</strong> Select your grading scale (10.0, 5.0,
                  4.0, or Pakistan HEC)
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Step 3:</strong> View your SGPA score instantly with
                  grade classification
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Step 4:</strong> Save your calculation for future
                  reference or transcript use
                </span>
              </li>
            </ol>
          </div>
        </section>

        {/* Percentage to SGPA Formula */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className=" flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary hidden sm:block" />
                Percentage to SGPA Formula for Different Grading Scales
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 prose dark:prose-invert max-w-none pb-4">
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                Understanding the <strong>percentage to SGPA formula</strong> is
                essential for accurate grade conversion. Different grading
                systems use different conversion formulas:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-bold mb-3">
                    10.0 Point Scale (India)
                  </h3>
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-md mb-4">
                    <p className="text-center text-base sm:text-lg font-mono">
                      SGPA = Percentage ÷ 9.5
                    </p>
                  </div>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p className="font-semibold">Example:</p>
                    <p>Percentage: 85%</p>
                    <p className="font-semibold">
                      SGPA = 85 ÷ 9.5 = 8.95
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-bold mb-3">
                    Pakistan HEC (4.0 Scale)
                  </h3>
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-md mb-4">
                    <p className="text-center text-base sm:text-lg font-mono">
                      SGPA = Percentage ÷ 25
                    </p>
                  </div>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p className="font-semibold">Example:</p>
                    <p>Percentage: 85%</p>
                    <p className="font-semibold">
                      SGPA = 85 ÷ 25 = 3.40
                    </p>
                  </div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-bold mb-3">
                    5.0 Point Scale
                  </h3>
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-md mb-4">
                    <p className="text-center text-base sm:text-lg font-mono">
                      SGPA = Percentage ÷ 20
                    </p>
                  </div>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p className="font-semibold">Example:</p>
                    <p>Percentage: 84%</p>
                    <p className="font-semibold">
                      SGPA = 84 ÷ 20 = 4.20
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/30 px-4 py-6 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-bold mb-3">
                    4.0 Point Scale (US/Canada)
                  </h3>
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-md mb-4">
                    <p className="text-center text-base sm:text-lg font-mono">
                      SGPA = Percentage ÷ 25
                    </p>
                  </div>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p className="font-semibold">Example:</p>
                    <p>Percentage: 90%</p>
                    <p className="font-semibold">
                      SGPA = 90 ÷ 25 = 3.60
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Percentage to SGPA Conversion Table */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className=" flex items-center gap-2">
                <Table className="h-6 w-6 text-cyan-600 hidden sm:block" />
                Percentage to SGPA Conversion Table
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 prose dark:prose-invert max-w-none pb-4">
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                Use this comprehensive{" "}
                <strong>percentage to SGPA conversion table</strong> as a quick
                reference guide for different grading scales:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-blue-600">
                    10.0 Point Scale (India)
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-card shadow-md rounded-lg overflow-hidden">
                      <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                        <tr className="text-sm sm:text-base">
                          <th className="px-4 py-3 text-left font-semibold">
                            Percentage
                          </th>
                          <th className="px-4 py-3 font-semibold text-end">
                            SGPA
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr className="hover:bg-accent text-sm sm:text-base">
                          <td className="px-4 py-3 font-medium">95%</td>
                          <td className="px-4 py-3 text-green-600 font-bold text-end">
                            10.0
                          </td>
                        </tr>
                        <tr className="hover:bg-accent text-sm sm:text-base">
                          <td className="px-4 py-3 font-medium">85.5%</td>
                          <td className="px-4 py-3 text-green-600 font-bold text-end">
                            9.0
                          </td>
                        </tr>
                        <tr className="hover:bg-accent text-sm sm:text-base">
                          <td className="px-4 py-3 font-medium">76%</td>
                          <td className="px-4 py-3 text-blue-600 font-bold text-end">
                            8.0
                          </td>
                        </tr>
                        <tr className="hover:bg-accent text-sm sm:text-base">
                          <td className="px-4 py-3 font-medium">66.5%</td>
                          <td className="px-4 py-3 text-blue-600 font-bold text-end">
                            7.0
                          </td>
                        </tr>
                        <tr className="hover:bg-accent text-sm sm:text-base">
                          <td className="px-4 py-3 font-medium">57%</td>
                          <td className="px-4 py-3 text-yellow-600 font-bold text-end">
                            6.0
                          </td>
                        </tr>
                        <tr className="hover:bg-accent text-sm sm:text-base">
                          <td className="px-4 py-3 font-medium">47.5%</td>
                          <td className="px-4 py-3 text-orange-600 font-bold text-end">
                            5.0
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-green-600">
                    4.0 Point Scale (Pakistan HEC)
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-card shadow-md rounded-lg overflow-hidden">
                      <thead className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                        <tr className="text-sm sm:text-base">
                          <th className="px-4 py-3 text-left font-semibold">
                            Percentage
                          </th>
                          <th className="px-4 py-3 font-semibold text-end">
                            SGPA
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr className="hover:bg-accent text-sm sm:text-base">
                          <td className="px-4 py-3 font-medium">100%</td>
                          <td className="px-4 py-3 text-green-600 font-bold text-end">
                            4.0
                          </td>
                        </tr>
                        <tr className="hover:bg-accent text-sm sm:text-base">
                          <td className="px-4 py-3 font-medium">85% (A)</td>
                          <td className="px-4 py-3 text-green-600 font-bold text-end">
                            3.40
                          </td>
                        </tr>
                        <tr className="hover:bg-accent text-sm sm:text-base">
                          <td className="px-4 py-3 font-medium">80% (A-)</td>
                          <td className="px-4 py-3 text-green-600 font-bold text-end">
                            3.20
                          </td>
                        </tr>
                        <tr className="hover:bg-accent text-sm sm:text-base">
                          <td className="px-4 py-3 font-medium">75% (B+)</td>
                          <td className="px-4 py-3 text-blue-600 font-bold text-end">
                            3.0
                          </td>
                        </tr>
                        <tr className="hover:bg-accent text-sm sm:text-base">
                          <td className="px-4 py-3 font-medium">68% (B-)</td>
                          <td className="px-4 py-3 text-blue-600 font-bold text-end">
                            2.72
                          </td>
                        </tr>
                        <tr className="hover:bg-accent text-sm sm:text-base">
                          <td className="px-4 py-3 font-medium">50% (D)</td>
                          <td className="px-4 py-3 text-yellow-600 font-bold text-end">
                            2.0
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Use This Calculator */}
        <section className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="h-6 w-6 text-cyan-600 hidden sm:block" />
            <h2 className="text-xl sm:text-2xl font-bold">
              Why Use Our Free Percentage to SGPA Calculator?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-950/30 px-4 py-6 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold mb-3">
                ⚡ Instant Conversion
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Get your SGPA calculated instantly as you type. No waiting, no
                complex formulas to remember.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 px-4 py-6 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold mb-3">
                📊 Multiple Scales
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Supports 10.0, 5.0, 4.0, and Pakistan HEC grading scales for
                Indian, Pakistani, US, and international students.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 px-4 py-6 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold mb-3">
                🎯 100% Accurate
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Uses verified conversion formulas approved by universities and
                educational boards worldwide.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 px-4 py-6 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold mb-3">
                🆓 Always Free
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                100% free online tool with no registration, no hidden fees, and
                unlimited conversions forever.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className=" flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-cyan-600 hidden sm:block" />
                Frequently Asked Questions (FAQ)
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 pb-4">
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-2">
                    How do I convert percentage to SGPA?
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    To convert percentage to SGPA, divide your percentage by the
                    conversion factor for your grading scale. For 10.0 scale
                    (India): divide by 9.5. For 4.0 scale: divide by 25. For 5.0
                    scale: divide by 20. Our calculator does this automatically
                    for accurate results.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-2">
                    What is the formula for percentage to SGPA in India?
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    In India, the standard formula for converting percentage to
                    SGPA is: <strong>SGPA = Percentage ÷ 9.5</strong>. This
                    formula is recommended by CBSE and most Indian universities
                    for the 10.0 point grading scale.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-2">
                    How to convert percentage to SGPA in Pakistan HEC system?
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    For Pakistan's HEC 4.0 grading system, use the formula:{" "}
                    <strong>SGPA = Percentage ÷ 25</strong>. For example, 85%
                    equals 3.40 SGPA. This follows the official HEC
                    fractionalized grading system.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-2">
                    What SGPA is 85 percentage?
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    85% converts to different SGPA values depending on the
                    grading scale: On 10.0 scale (India): 8.95 SGPA (85 ÷ 9.5).
                    On 4.0 scale: 3.40 SGPA (85 ÷ 25). On 5.0 scale: 4.25 SGPA
                    (85 ÷ 20).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-2">
                    Can I convert 4.0 scale percentage to SGPA?
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Yes! For the 4.0 grading scale (US/Canada/Pakistan HEC),
                    divide your percentage by 25 to get SGPA. For example, 90%
                    equals 3.60 SGPA. Our calculator supports both standard 4.0
                    and Pakistan HEC 4.0 scales.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-2">
                    Is this percentage to SGPA calculator accurate?
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Yes, our calculator is 100% accurate and uses standard
                    conversion formulas approved by educational boards. Results
                    are calculated to 2 decimal places for precision, and
                    includes validation to ensure accurate conversions every
                    time.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-2">
                    What is the difference between SGPA and percentage?
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    SGPA (Semester Grade Point Average) is a grading system that
                    shows your semester performance on a scale (10.0, 5.0, or
                    4.0). Percentage is a score out of 100. Converting
                    percentage to SGPA helps standardize grades across different
                    semesters and educational systems.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-2">
                    Do different universities use different percentage to SGPA
                    formulas?
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    While most institutions follow standard formulas (÷9.5 for
                    10.0 scale, ÷25 for 4.0 scale), some universities may have
                    their own conversion methods. Always check with your
                    specific institution's guidelines for official conversions,
                    especially for transcripts.
                  </p>
                </div>
            </CardContent>
          </Card>
        </section>

        {/* Additional Information */}
        <section className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle>Understanding Percentage to SGPA Conversion in Education</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                <p>
                  <strong>Percentage to SGPA conversion</strong> is an essential
                  process for students maintaining academic records across different
                  grading systems. SGPA (Semester Grade Point Average) represents
                  your performance for a specific semester on a standardized scale,
                  making it easier to track academic progress and compare
                  performance across different semesters and institutions.
                </p>
                <p>
                  Different countries and educational systems use different grading
                  scales. India primarily uses the 10.0 point scale with the
                  conversion formula Percentage ÷ 9.5. The United States, Canada,
                  and many other countries use the 4.0 scale where Percentage ÷ 25
                  gives the SGPA. Pakistan's Higher Education Commission (HEC) uses
                  a 4.0 scale with the same ÷25 formula but with specific
                  fractionalized grade classifications.
                </p>
                <p>
                  Our <strong>free online percentage to SGPA calculator</strong>{" "}
                  simplifies this conversion process, making it accessible to
                  everyone. Whether you're a student calculating your semester GPA,
                  preparing transcripts for university applications, or an educator
                  helping students understand their grades, this tool provides
                  quick, accurate, and reliable results instantly. The calculator
                  automatically applies the correct formula based on your selected
                  grading scale and provides grade classifications to help you
                  understand your academic standing.
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
            title: "SGPA to Percentage",
            description: "Convert semester GPA back to percentage for transcripts.",
            href: "/sgpa-to-percentage-calculator",
            icon: "percent",
          },
          {
            title: "SGPA to CGPA",
            description: "Calculate cumulative CGPA from semester SGPAs.",
            href: "/sgpa-to-cgpa-calculator",
            icon: "calculator",
          },
          {
            title: "Percentage to CGPA",
            description: "Convert percentage to cumulative CGPA.",
            href: "/percentage-to-cgpa-calculator",
            icon: "percent",
          },
          {
            title: "Marks to Percentage",
            description: "Convert raw marks to percentage before calculating SGPA.",
            href: "/marks-percentage-calculator",
            icon: "percent",
          },
        ]}
      />
    </div>
  );
}
