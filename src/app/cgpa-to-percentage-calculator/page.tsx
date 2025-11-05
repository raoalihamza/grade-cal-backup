import React from "react";
import CgpaToPercentageCalculator from "@/components/calculators/cgpa-to-percentage/cgpa-to-percentage-calculator";
import { RelatedTools } from "@/components/related-tools";
import { Metadata } from "next";
import {
  Calculator,
  BookOpen,
  TrendingUp,
  CheckCircle,
  HelpCircle,
  Table,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Discover the Magic Tool: CGPA to Percentage Calculator | Free Online CGPA to Percentage Calculator",
  description:
    "Convert CGPA to percentage online instantly with our free online calculator. Supports 10.0, 5.0, 4.0, and Pakistan HEC grading scales. Accurate conversion formulas for Indian, Pakistani, US, and international university systems. Get instant percentage from CGPA.",
  keywords: [
    "cgpa to percentage calculator",
    "free cgpa to percentage calculator",
    "online cgpa to percentage converter",
    "cgpa to percentage converter free",
    "cgpa to percentage",
    "convert cgpa to percentage",
    "convert cgpa to percentage online",
    "cgpa to percentage conversion",
    "cgpa calculator online free",
    "free online cgpa converter",
    "cgpa to percentage formula",
    "10 point cgpa to percentage",
    "cgpa to marks converter",
    "cumulative grade point to percentage",
    "university cgpa calculator",
    "college cgpa to percentage",
    "cgpa to percentage india",
    "cgpa to percentage pakistan",
    "pakistan hec cgpa to percentage",
    "cgpa percentage calculator",
    "instant cgpa converter",
    "accurate cgpa to percentage",
    "cgpa to percentage calculator online",
    "calculate percentage from cgpa",
    "cgpa marks calculator",
    "grade point to percentage converter",
    "academic percentage calculator",
    "cgpa to percentage 10 point scale",
    "cgpa to percentage 4 point scale",
    "cgpa to percentage 5 point scale",
  ],
  openGraph: {
    title:
      "Free Online CGPA to Percentage Calculator | Convert CGPA to Percentage",
    description:
      "Convert CGPA to percentage instantly with our free online calculator. Supports 10.0, 5.0, 4.0, and Pakistan HEC grading scales. Accurate conversion formulas.",
    type: "website",
    url: "https://grade-calculator-smoky.vercel.app/cgpa-to-percentage-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online CGPA to Percentage Calculator",
    description:
      "Convert CGPA to percentage instantly with our free online calculator. Supports multiple grading scales.",
  },
};

export default function CgpaToPercentageCalculatorPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl tracking-tight font-bold mb-4">
          Free Online CGPA to Percentage Calculator
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Convert CGPA to percentage instantly with our free online calculator.
          Supports 10.0, 5.0, 4.0, and Pakistan HEC grading scales. Accurate
          conversion formulas for Indian, Pakistani, US, and international
          university grading systems.
        </p>
      </div>

      {/* Calculator Component */}
      <CgpaToPercentageCalculator />

      {/* Educational Content */}
      <div className="space-y-12">
        {/* What is CGPA to Percentage */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-8 w-8 text-primary hidden sm:block" />
                What is CGPA to Percentage Calculator?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pb-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                A <strong>CGPA to percentage calculator</strong> is a free
                online tool that helps you convert your Cumulative Grade Point
                Average (CGPA) into an equivalent percentage score. This
                calculator simplifies the process of converting grade points to
                percentages for various academic purposes including job
                applications, higher education admissions, scholarship
                eligibility, and academic transcripts.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Our <strong>online CGPA to percentage converter</strong>{" "}
                supports multiple grading systems including the 10.0 point scale
                (commonly used in India), 5.0 point scale, 4.0 point scale
                (US/Canada), and Pakistan HEC's 4.0 scale. Whether you're a
                student, educator, or professional, this tool provides instant
                and accurate percentage calculations from your CGPA.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* How to Convert CGPA to Percentage */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-8 w-8 text-primary hidden sm:block" />
                How to Convert CGPA to Percentage?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pb-4">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Converting CGPA to percentage is simple using our{" "}
                <strong>free CGPA to percentage calculator</strong>. Follow
                these easy steps:
              </p>
              <div className="bg-secondary/30 px-4 py-6 sm:p-6 rounded-lg border">
                <ol className="space-y-3 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Step 1:</strong> Enter your CGPA (e.g., 8.5, 3.7,
                      4.2)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Step 2:</strong> Select your grading scale (10.0,
                      5.0, 4.0, or Pakistan HEC)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Step 3:</strong> View your percentage score
                      instantly with grade classification
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Step 4:</strong> Save your calculation for future
                      reference
                    </span>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CGPA to Percentage Formula */}
        <section className="max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-8 w-8 text-primary hidden sm:block" />
                CGPA to Percentage Formula for Different Grading Scales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pb-4">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Understanding the <strong>CGPA to percentage formula</strong> is
                essential for accurate grade conversion. Different grading
                systems use different conversion formulas:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-primary/20 rounded-xl px-4 py-6 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold">10.0 Scale</h3>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                      India
                    </span>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      Formula:
                    </p>
                    <p className="font-mono text-base sm:text-lg font-bold">
                      Percentage = CGPA × 9.5
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Example:</strong>
                    </p>
                    <p className="text-muted-foreground">
                      8.5 CGPA = 8.5 × 9.5 ={" "}
                      <strong className="text-primary">80.75%</strong>
                    </p>
                    <p className="text-muted-foreground">
                      9.0 CGPA = 9.0 × 9.5 ={" "}
                      <strong className="text-primary">85.5%</strong>
                    </p>
                  </div>
                </div>
                <div className="border-2 border-primary/20 rounded-xl px-4 py-6 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold">4.0 Scale</h3>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                      Pakistan HEC
                    </span>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      Formula:
                    </p>
                    <p className="font-mono text-base sm:text-lg font-bold">
                      Percentage = CGPA × 25
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Example:</strong>
                    </p>
                    <p className="text-muted-foreground">
                      3.4 CGPA = 3.4 × 25 ={" "}
                      <strong className="text-primary">85%</strong>
                    </p>
                    <p className="text-muted-foreground">
                      3.67 CGPA = 3.67 × 25 ={" "}
                      <strong className="text-primary">91.75%</strong>
                    </p>
                  </div>
                </div>
                <div className="border-2 border-primary/20 rounded-xl px-4 py-6 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold">5.0 Scale</h3>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-semibold">
                      International
                    </span>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      Formula:
                    </p>
                    <p className="font-mono text-base sm:text-lg font-bold">
                      Percentage = CGPA × 20
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Example:</strong>
                    </p>
                    <p className="text-muted-foreground">
                      4.2 CGPA = 4.2 × 20 ={" "}
                      <strong className="text-primary">84%</strong>
                    </p>
                    <p className="text-muted-foreground">
                      4.5 CGPA = 4.5 × 20 ={" "}
                      <strong className="text-primary">90%</strong>
                    </p>
                  </div>
                </div>
                <div className="border-2 border-primary/20 rounded-xl px-4 py-6 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold">4.0 Scale</h3>
                    <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm font-semibold">
                      US/Canada
                    </span>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      Formula:
                    </p>
                    <p className="font-mono text-base sm:text-lg font-bold">
                      Percentage = CGPA × 25
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Example:</strong>
                    </p>
                    <p className="text-muted-foreground">
                      3.6 CGPA = 3.6 × 25 ={" "}
                      <strong className="text-primary">90%</strong>
                    </p>
                    <p className="text-muted-foreground">
                      3.8 CGPA = 3.8 × 25 ={" "}
                      <strong className="text-primary">95%</strong>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CGPA to Percentage Conversion Table */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Table className="h-8 w-8 text-primary hidden sm:block" />
                CGPA to Percentage Conversion Table
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pb-4">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Use this comprehensive{" "}
                <strong>CGPA to percentage conversion table</strong> as a quick
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
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold">
                            CGPA
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-end">
                            Percentage
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr className="hover:bg-accent">
                          <td className="px-4 py-3 font-medium">10.0</td>
                          <td className="px-4 py-3 text-green-600 font-bold text-end">
                            95%
                          </td>
                        </tr>
                        <tr className="hover:bg-accent">
                          <td className="px-4 py-3 font-medium">9.0</td>
                          <td className="px-4 py-3 text-green-600 font-bold text-end">
                            85.5%
                          </td>
                        </tr>
                        <tr className="hover:bg-accent">
                          <td className="px-4 py-3 font-medium">8.0</td>
                          <td className="px-4 py-3 text-blue-600 font-bold text-end">
                            76%
                          </td>
                        </tr>
                        <tr className="hover:bg-accent">
                          <td className="px-4 py-3 font-medium">7.0</td>
                          <td className="px-4 py-3 text-blue-600 font-bold text-end">
                            66.5%
                          </td>
                        </tr>
                        <tr className="hover:bg-accent">
                          <td className="px-4 py-3 font-medium">6.0</td>
                          <td className="px-4 py-3 text-yellow-600 font-bold text-end">
                            57%
                          </td>
                        </tr>
                        <tr className="hover:bg-accent">
                          <td className="px-4 py-3 font-medium">5.0</td>
                          <td className="px-4 py-3 text-orange-600 font-bold text-end">
                            47.5%
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
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold">
                            CGPA
                          </th>
                          <th className="px-4 py-3 font-semibold text-end">
                            Percentage
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr className="hover:bg-accent">
                          <td className="px-4 py-3 font-medium">4.0</td>
                          <td className="px-4 py-3 text-green-600 font-bold text-end">
                            100%
                          </td>
                        </tr>
                        <tr className="hover:bg-accent">
                          <td className="px-4 py-3 font-medium">3.67</td>
                          <td className="px-4 py-3 text-green-600 font-bold text-end">
                            91.75% (A)
                          </td>
                        </tr>
                        <tr className="hover:bg-accent">
                          <td className="px-4 py-3 font-medium">3.34</td>
                          <td className="px-4 py-3 text-green-600 font-bold text-end">
                            83.5% (A-)
                          </td>
                        </tr>
                        <tr className="hover:bg-accent">
                          <td className="px-4 py-3 font-medium">3.0</td>
                          <td className="px-4 py-3 text-blue-600 font-bold text-end">
                            75% (B+)
                          </td>
                        </tr>
                        <tr className="hover:bg-accent">
                          <td className="px-4 py-3 font-medium">2.67</td>
                          <td className="px-4 py-3 text-blue-600 font-bold text-end">
                            66.75% (B)
                          </td>
                        </tr>
                        <tr className="hover:bg-accent">
                          <td className="px-4 py-3 font-medium">2.0</td>
                          <td className="px-4 py-3 text-yellow-600 font-bold text-end">
                            50% (D)
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
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-8 w-8 text-primary hidden sm:block" />
                Why Use Our Free CGPA to Percentage Calculator?
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="px-4 py-6 sm:p-6 rounded-lg border border-blue-500/20">
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    ⚡ Instant Conversion
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Get your percentage calculated instantly as you type. No
                    waiting, no complex manual calculations required.
                  </p>
                </div>
                <div className="px-4 py-6 sm:p-6 rounded-lg border border-green-500/20">
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    📊 Multiple Scales
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Supports 10.0, 5.0, 4.0, and Pakistan HEC grading scales.
                    Perfect for Indian, Pakistani, US, and international
                    students.
                  </p>
                </div>
                <div className="px-4 py-6 sm:p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    🎯 100% Accurate
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Uses verified conversion formulas approved by universities
                    and educational boards worldwide.
                  </p>
                </div>
                <div className="px-4 py-6 sm:p-6 rounded-lg border border-pink-500/20">
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    🆓 Always Free
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    100% free online tool with no registration, no hidden fees,
                    and unlimited conversions forever.
                  </p>
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
            <CardContent className="space-y-6 pb-4">
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  How do I convert CGPA to percentage?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  To convert CGPA to percentage, multiply your CGPA by the
                  conversion factor for your grading scale. For 10.0 scale
                  (India): multiply by 9.5. For 4.0 scale: multiply by 25. For
                  5.0 scale: multiply by 20. Our calculator does this
                  automatically for you.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  What is the formula for CGPA to percentage in India?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  In India, the standard formula for converting CGPA to
                  percentage is: <strong>Percentage = CGPA × 9.5</strong>. This
                  formula is recommended by CBSE and most Indian universities
                  for the 10.0 point grading scale.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  How to convert Pakistan HEC CGPA to percentage?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  For Pakistan's HEC 4.0 grading system, use the formula:{" "}
                  <strong>Percentage = CGPA × 25</strong>. For example, a CGPA
                  of 3.4 equals 85%. This follows the official HEC
                  fractionalized grading system.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  Is 8.5 CGPA good in percentage?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Yes! An 8.5 CGPA on a 10.0 scale converts to 80.75% (using 8.5
                  × 9.5), which is considered an excellent grade. This falls in
                  the A grade category and demonstrates strong academic
                  performance.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  Can I convert 4.0 scale CGPA to percentage?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Yes! For the 4.0 grading scale (US/Canada/Pakistan HEC),
                  multiply your CGPA by 25 to get the percentage. For example, a
                  3.6 CGPA equals 90%. Our calculator supports both standard 4.0
                  and Pakistan HEC 4.0 scales.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  Is this CGPA to percentage calculator accurate?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Yes, our calculator is 100% accurate and uses standard
                  conversion formulas approved by educational boards. Results
                  are calculated to 2 decimal places for precision, and the tool
                  includes validation to ensure accurate conversions every time.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  What is the difference between CGPA and percentage?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  CGPA (Cumulative Grade Point Average) is a grading system that
                  averages your performance across all semesters on a scale
                  (10.0, 5.0, or 4.0). Percentage is a standardized score out of
                  100 that shows your academic performance. Converting CGPA to
                  percentage helps compare scores across different systems.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  Do different universities use different CGPA to percentage
                  formulas?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  While most institutions follow standard formulas (×9.5 for
                  10.0 scale, ×25 for 4.0 scale), some universities may have
                  their own conversion methods. Always check with your specific
                  institution's guidelines for official conversions, especially
                  for transcripts and applications.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Additional Information */}
        <section className="max-w-4xl mx-auto">
          <Card className="bg-secondary/30">
            <CardHeader>
              <CardTitle>
                Understanding CGPA to Percentage Conversion in Education
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 py-6 sm:p-8">
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  <strong>CGPA to percentage conversion</strong> is a crucial
                  process for students worldwide. Whether you're applying for
                  higher education, seeking employment, or applying for
                  scholarships, converting your CGPA to percentage provides a
                  standardized measure of your academic performance that's
                  easily understood across different educational systems.
                </p>
                <p>
                  Different countries and educational boards use different
                  grading scales. India primarily uses the 10.0 point scale with
                  the conversion formula CGPA × 9.5. The United States, Canada,
                  and many other countries use the 4.0 scale where CGPA × 25
                  gives the percentage. Pakistan's Higher Education Commission
                  (HEC) uses a 4.0 scale with the same ×25 formula but with
                  specific fractionalized grade classifications.
                </p>
                <p>
                  Our <strong>free online CGPA to percentage calculator</strong>{" "}
                  simplifies this conversion process, making it accessible to
                  everyone. Whether you're a student calculating your academic
                  standing, a professional updating your resume, or an educator
                  helping students, this tool provides quick, accurate, and
                  reliable results instantly. The calculator automatically
                  applies the correct formula based on your selected grading
                  scale and provides grade classifications to help you
                  understand your academic performance level. For the reverse conversion, check our{" "}
                  <Link
                    href="/percentage-to-cgpa-calculator"
                    className="text-blue-500 hover:text-blue-600 underline font-medium"
                  >
                    percentage to CGPA calculator
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
            title: "Percentage to CGPA",
            description: "Convert percentage marks to CGPA for admissions and applications.",
            href: "/percentage-to-cgpa-calculator",
            icon: "percent",
          },
          {
            title: "CGPA Calculator",
            description: "Calculate cumulative CGPA from your semester GPAs.",
            href: "/cgpa-calculator",
            icon: "graduation",
          },
          {
            title: "SGPA to Percentage",
            description: "Convert semester GPA directly to percentage.",
            href: "/sgpa-to-percentage-calculator",
            icon: "percent",
          },
          {
            title: "GPA Calculator",
            description: "Calculate GPA from course letter grades for US/Canada systems.",
            href: "/gpa-calculator",
            icon: "graduation",
          },
        ]}
      />
    </div>
  );
}
