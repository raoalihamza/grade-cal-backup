import { Metadata } from "next";
import SgpaToPercentageCalculator from "@/components/calculators/sgpa-to-percentage/sgpa-to-percentage-calculator";
import { RelatedTools } from "@/components/related-tools";
import {
  BookOpen,
  Calculator,
  GraduationCap,
  TrendingUp,
  Globe,
  Award,
  Target,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SGPA to Percentage Calculator - Free Online Converter Tool 2024",
  description:
    "Convert SGPA to percentage instantly with our free online calculator. Supports 10.0, 4.0 (Pakistan HEC), 5.0, and 4.0 grading scales. Accurate conversion formulas for Indian, Pakistan, US, and international university grading systems. Get instant percentage from SGPA marks.",
  keywords: [
    "sgpa to percentage calculator",
    "free sgpa to percentage calculator",
    "online sgpa to percentage converter",
    "sgpa to percentage converter free",
    "sgpa to percentage",
    "convert sgpa to percentage",
    "convert sgpa to percentage online",
    "sgpa to percentage conversion",
    "sgpa calculator online free",
    "free online sgpa converter",
    "sgpa to percentage formula",
    "10 point sgpa calculator",
    "sgpa to marks converter",
    "semester grade point to percentage",
    "university sgpa calculator",
    "college sgpa to percentage",
    "sgpa to percentage india",
    "sgpa to percentage pakistan",
    "pakistan hec sgpa calculator",
    "ugc sgpa to percentage",
    "instant sgpa calculator",
    "accurate sgpa converter",
    "sgpa percentage calculator online",
    "calculate percentage from sgpa",
    "sgpa marks calculator",
    "grade point to percentage converter",
    "academic percentage calculator",
  ],
  openGraph: {
    title: "SGPA to Percentage Calculator - Free Online Converter Tool 2024",
    description:
      "Convert SGPA to percentage instantly with our free online calculator. Supports 10.0, 5.0, and 4.0 grading scales. Accurate conversion formulas for Indian, US, and international university grading systems.",
    type: "website",
    url: "https://grade-calculator-smoky.vercel.app/sgpa-to-percentage-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "SGPA to Percentage Calculator - Free Online Converter Tool",
    description:
      "Convert SGPA to percentage instantly. Supports multiple grading scales with accurate conversion formulas.",
  },
  alternates: {
    canonical: "/sgpa-to-percentage-calculator",
  },
};

