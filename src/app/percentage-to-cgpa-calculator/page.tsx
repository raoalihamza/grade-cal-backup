import { Metadata } from "next";
import PercentageToCgpaCalculator from "@/components/calculators/percentage-to-cgpa/percentage-to-cgpa-calculator";
import { RelatedTools } from "@/components/related-tools";
import {
  BookOpen,
  Calculator,
  GraduationCap,
  TrendingUp,
  Globe,
  Award,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Percentage to CGPA Calculator - Free Online Grade Converter",
  description:
    "Convert percentage to CGPA instantly with our free online calculator. Supports 10.0, 4.0 (Pakistan HEC), and 5.0 grading scales. Accurate conversion formulas for Indian, Pakistan, US, and international grading systems. Get instant CGPA from percentage marks.",
  keywords: [
    "percentage to cgpa calculator",
    "free percentage to cgpa calculator",
    "online percentage to cgpa converter",
    "percentage to cgpa converter free",
    "percentage to cgpa",
    "cgpa calculator from percentage",
    "convert percentage to cgpa",
    "convert percentage to cgpa online",
    "percentage to cgpa conversion",
    "cgpa converter online free",
    "free online cgpa calculator",
    "percentage to grade point calculator",
    "online cgpa calculator",
    "free cgpa converter",
    "10 point cgpa calculator",
    "4 point cgpa calculator",
    "percentage to cgpa india",
    "percentage to cgpa pakistan",
    "pakistan hec cgpa calculator",
    "hec grading system pakistan",
    "free pakistan cgpa calculator",
    "marks to cgpa converter online",
    "academic grade converter free",
    "university cgpa calculator online",
    "college cgpa converter",
    "percentage to gpa converter",
    "grade conversion calculator free",
    "student grade calculator online",
    "instant cgpa calculator",
    "accurate cgpa converter",
  ],
  openGraph: {
    title: "Percentage to CGPA Calculator - Free Online Grade Converter",
    description:
      "Convert percentage to CGPA instantly with our free online calculator. Supports 10.0, 4.0 (Pakistan HEC), and 5.0 grading scales. Accurate conversion formulas for Indian, Pakistan, US, and international grading systems.",
    type: "website",
    url: "https://grade-calculator-smoky.vercel.app/percentage-to-cgpa-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Percentage to CGPA Calculator - Free Online Grade Converter",
    description:
      "Convert percentage to CGPA instantly. Supports multiple grading scales with accurate conversion formulas.",
  },
  alternates: {
    canonical: "/percentage-to-cgpa-calculator",
  },
};

