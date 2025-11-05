import { Metadata } from "next";
import { CGPACalculator } from "@/components/calculators/cgpa-calculator/cgpa-calculator";
import { RelatedTools } from "@/components/related-tools";
import {
  Calculator,
  BookOpen,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  GraduationCap,
  Globe,
  Target,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CGPA Calculator - Free Cumulative GPA Calculator Online | Calculate CGPA Instantly",
  description:
    "Calculate your Cumulative GPA (CGPA) instantly with our free online CGPA calculator. Supports 45+ countries & multiple grading scales (4.0, 5.0, 7.0, 10.0, 20.0). Get CGPA to percentage conversion, semester breakdown, and grade classification. Trusted by students worldwide in India, US, UK, Canada, Australia & more.",
  keywords: [
    "CGPA calculator",
    "cumulative GPA calculator",
    "calculate CGPA online",
    "free CGPA calculator",
    "CGPA to percentage",
    "semester GPA calculator",
    "college CGPA calculator",
    "university GPA calculator",
    "4.0 scale CGPA",
    "10.0 scale CGPA",
    "India CGPA calculator",
    "US GPA calculator",
    "UK CGPA calculator",
    "Canada GPA calculator",
    "Australia CGPA calculator",
    "Pakistan CGPA calculator",
    "academic GPA calculator",
    "cumulative grade point average",
    "CGPA calculation formula",
    "how to calculate CGPA",
    "semester credits calculator",
    "weighted GPA calculator",
    "grade point calculator",
    "student GPA tool",
    "international GPA calculator",
    "ECTS credits calculator"
  ],
  openGraph: {
    title: "CGPA Calculator - Calculate Cumulative GPA Online Free | 45+ Countries",
    description:
      "Free CGPA calculator supporting 45+ countries and multiple grading scales. Calculate cumulative GPA, convert to percentage, and track semester performance instantly.",
    type: "website",
    url: "https://grade-calculator-smoky.vercel.app/cgpa-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "CGPA Calculator - Calculate Cumulative GPA Online Free",
    description:
      "Free CGPA calculator supporting 45+ countries and grading scales. Calculate cumulative GPA instantly with semester breakdown.",
  },
  alternates: {
    canonical: "/cgpa-calculator",
  },
};