export default function SgpaToPercentagePage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          Free Online SGPA to Percentage Calculator
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Convert your SGPA (Semester Grade Point Average) to percentage
          instantly using our free and accurate online calculator. Supports 10.0
          (India/UGC), 4.0 (Pakistan HEC), 5.0 (Germany), and 4.0 (US/Canada)
          point grading scales used worldwide.
        </p>
      </section>

      {/* Calculator Section */}
      <section>
        <SgpaToPercentageCalculator />
      </section>

      {/* Educational Content */}
      <section className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-primary/5 to-secondary/10 rounded-2xl px-4 py-6 sm:p-6 space-y-8">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Understanding SGPA to Percentage Conversion
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
              Learn how SGPA is converted to percentage and why it matters for
              your academic and professional career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg px-4 py-6 space-y-3 border">
              <h3 className="text-lg sm:text-xl font-semibold">
                What is SGPA?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                SGPA stands for Semester Grade Point Average. It measures your
                academic performance for a specific semester by calculating the
                weighted average of grade points obtained in all subjects during
                that semester, considering the credit hours of each course.
              </p>
            </div>

            <div className="bg-card rounded-lg px-4 py-6 space-y-3 border">
              <h3 className="text-lg sm:text-xl font-semibold">
                Why Convert SGPA to Percentage?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Many organizations, companies, and institutions require
                percentage marks rather than SGPA for job applications, higher
                education admissions, and scholarship evaluations. Converting
                SGPA to percentage helps standardize academic performance across
                different grading systems.
              </p>
            </div>

            <div className="bg-card rounded-lg px-4 py-6 space-y-3 border">
              <h3 className="text-lg sm:text-xl font-semibold">
                Different Grading Scales
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                The 10.0 scale is commonly used in India (UGC approved), 4.0
                scale in Pakistan (HEC) and US/Canada, and 5.0 scale in Germany.
                Each system has its own conversion formula. Our calculator
                supports all major grading systems including Pakistan's HEC
                fractionalized grading system for accurate conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Formulas Section */}
      <section className="max-w-5xl mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            SGPA to Percentage Conversion Formulas
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Standard formulas used for converting SGPA to percentage across
            different grading systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="border-2 border-primary/20 rounded-xl px-4 py-6 sm:p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold">10.0 Scale</h3>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                India/UGC
              </span>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">Formula:</p>
              <p className="font-mono text-base sm:text-lg font-bold">
                Percentage = (SGPA × 10) - 7.5
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Example:</strong>
              </p>
              <p className="text-muted-foreground">
                SGPA 8.5 = (8.5 × 10) - 7.5 ={" "}
                <strong className="text-primary">77.5%</strong>
              </p>
              <p className="text-muted-foreground">
                SGPA 9.0 = (9.0 × 10) - 7.5 ={" "}
                <strong className="text-primary">82.5%</strong>
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
                Percentage = SGPA × 25
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Example (HEC):</strong>
              </p>
              <p className="text-muted-foreground">
                SGPA 3.5 = 3.5 × 25 ={" "}
                <strong className="text-primary">87.5% (A)</strong>
              </p>
              <p className="text-muted-foreground">
                SGPA 2.8 = 2.8 × 25 ={" "}
                <strong className="text-primary">70% (B-)</strong>
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
                Percentage = SGPA × 25
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Example:</strong>
              </p>
              <p className="text-muted-foreground">
                SGPA 3.5 = 3.5 × 25 ={" "}
                <strong className="text-primary">87.5%</strong>
              </p>
              <p className="text-muted-foreground">
                SGPA 3.0 = 3.0 × 25 ={" "}
                <strong className="text-primary">75.0%</strong>
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
                Percentage = (SGPA × 20) - 7.5
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Example:</strong>
              </p>
              <p className="text-muted-foreground">
                SGPA 4.2 = (4.2 × 20) - 7.5 ={" "}
                <strong className="text-primary">76.5%</strong>
              </p>
              <p className="text-muted-foreground">
                SGPA 4.5 = (4.5 × 20) - 7.5 ={" "}
                <strong className="text-primary">82.5%</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Calculate SGPA */}
      <section className="max-w-4xl mx-auto space-y-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            How to Calculate SGPA?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding the process of calculating SGPA from your semester
            grades
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-xl px-4 py-6 sm:p-6 bg-card">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="h-6 w-6 text-primary hidden sm:block" />
              SGPA Calculation Method
            </h3>
            <div className="space-y-3">
              <p className="text-sm sm:text-base text-muted-foreground">
                <strong className="text-foreground">Step 1:</strong> Multiply
                the grade points earned in each subject by the credit hours for
                that subject.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                <strong className="text-foreground">Step 2:</strong> Add all the
                values from Step 1 to get total grade points.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                <strong className="text-foreground">Step 3:</strong> Add all the
                credit hours for all subjects.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                <strong className="text-foreground">Step 4:</strong> Divide
                total grade points by total credit hours.
              </p>
              <div className="bg-primary/5 rounded-lg p-4 mt-4">
                <p className="font-mono text-sm">
                  SGPA = (Σ Grade Points × Credits) ÷ (Σ Total Credits)
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-xl px-4 py-6 sm:p-6 bg-card">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary hidden sm:block" />
              Example Calculation
            </h3>
            <div className="space-y-3">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Subject</th>
                      <th className="text-center p-2">Grade</th>
                      <th className="text-center p-2">Credits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">Math</td>
                      <td className="text-center p-2">9</td>
                      <td className="text-center p-2">4</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Physics</td>
                      <td className="text-center p-2">8</td>
                      <td className="text-center p-2">3</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Chemistry</td>
                      <td className="text-center p-2">7</td>
                      <td className="text-center p-2">3</td>
                    </tr>
                    <tr className="font-semibold">
                      <td className="p-2">Total</td>
                      <td className="text-center p-2">-</td>
                      <td className="text-center p-2">10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mt-4">
                <p className="text-sm">
                  <strong>Calculation:</strong>
                  <br />
                  Total Grade Points = (9×4) + (8×3) + (7×3) = 81
                  <br />
                  Total Credits = 10
                  <br />
                  <strong className="text-primary text-lg">
                    SGPA = 81 ÷ 10 = 8.1
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-secondary/40 rounded-2xl px-4 py-6 sm:p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              How to Use the Free Online SGPA to Percentage Calculator
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-base sm:text-lg font-semibold">Enter SGPA</h3>
              <p className="text-sm text-muted-foreground">
                Input your SGPA value (0-10 for 10.0 scale) in the calculator
                field
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
                Choose the appropriate grading scale (10.0, 5.0, or 4.0 point)
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-base sm:text-lg font-semibold">Calculate</h3>
              <p className="text-sm text-muted-foreground">
                Click the Calculate button to get your instant percentage
                conversion
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
                Get your percentage with grade classification and conversion
                details
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Benefits of Using Our Free SGPA to Percentage Converter
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex gap-4 p-4 bg-card rounded-lg border">
            <Award className="h-8 w-8 text-blue-600 flex-shrink-0 hidden sm:block" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Accurate Conversions
              </h3>
              <p className="text-sm text-muted-foreground">
                Uses standard UGC-approved and internationally recognized
                conversion formulas
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-card rounded-lg border">
            <Calculator className="h-8 w-8 text-green-600 flex-shrink-0 hidden sm:block" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Instant Results
              </h3>
              <p className="text-sm text-muted-foreground">
                Get immediate percentage calculations with automatic updates as
                you type
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-card rounded-lg border">
            <Globe className="h-8 w-8 text-purple-600 flex-shrink-0 hidden sm:block" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Multiple Scales
              </h3>
              <p className="text-sm text-muted-foreground">
                Supports 10.0, 5.0, and 4.0 point scales for different countries
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-card rounded-lg border">
            <BookOpen className="h-8 w-8 text-orange-600 flex-shrink-0 hidden sm:block" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Grade Classification
              </h3>
              <p className="text-sm text-muted-foreground">
                Automatically shows your grade classification based on
                percentage
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-card rounded-lg border">
            <GraduationCap className="h-8 w-8 text-red-600 flex-shrink-0 hidden sm:block" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Free & Unlimited
              </h3>
              <p className="text-sm text-muted-foreground">
                100% free with no registration required, use it unlimited times
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-card rounded-lg border">
            <CheckCircle className="h-8 w-8 text-teal-600 flex-shrink-0 hidden sm:block" />
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
      </section>

      {/* SGPA vs CGPA Section */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl px-2 py-6 md:p-6 space-y-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              SGPA vs CGPA: What's the Difference?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg px-4 py-6 sm:p-6 border">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white/90">
                SGPA (Semester Grade Point Average)
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Measures academic performance for a single semester
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Calculated at the end of each semester
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Varies from semester to semester
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Used to track semester-specific performance
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg px-4 py-6 sm:p-6 border">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white/90">
                CGPA (Cumulative Grade Point Average)
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Measures overall academic performance across all semesters
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Calculated at the end of the academic program
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Cumulative average of all SGPAs
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Used for final degree classification and placements
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-lg px-4 py-6 sm:p-6 mt-6 border">
            <h4 className="text-base sm:text-lg font-semibold mb-3 text-white/90">
              Relationship Between SGPA and CGPA:
            </h4>
            <p className="text-sm sm:text-base text-muted-foreground mb-3">
              CGPA is calculated by taking the average of all SGPA values
              obtained across all semesters. For example, if you have completed
              6 semesters, your CGPA would be:
            </p>
            <div className="bg-primary/5 rounded-lg p-4">
              <p className="font-mono text-sm">
                CGPA = (SGPA₁ + SGPA₂ + SGPA₃ + SGPA₄ + SGPA₅ + SGPA₆) ÷ 6
              </p>
            </div>
          </div>
        </div>
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
                How to convert SGPA to percentage?
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                For the 10.0 grading scale (most common in India), use the
                formula: Percentage = (SGPA × 10) - 7.5. For example, if your
                SGPA is 8.5, your percentage would be (8.5 × 10) - 7.5 = 77.5%.
                Our calculator automatically applies the correct formula based
                on your selected grading scale.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                Is the SGPA to percentage conversion formula the same for all
                universities?
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                While most Indian universities follow the UGC-approved formula
                (SGPA × 10) - 7.5, some institutions may have their own specific
                conversion methods. Always check with your university's official
                documentation for their exact conversion formula. Our calculator
                uses the most widely accepted formulas.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                What is the difference between SGPA and CGPA?
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                SGPA (Semester Grade Point Average) measures your performance
                for a single semester, while CGPA (Cumulative Grade Point
                Average) is the average of all your SGPA values across all
                semesters. SGPA is calculated at the end of each semester,
                whereas CGPA represents your overall academic performance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                Can I use SGPA percentage for job applications?
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Yes, many companies and recruiters require percentage marks for
                initial screening. However, you should always provide your
                official transcript or mark sheet issued by your university, as
                it contains the authentic conversion. Use our calculator for
                quick reference and planning purposes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                Which grading scale should I select?
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Select the 10.0 scale if you're from an Indian university (UGC
                system), 5.0 scale for German institutions, and 4.0 scale for
                US/Canadian universities. Check your grade card or university
                handbook to confirm your institution's grading scale.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                What is a good SGPA score?
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                On a 10.0 scale: 8.0+ is considered excellent, 7.0-7.9 is very
                good, 6.0-6.9 is good, and 5.0-5.9 is average. An SGPA of 9.0 or
                above (which converts to 82.5%+) is outstanding and opens doors
                to top placements and higher education opportunities.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tips to Improve SGPA */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl px-4 py-6 sm:p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Tips to Improve Your SGPA
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Practical strategies to boost your semester grades and academic
              performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg px-4 py-6 sm:p-6 border">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Regular Study Schedule
              </h3>
              <p className="text-sm text-muted-foreground">
                Create a consistent study routine. Allocate specific time slots
                for each subject and stick to them. Regular study habits prevent
                last-minute cramming and improve retention.
              </p>
            </div>

            <div className="bg-card rounded-lg px-4 py-6 sm:p-6 border">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Attend All Classes
              </h3>
              <p className="text-sm text-muted-foreground">
                Regular attendance is crucial. Professors often explain complex
                topics in ways not found in textbooks. Many universities also
                have minimum attendance requirements.
              </p>
            </div>

            <div className="bg-card rounded-lg px-4 py-6 sm:p-6 border">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Focus on Understanding
              </h3>
              <p className="text-sm text-muted-foreground">
                Don't just memorize—understand concepts deeply. This helps in
                solving complex problems and remembering information for longer
                periods.
              </p>
            </div>

            <div className="bg-card rounded-lg px-4 py-6 sm:p-6 border">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Complete Assignments On Time
              </h3>
              <p className="text-sm text-muted-foreground">
                Assignments contribute to internal marks. Complete them on time
                with quality work to secure good internal assessment grades.
              </p>
            </div>

            <div className="bg-card rounded-lg px-4 py-6 sm:p-6 border">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">5</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Practice Previous Papers
              </h3>
              <p className="text-sm text-muted-foreground">
                Solve previous year question papers to understand exam patterns
                and frequently asked questions. This improves time management
                during exams.
              </p>
            </div>

            <div className="bg-card rounded-lg px-4 py-6 sm:p-6 border">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">6</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Seek Help When Needed
              </h3>
              <p className="text-sm text-muted-foreground">
                Don't hesitate to ask professors or seniors for help. Join study
                groups to learn from peers and clarify doubts collaboratively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-2xl px-4 py-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-100">
            Important Notes
          </h2>
          <ul className="space-y-3 text-sm sm:text-base text-amber-800 dark:text-amber-200">
            <li className="flex gap-2">
              <span className="font-bold">•</span>
              <span>
                The conversion formula (SGPA × 10) - 7.5 is the most commonly
                used formula approved by UGC (University Grants Commission) for
                the 10.0 grading scale in India.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">•</span>
              <span>
                Some universities may use different conversion formulas. Always
                verify with your institution's official conversion chart or
                academic regulations.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">•</span>
              <span>
                For official transcripts and applications, always use the
                percentage mentioned on your official mark sheet issued by your
                university.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">•</span>
              <span>
                This calculator provides approximate conversions for quick
                reference. For precise requirements and official documentation,
                consult your academic office or registrar.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">•</span>
              <span>
                SGPA is semester-specific. To calculate your overall academic
                performance across all semesters, you need to calculate CGPA
                (Cumulative Grade Point Average).
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Related Tools Section */}
      <RelatedTools
        tools={[
          {
            title: "Percentage to SGPA",
            description: "Convert percentage marks to semester GPA.",
            href: "/percentage-to-sgpa-calculator",
            icon: "percent",
          },
          {
            title: "SGPA to CGPA",
            description: "Convert semester GPA to cumulative CGPA across all semesters.",
            href: "/sgpa-to-cgpa-calculator",
            icon: "calculator",
          },
          {
            title: "CGPA to Percentage",
            description: "Convert cumulative CGPA to percentage.",
            href: "/cgpa-to-percentage-calculator",
            icon: "percent",
          },
          {
            title: "CGPA Calculator",
            description: "Calculate cumulative CGPA from multiple semester GPAs.",
            href: "/cgpa-calculator",
            icon: "graduation",
          },
        ]}
      />
    </div>
  );
}