export default function PercentageToCgpaPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          Free Online Percentage to CGPA Calculator
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Convert your percentage marks to CGPA instantly using our free and
          accurate online calculator. Supports 10.0 (India), 4.0 (Pakistan HEC,
          US/Canada), and 5.0 (Germany) point grading scales used worldwide.
        </p>
      </section>

      {/* Calculator Section */}
      <section>
        <PercentageToCgpaCalculator />
      </section>

      {/* Educational Content */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-primary hidden sm:block" />
              Understanding Percentage to CGPA Conversion
            </CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none pb-4">
            <p className="text-base md:text-lg text-muted-foreground mb-4">
              Learn how percentage marks are converted to CGPA and why it
              matters for your academic career.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="space-y-3">
                <Calculator className="h-10 w-10 text-blue-600 hidden sm:block" />
                <h3 className="text-lg sm:text-xl font-semibold">
                  What is CGPA?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  CGPA stands for Cumulative Grade Point Average. It's a
                  standardized way to measure academic performance across
                  different institutions and countries. CGPA provides a
                  normalized scale that makes it easier to compare students from
                  various educational systems.
                </p>
              </div>

              <div className="space-y-3">
                <TrendingUp className="h-10 w-10 text-green-600 hidden sm:block" />
                <h3 className="text-lg sm:text-xl font-semibold">
                  Why Convert Percentage to CGPA?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Many universities, especially international institutions,
                  require CGPA for admissions. Converting your percentage to
                  CGPA helps in scholarship applications, higher education
                  admissions, and job applications where standardized grading is
                  preferred.
                </p>
              </div>

              <div className="space-y-3">
                <Globe className="h-10 w-10 text-purple-600 hidden sm:block" />
                <h3 className="text-lg sm:text-xl font-semibold">
                  Different Grading Scales
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  The 10.0 scale is common in India, 4.0 scale in Pakistan (HEC)
                  and US/Canada, and 5.0 scale in Germany. Each system has its
                  own conversion formula, and it's important to use the correct
                  scale for your target institution. Pakistan's HEC system has
                  specific grade classifications.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Conversion Formulas Section */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <Calculator className="h-8 w-8 text-primary hidden sm:block" />
              Percentage to CGPA Conversion Formulas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pb-4">
            <p className="text-base md:text-lg text-muted-foreground">
              Standard formulas used for converting percentage marks to CGPA
              across different grading systems
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="border-2 border-primary/20 rounded-xl px-4 py-6 sm:p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold">10.0 Scale</h3>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                    India
                  </span>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">Formula:</p>
                  <p className="font-mono text-base sm:text-lg font-bold">
                    CGPA = Percentage ÷ 9.5
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Example:</strong>
                  </p>
                  <p className="text-muted-foreground">
                    85% = 85 ÷ 9.5 ={" "}
                    <strong className="text-primary">8.95 CGPA</strong>
                  </p>
                  <p className="text-muted-foreground">
                    75% = 75 ÷ 9.5 ={" "}
                    <strong className="text-primary">7.89 CGPA</strong>
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
                  <p className="text-sm text-muted-foreground mb-2">Formula:</p>
                  <p className="font-mono text-base sm:text-lg font-bold">
                    CGPA = Percentage ÷ 25
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Example (HEC System):</strong>
                  </p>
                  <p className="text-muted-foreground">
                    85% = 85 ÷ 25 ={" "}
                    <strong className="text-primary">3.4 CGPA (A)</strong>
                  </p>
                  <p className="text-muted-foreground">
                    75% = 75 ÷ 25 ={" "}
                    <strong className="text-primary">3.0 CGPA (B+)</strong>
                  </p>
                  <p className="text-muted-foreground">
                    68% = 68 ÷ 25 ={" "}
                    <strong className="text-primary">2.72 CGPA (B-)</strong>
                  </p>
                </div>
              </div>

              <div className="border-2 border-primary/20 rounded-xl px-4 py-6 sm:p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold">4.0 Scale</h3>
                  <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm font-semibold">
                    US/Canada
                  </span>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">Formula:</p>
                  <p className="font-mono text-base sm:text-lg font-bold">
                    CGPA = Percentage ÷ 25
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Example:</strong>
                  </p>
                  <p className="text-muted-foreground">
                    85% = 85 ÷ 25 ={" "}
                    <strong className="text-primary">3.4 CGPA</strong>
                  </p>
                  <p className="text-muted-foreground">
                    75% = 75 ÷ 25 ={" "}
                    <strong className="text-primary">3.0 CGPA</strong>
                  </p>
                </div>
              </div>

              <div className="border-2 border-primary/20 rounded-xl px-4 py-6 sm:p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold">5.0 Scale</h3>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-semibold">
                    Germany
                  </span>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">Formula:</p>
                  <p className="font-mono text-base sm:text-lg font-bold">
                    CGPA = Percentage ÷ 20
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Example:</strong>
                  </p>
                  <p className="text-muted-foreground">
                    85% = 85 ÷ 20 ={" "}
                    <strong className="text-primary">4.25 CGPA</strong>
                  </p>
                  <p className="text-muted-foreground">
                    75% = 75 ÷ 20 ={" "}
                    <strong className="text-primary">3.75 CGPA</strong>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* How to Use Section */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <TrendingUp className="h-8 w-8 text-primary hidden sm:block" />
              How to Use the Free Online Percentage to CGPA Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pb-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center space-y-3">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto">
                  1
                </div>
                <h3 className="text-base sm:text-lg font-semibold">
                  Enter Percentage
                </h3>
                <p className="text-sm text-muted-foreground">
                  Input your percentage marks (0-100%) in the calculator field
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto">
                  2
                </div>
                <h3 className="text-base sm:text-lg font-semibold">
                  Select Scale
                </h3>
                <p className="text-sm text-muted-foreground">
                  Choose the appropriate grading scale (10.0, 4.0, or 5.0 point)
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto">
                  3
                </div>
                <h3 className="text-base sm:text-lg font-semibold">
                  Calculate
                </h3>
                <p className="text-sm text-muted-foreground">
                  Click the Calculate button to get your instant CGPA conversion
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto">
                  4
                </div>
                <h3 className="text-base sm:text-lg font-semibold">
                  View Results
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get your CGPA with grade classification and conversion details
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2 ">
              <Award className="h-8 w-8 text-primary hidden sm:block" />
              Benefits of Using Our Free Online CGPA Converter
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pb-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Award className="h-8 w-8 text-blue-600 flex-shrink-0 hidden sm:block" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    Accurate Conversions
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Uses standard conversion formulas recognized by educational
                    institutions worldwide
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Calculator className="h-8 w-8 text-green-600 flex-shrink-0 hidden sm:block" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    Instant Results
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get immediate CGPA calculations with automatic updates as
                    you type
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Globe className="h-8 w-8 text-purple-600 flex-shrink-0 hidden sm:block" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    Multiple Scales
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Supports 10.0, 4.0, and 5.0 point scales for different
                    countries
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <BookOpen className="h-8 w-8 text-orange-600 flex-shrink-0 hidden sm:block" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    Grade Classification
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Automatically shows your grade classification based on CGPA
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <GraduationCap className="h-8 w-8 text-red-600 flex-shrink-0 hidden sm:block" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    Free & Unlimited
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    100% free with no registration required, use it unlimited
                    times
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <TrendingUp className="h-8 w-8 text-teal-600 flex-shrink-0 hidden sm:block" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    Mobile Friendly
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Works perfectly on all devices - desktop, tablet, and mobile
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
            <CardTitle className=" flex items-center gap-2">
              <Globe className="h-8 w-8 text-primary hidden sm:block" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pb-4">
            <div>
              <h3 className="font-semibold mb-2 text-base sm:text-lg">
                How do I convert percentage to CGPA?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                To convert percentage to CGPA, divide your percentage by the
                appropriate divisor based on your grading scale: 9.5 for 10.0
                scale (India), 25 for 4.0 scale (Pakistan HEC & US/Canada), and
                20 for 5.0 scale (Germany). Our calculator does this
                automatically for you.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-base sm:text-lg">
                Is the conversion formula the same for all universities?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                While most institutions use standard formulas, some universities
                may have their own specific conversion methods. Always check
                with your target institution for their exact requirements. Our
                calculator uses the most widely accepted conversion formulas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-base sm:text-lg">
                What is the difference between CGPA and GPA?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                CGPA (Cumulative Grade Point Average) is the average of grade
                points obtained across all semesters, while GPA typically refers
                to a single semester or term. CGPA provides an overall academic
                performance measure throughout your academic career.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-base sm:text-lg">
                Can I use this for scholarship applications?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Yes, our calculator helps you convert your percentage to CGPA
                for scholarship applications. However, always verify the
                conversion with official documents from your institution, as
                some scholarships may require certified CGPA conversions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-base sm:text-lg">
                Which grading scale should I choose?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Choose the 10.0 scale for Indian institutions, Pakistan HEC
                (4.0) for Pakistani universities following HEC guidelines, 4.0
                scale for US/Canadian universities, and 5.0 scale for German
                institutions. If you're unsure, check your target institution's
                website or admission requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-base sm:text-lg">
                What is Pakistan HEC grading system?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Pakistan's Higher Education Commission (HEC) uses a 4.0 scale
                with a fractionalized grading system. The conversion formula is:
                CGPA = Percentage ÷ 25. Grades range from A (85%+) to F (below
                50%). Our calculator uses the official HEC grading
                classifications including A, A-, B+, B, B-, C+, C, C-, D+, D,
                and F.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Important Notes */}
      <section className="max-w-4xl mx-auto">
        <Card className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800">
          <CardContent className="px-6 py-8 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-amber-900 dark:text-amber-100">
              Important Notes
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-amber-800 dark:text-amber-200">
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span>
                  Different universities may use different conversion formulas.
                  Always verify with your institution's official conversion
                  chart.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span>
                  The 9.5 divisor for 10.0 scale is the most commonly used in
                  India, but some institutions may use 9 or 10.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span>
                  For official transcripts and applications, always use the
                  conversion method specified by your educational institution or
                  the institution you're applying to.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span>
                  This calculator provides approximate conversions. For precise
                  requirements, consult your academic advisor or the admissions
                  office. For reverse conversion, use our{" "}
                  <Link
                    href="/cgpa-to-percentage-calculator"
                    className="text-blue-500 hover:text-blue-600 underline font-medium"
                  >
                    CGPA to percentage calculator
                  </Link>
                  .
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Related Tools Section */}
      <RelatedTools
        tools={[
          {
            title: "CGPA to Percentage",
            description: "Convert CGPA back to percentage for transcripts and applications.",
            href: "/cgpa-to-percentage-calculator",
            icon: "percent",
          },
          {
            title: "CGPA Calculator",
            description: "Calculate cumulative CGPA from semester-wise GPAs.",
            href: "/cgpa-calculator",
            icon: "graduation",
          },
          {
            title: "SGPA to CGPA",
            description: "Convert semester GPA to cumulative CGPA across all terms.",
            href: "/sgpa-to-cgpa-calculator",
            icon: "calculator",
          },
          {
            title: "Marks to Percentage",
            description: "Convert raw marks to percentage before calculating CGPA.",
            href: "/marks-percentage-calculator",
            icon: "percent",
          },
        ]}
      />
    </div>
  );
}