export default function CGPACalculatorPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="text-center space-y-4 mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          CGPA Calculator - Cumulative GPA Calculator
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Calculate your Cumulative Grade Point Average (CGPA) from semester
          GPAs (SGPA values) with our free online calculator. Supports +
          countries, multiple grading scales (4.0, 5.0, 7.0, 10.0), and provides
          detailed semester breakdowns with percentage conversion. Perfect for
          international students tracking overall degree performance.
        </p>
      </section>

      {/* Calculator Section */}
      <section className="max-w-4xl mx-auto">
        <CGPACalculator />
      </section>

      {/* What is CGPA Section */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-primary hidden sm:block" />
              What is CGPA (Cumulative Grade Point Average)?
            </CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none pb-4">
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              <strong>CGPA stands for Cumulative Grade Point Average</strong>,
              which is a comprehensive measure of a student's overall academic
              performance across all semesters or years of study. Unlike SGPA
              (Semester Grade Point Average), which measures performance in a
              single semester, CGPA represents the average of all semester GPAs
              weighted by their respective credit hours.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              CGPA is widely used in educational institutions worldwide,
              including universities in India, the United States, Canada,
              Australia, Singapore, Pakistan, Bangladesh, Malaysia, and many
              other countries. It serves as a standardized metric for admissions and academic evaluation. For course-level GPA calculations in US and Canadian systems, check our{" "}
              <Link
                href="/gpa-calculator"
                className="text-blue-500 hover:text-blue-600 underline font-medium"
              >
                GPA calculator
              </Link>
              . CGPA serves as a standardized metric for:
            </p>
            <ul className="text-sm sm:text-base text-muted-foreground list-disc pl-6 space-y-2">
              <li>Academic performance evaluation and transcript reporting</li>
              <li>University admissions and transfer applications</li>
              <li>Scholarship and financial aid eligibility</li>
              <li>Graduate school applications (MS, PhD, MBA, etc.)</li>
              <li>Job recruitment and career opportunities</li>
              <li>Academic standing and honors classification</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* How to Calculate CGPA Section */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <Calculator className="h-8 w-8 text-primary hidden sm:block" />
              How to Calculate CGPA - Step by Step Formula
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-950/30 px-4 py-6 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                CGPA Calculation Formula:
              </h3>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-md font-mono text-center text-base sm:text-lg">
                CGPA = (Sum of (GPA × Credits) for all semesters) ÷ (Total
                Credits)
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">
                Step-by-Step CGPA Calculation:
              </h3>

              <div className="grid gap-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">
                      Collect Semester Data
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Gather your GPA (or SGPA) and credit hours for each
                      semester from your academic transcript.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">
                      Multiply GPA by Credits
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      For each semester, multiply the semester GPA by the number
                      of credits: (Semester GPA × Credits)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">
                      Sum Weighted GPAs
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Add all the weighted GPAs together to get the total
                      weighted GPA across all semesters.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">
                      Calculate Total Credits
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Add up all the credit hours from all semesters to get the
                      total credits completed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">
                      Divide to Get CGPA
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Divide the total weighted GPA by total credits: CGPA =
                      Total Weighted GPA ÷ Total Credits
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example Calculation */}
            <div className="bg-green-50 dark:bg-green-950/30 px-4 py-6 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Example CGPA Calculation:
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green-200 dark:border-green-800 text-sm sm:text-base">
                      <th className="p-2">Semester</th>
                      <th className="p-2">GPA</th>
                      <th className="p-2">Credits</th>
                      <th className="p-2">Weighted GPA (GPA × Credits)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-green-100 dark:border-green-900 text-sm sm:text-base">
                      <td className="p-2">Semester 1</td>
                      <td className="p-2">3.5</td>
                      <td className="p-2">18</td>
                      <td className="p-2">63.0</td>
                    </tr>
                    <tr className="border-b border-green-100 dark:border-green-900 text-sm sm:text-base">
                      <td className="p-2">Semester 2</td>
                      <td className="p-2">3.8</td>
                      <td className="p-2">20</td>
                      <td className="p-2">76.0</td>
                    </tr>
                    <tr className="border-b border-green-100 dark:border-green-900 text-sm sm:text-base">
                      <td className="p-2">Semester 3</td>
                      <td className="p-2">3.6</td>
                      <td className="p-2">22</td>
                      <td className="p-2">79.2</td>
                    </tr>
                    <tr className="font-bold bg-green-100 dark:bg-green-900 text-sm sm:text-base">
                      <td className="p-2">Total</td>
                      <td className="p-2">-</td>
                      <td className="p-2">60</td>
                      <td className="p-2">218.2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-white dark:bg-gray-900 rounded-md">
                <p className="text-base sm:text-lg">
                  <strong>CGPA = 218.2 ÷ 60 = 3.64</strong> (on a 4.0 scale)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CGPA to Percentage Conversion */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <TrendingUp className="h-8 w-8 text-primary hidden sm:block" />
              CGPA to Percentage Conversion
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pb-4">
            <p className="text-base md:text-lg text-muted-foreground">
              Converting CGPA to percentage varies by country and institution.
              Here are the most common conversion formulas:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-lg sm:text-xl">
                  🇮🇳 India (10.0 Scale)
                </h4>
                <p className="font-mono bg-white dark:bg-gray-900 p-2 rounded">
                  Percentage = CGPA × 9.5
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  UGC-approved formula used by most Indian universities
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-lg sm:text-xl">
                  🇺🇸 United States (4.0 Scale)
                </h4>
                <p className="font-mono bg-white dark:bg-gray-900 p-2 rounded">
                  Percentage = (CGPA ÷ 4.0) × 100
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Standard conversion for 4.0 scale GPA systems
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-lg sm:text-xl">
                  🇦🇺 Australia (7.0 Scale)
                </h4>
                <p className="font-mono bg-white dark:bg-gray-900 p-2 rounded">
                  Percentage = (CGPA ÷ 7.0) × 100
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Used by Australian universities with 7-point scale
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-lg sm:text-xl">
                  🇸🇬 Singapore (5.0 Scale)
                </h4>
                <p className="font-mono bg-white dark:bg-gray-900 p-2 rounded">
                  Percentage = (CGPA ÷ 5.0) × 100
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Common in Singapore and some Asian universities
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg flex gap-3">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5 hidden sm:block" />
              <div>
                <p className="font-semibold text-yellow-900 dark:text-yellow-100">
                  Important Note:
                </p>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm sm:text-base">
                  Always verify the conversion formula with your specific
                  university or institution, as some may use different methods
                  or have their own standardized conversion tables.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Grading Scales by Country */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <Globe className="h-8 w-8 text-primary hidden sm:block" />
              CGPA Grading Scales by Country (45+ Countries)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="p-3 font-semibold">Country</th>
                    <th className="p-3 font-semibold">Grading Scale</th>
                    <th className="p-3 font-semibold">
                      Typical Credits/Semester
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">🇮🇳 India</td>
                    <td className="p-3">10.0, 5.0, 4.0</td>
                    <td className="p-3">22-24 credits</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇺🇸 United States</td>
                    <td className="p-3">4.0, 5.0</td>
                    <td className="p-3">15-16 credits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇬🇧 United Kingdom</td>
                    <td className="p-3">4.0, 5.0</td>
                    <td className="p-3">30 credits (60/year)</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇨🇦 Canada</td>
                    <td className="p-3">4.0, 4.3, 5.0</td>
                    <td className="p-3">15 credits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇦🇺 Australia</td>
                    <td className="p-3">7.0, 4.0</td>
                    <td className="p-3">24 credits</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇵🇰 Pakistan</td>
                    <td className="p-3">4.0, 5.0</td>
                    <td className="p-3">18-20 credits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇩🇪 Germany</td>
                    <td className="p-3">5.0, 4.0</td>
                    <td className="p-3">28-30 ECTS</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇸🇬 Singapore</td>
                    <td className="p-3">5.0, 4.0</td>
                    <td className="p-3">18-20 credits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇲🇾 Malaysia</td>
                    <td className="p-3">4.0, 5.0</td>
                    <td className="p-3">18-19 credits</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇵🇭 Philippines</td>
                    <td className="p-3">5.0, 4.0, 1.0</td>
                    <td className="p-3">21-22 credits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇫🇷 France</td>
                    <td className="p-3">20.0, 4.0</td>
                    <td className="p-3">28-30 ECTS</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇳🇱 Netherlands</td>
                    <td className="p-3">10.0, 4.0</td>
                    <td className="p-3">28-30 ECTS</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇸🇦 Saudi Arabia</td>
                    <td className="p-3">5.0, 4.0</td>
                    <td className="p-3">17-18 credits</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇦🇪 UAE</td>
                    <td className="p-3">4.0, 5.0</td>
                    <td className="p-3">15-18 credits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇨🇳 China</td>
                    <td className="p-3">4.0, 5.0</td>
                    <td className="p-3">20-25 credits</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇯🇵 Japan</td>
                    <td className="p-3">4.0, 5.0</td>
                    <td className="p-3">20-22 credits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇰🇷 South Korea</td>
                    <td className="p-3">4.5, 4.3, 4.0</td>
                    <td className="p-3">18-21 credits</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇧🇩 Bangladesh</td>
                    <td className="p-3">4.0, 5.0</td>
                    <td className="p-3">15-18 credits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇱🇰 Sri Lanka</td>
                    <td className="p-3">4.0, 4.2</td>
                    <td className="p-3">15-18 credits</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇳🇵 Nepal</td>
                    <td className="p-3">4.0, 5.0</td>
                    <td className="p-3">18-20 credits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇹🇭 Thailand</td>
                    <td className="p-3">4.0</td>
                    <td className="p-3">18-21 credits</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇻🇳 Vietnam</td>
                    <td className="p-3">4.0, 10.0</td>
                    <td className="p-3">18-22 credits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇮🇩 Indonesia</td>
                    <td className="p-3">4.0</td>
                    <td className="p-3">20-24 credits</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇹🇷 Turkey</td>
                    <td className="p-3">4.0</td>
                    <td className="p-3">30 ECTS</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇪🇬 Egypt</td>
                    <td className="p-3">4.0, 5.0</td>
                    <td className="p-3">18-20 credits</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇳🇬 Nigeria</td>
                    <td className="p-3">5.0, 4.0</td>
                    <td className="p-3">18-24 credits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇿🇦 South Africa</td>
                    <td className="p-3">4.0, 5.0</td>
                    <td className="p-3">30 credits (60/year)</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇰🇪 Kenya</td>
                    <td className="p-3">5.0, 4.0</td>
                    <td className="p-3">15-18 credits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇳🇿 New Zealand</td>
                    <td className="p-3">9.0, 4.0</td>
                    <td className="p-3">30 credits (60/year)</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇮🇪 Ireland</td>
                    <td className="p-3">4.0</td>
                    <td className="p-3">30 ECTS</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇪🇸 Spain</td>
                    <td className="p-3">10.0, 4.0</td>
                    <td className="p-3">30 ECTS</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇮🇹 Italy</td>
                    <td className="p-3">30.0, 4.0</td>
                    <td className="p-3">30 ECTS</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇸🇪 Sweden</td>
                    <td className="p-3">VG/G, 4.0</td>
                    <td className="p-3">30 ECTS</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇩🇰 Denmark</td>
                    <td className="p-3">12.0, 4.0</td>
                    <td className="p-3">30 ECTS</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇳🇴 Norway</td>
                    <td className="p-3">A-F, 4.0</td>
                    <td className="p-3">30 ECTS</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇨🇭 Switzerland</td>
                    <td className="p-3">6.0, 4.0</td>
                    <td className="p-3">30 ECTS</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇧🇷 Brazil</td>
                    <td className="p-3">10.0, 4.0</td>
                    <td className="p-3">20-24 credits</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇲🇽 Mexico</td>
                    <td className="p-3">10.0, 4.0</td>
                    <td className="p-3">18-24 credits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇦🇷 Argentina</td>
                    <td className="p-3">10.0, 4.0</td>
                    <td className="p-3">20-24 credits</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇨🇱 Chile</td>
                    <td className="p-3">7.0, 4.0</td>
                    <td className="p-3">18-24 credits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇷🇺 Russia</td>
                    <td className="p-3">5.0, 4.0</td>
                    <td className="p-3">30 credits</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇵🇱 Poland</td>
                    <td className="p-3">5.0, 4.0</td>
                    <td className="p-3">30 ECTS</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇭🇰 Hong Kong</td>
                    <td className="p-3">4.0, 4.3</td>
                    <td className="p-3">15 credits</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-3">🇹🇼 Taiwan</td>
                    <td className="p-3">4.0, 4.3</td>
                    <td className="p-3">18-20 credits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">🇮🇱 Israel</td>
                    <td className="p-3">100, 4.0</td>
                    <td className="p-3">15-18 credits</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              * ECTS (European Credit Transfer System) is used across European
              universities
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Grade Classification */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary hidden sm:block" />
              CGPA Grade Classification
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pb-4">
            <p className="text-base sm:text-lg text-muted-foreground">
              Understanding your CGPA classification helps you assess your
              academic standing:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {/* 10.0 Scale */}
              <div className="space-y-3">
                <h4 className="font-semibold text-lg sm:text-xl">
                  10.0 Scale (India)
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950/30 rounded">
                    <span>9.0 - 10.0</span>
                    <span className="font-semibold">Outstanding</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                    <span>7.5 - 8.9</span>
                    <span className="font-semibold">First Class</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-yellow-50 dark:bg-yellow-950/30 rounded">
                    <span>6.0 - 7.4</span>
                    <span className="font-semibold">Second Class</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-orange-50 dark:bg-orange-950/30 rounded">
                    <span>5.0 - 5.9</span>
                    <span className="font-semibold">Pass Class</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-red-50 dark:bg-red-950/30 rounded">
                    <span>Below 5.0</span>
                    <span className="font-semibold">Fail</span>
                  </div>
                </div>
              </div>

              {/* 4.0 Scale */}
              <div className="space-y-3">
                <h4 className="font-semibold text-lg sm:text-xl">
                  4.0 Scale (US/Canada)
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950/30 rounded">
                    <span>3.7 - 4.0</span>
                    <span className="font-semibold">Summa Cum Laude (A)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                    <span>3.3 - 3.6</span>
                    <span className="font-semibold">Magna Cum Laude (B+)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-yellow-50 dark:bg-yellow-950/30 rounded">
                    <span>3.0 - 3.2</span>
                    <span className="font-semibold">Cum Laude (B)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-orange-50 dark:bg-orange-950/30 rounded">
                    <span>2.0 - 2.9</span>
                    <span className="font-semibold">Pass (C)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-red-50 dark:bg-red-950/30 rounded">
                    <span>Below 2.0</span>
                    <span className="font-semibold">Fail</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Why CGPA is Important */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className=" flex items-center gap-2">
              <Target className="h-8 w-8 text-primary hidden sm:block" />
              Why is CGPA Important?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pb-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">
                    University Admissions
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    CGPA is a primary criterion for admission to graduate
                    programs (MS, MBA, PhD) and competitive undergraduate
                    courses.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">
                    Scholarship Eligibility
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Many scholarships, grants, and financial aid programs have
                    minimum CGPA requirements for eligibility.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">
                    Job Recruitment
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Top employers often set CGPA cutoffs for campus placements
                    and job applications in various industries.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">
                    Academic Standing
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    CGPA determines your academic honors, dean's list, probation
                    status, and graduation with distinction.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">
                    International Applications
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    When applying to foreign universities, CGPA provides a
                    standardized measure for evaluating your academics.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">
                    Progress Tracking
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    CGPA helps you monitor your overall academic progress and
                    identify areas needing improvement.
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
            <CardTitle className="">Frequently Asked Questions (FAQ)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pb-4">
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                How is CGPA different from SGPA?
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                SGPA (Semester Grade Point Average) measures your performance in
                a single semester, while CGPA (Cumulative Grade Point Average)
                is the weighted average of all your semester GPAs throughout
                your entire course duration.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                Can I improve my CGPA?
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Yes! Focus on scoring higher in upcoming semesters. Since CGPA
                is weighted by credits, performing well in courses with more
                credits will have a greater positive impact on your cumulative
                GPA.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                What is a good CGPA?
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                On a 10.0 scale, 8.0+ is excellent, 7.0-7.9 is good, 6.0-6.9 is
                average. On a 4.0 scale, 3.5+ is excellent, 3.0-3.4 is good,
                2.5-2.9 is average. Requirements vary by institution and
                program.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                How do I convert CGPA to percentage?
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                The conversion formula varies by country and institution. In
                India (10.0 scale), the common formula is: Percentage = CGPA ×
                9.5. For 4.0 scale: Percentage = (CGPA ÷ 4.0) × 100.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                Does CGPA include failed subjects?
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Yes, failed subjects (with 0 or F grade) are included in CGPA
                calculation. If you retake and pass the course, most
                universities replace the failing grade, but policies vary by
                institution.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                What CGPA is required for graduate school?
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Minimum CGPA requirements vary by program and university.
                Generally, top graduate programs require 3.0-3.5+ (on 4.0 scale)
                or 7.5-8.0+ (on 10.0 scale). Check specific program requirements
                for accurate information.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                What is ECTS and how does it relate to CGPA?
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                ECTS (European Credit Transfer System) is the credit system used
                across European universities. Typically, 30 ECTS credits equal
                one semester. CGPA is calculated similarly using ECTS credits as
                weights in the formula.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">
                Can I calculate CGPA for different grading scales?
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Yes! Our calculator supports 45+ countries with various grading
                scales including 4.0, 5.0, 7.0, 10.0, 12.0, 20.0, and 30.0
                scales. Select your country and grading scale to get accurate
                calculations.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tips Section */}
      <section className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="">Tips to Maintain a High CGPA</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pb-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Attend All Classes Regularly
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Consistent attendance helps you stay updated with course
                      material and participate in discussions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Manage Time Effectively
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Create a study schedule that balances coursework,
                      assignments, and exam preparation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Focus on High-Credit Courses
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Courses with more credits have a bigger impact on your
                      CGPA, so prioritize them accordingly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Seek Help When Needed
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Don't hesitate to ask professors, join study groups, or
                      use tutoring services for difficult subjects.
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
                      Complete Assignments on Time
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Timely submission of quality assignments contributes
                      significantly to your semester grades.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Prepare Well for Exams
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Start exam preparation early, make notes, and practice
                      previous years' questions regularly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    7
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Track Your Progress
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Regularly calculate your CGPA to monitor progress and
                      identify areas needing improvement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold flex-shrink-0">
                    8
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Maintain Work-Life Balance
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Balance academics with exercise, hobbies, and rest to
                      maintain mental and physical well-being.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* SEO Content Section */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              About Our CGPA Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none pb-4 text-sm sm:text-base text-muted-foreground">
            <p>
              Our <strong>free online CGPA calculator</strong> is designed to
              help students worldwide calculate their Cumulative Grade Point
              Average with precision and ease. Whether you're a student in
              India, United States, Canada, Australia, Singapore, Pakistan,
              Bangladesh, Malaysia, Philippines, or any of the 45+ supported
              countries, our calculator handles multiple grading scales
              including 4.0, 5.0, 7.0, 10.0, 12.0, 20.0, and 30.0 point systems.
            </p>
            <p>
              The calculator provides instant{" "}
              <strong>CGPA to percentage conversion</strong>, detailed semester
              breakdowns, and grade classifications to help you understand your
              academic standing. With support for country-specific credit
              systems including ECTS (European Credit Transfer System) and
              traditional semester credits, you get accurate results tailored to
              your educational institution.
            </p>
            <p>
              We understand that calculating cumulative GPA can be confusing,
              especially when dealing with weighted averages and credit hours
              from different countries and grading systems. That's why our tool
              automatically handles all the complex calculations, providing you
              with immediate results and comprehensive insights into your
              academic performance.
            </p>
            <p>
              Use our <strong>cumulative GPA calculator</strong> for university
              applications, scholarship eligibility checks, academic planning,
              job applications, or simply to track your progress throughout your
              degree program. All calculations are saved locally in your browser
              for easy access and continuous tracking across semesters.
            </p>
            <p>
              Perfect for international students, our calculator supports
              universities from India (IITs, NITs, IIMs), United States (Ivy
              League, State Universities), UK (Oxford, Cambridge), Canada (U of
              T, UBC), Australia (Group of Eight), and many more prestigious
              institutions worldwide. Calculate your CGPA today and stay on top
              of your academic goals! Need to convert between percentage and CGPA? Use our{" "}
              <Link
                href="/percentage-to-cgpa-calculator"
                className="text-blue-500 hover:text-blue-600 underline font-medium"
              >
                percentage to CGPA converter
              </Link>{" "}
              or{" "}
              <Link
                href="/cgpa-to-percentage-calculator"
                className="text-blue-500 hover:text-blue-600 underline font-medium"
              >
                CGPA to percentage calculator
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Related Tools Section */}
      <RelatedTools
        tools={[
          {
            title: "GPA Calculator",
            description: "Calculate your term GPA from course letter grades on 4.0, 4.3, or 5.0 scales.",
            href: "/gpa-calculator",
            icon: "graduation",
          },
          {
            title: "Percentage to CGPA",
            description: "Convert your percentage marks to CGPA for multiple grading systems.",
            href: "/percentage-to-cgpa-calculator",
            icon: "percent",
          },
          {
            title: "CGPA to Percentage",
            description: "Convert CGPA to percentage for applications and transcripts.",
            href: "/cgpa-to-percentage-calculator",
            icon: "percent",
          },
          {
            title: "SGPA to CGPA",
            description: "Calculate cumulative CGPA from semester-wise SGPA values.",
            href: "/sgpa-to-cgpa-calculator",
            icon: "calculator",
          },
        ]}
      />
    </div>
  );
}
