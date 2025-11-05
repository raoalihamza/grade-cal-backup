import Link from "next/link";
import {
  ArrowLeftRight,
  TrendingUp,
  RefreshCw,
  ArrowRightCircle,
  CheckCircle,
  Calculator as CalculatorIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CGPA Converters - Free CGPA to Percentage & Percentage to CGPA Calculator",
  description:
    "Free CGPA conversion tools for students. Convert percentage to CGPA, CGPA to percentage, and SGPA to CGPA instantly. Supports 10.0, 5.0, 4.0 grading scales and Pakistan HEC system. Essential for university admissions and academic records.",
  keywords: [
    "CGPA converter",
    "percentage to CGPA",
    "CGPA to percentage",
    "SGPA to CGPA",
    "CGPA calculator",
    "percentage to CGPA converter",
    "online CGPA converter",
    "10 point CGPA scale",
    "4 point CGPA scale",
    "Pakistan HEC CGPA",
    "Indian CGPA system",
    "CGPA conversion formula",
    "marks to CGPA",
    "CGPA percentage calculator",
  ],
  openGraph: {
    title:
      "CGPA Converters - Free CGPA to Percentage & Percentage to CGPA Calculator",
    description:
      "Convert between CGPA and percentage marks instantly. Support for multiple grading scales and SGPA to CGPA conversion.",
    type: "website",
  },
  alternates: {
    canonical: "/cgpa-converters",
  },
};

const cgpaConverterTools = [
  {
    title: "Percentage to CGPA Converter",
    description:
      "Convert percentage marks to CGPA instantly with support for 10.0, 4.0, and 5.0 grading scales. Perfect for university admissions, scholarship applications, and international university requirements. Uses standard conversion formulas approved by educational boards.",
    icon: ArrowLeftRight,
    href: "/percentage-to-cgpa-calculator",
    color: "text-cyan-600",
    gradient: "bg-gradient-to-br from-cyan-400 to-blue-500",
    features: [
      "Multiple grading scales (10.0, 5.0, 4.0)",
      "Instant percentage to CGPA conversion",
      "Automatic grade classification",
      "Board-approved formulas",
      "Admission-ready results",
    ],
  },
  {
    title: "CGPA to Percentage Converter",
    description:
      "Convert CGPA to percentage marks instantly with accurate formulas for 10.0, 5.0, 4.0, and Pakistan HEC grading scales. Essential for job applications, university admissions, and transcript conversions. Get precise percentage equivalents for your CGPA.",
    icon: TrendingUp,
    href: "/cgpa-to-percentage-calculator",
    color: "text-violet-600",
    gradient: "bg-gradient-to-br from-violet-400 to-purple-500",
    features: [
      "Multiple scale support (10.0, 5.0, 4.0, HEC)",
      "UGC-approved conversion formulas",
      "Instant CGPA to percentage",
      "Grade classification",
      "Job application ready",
    ],
    isNew: true,
  },
  {
    title: "SGPA to CGPA Calculator",
    description:
      "Convert Semester Grade Point Average (SGPA) to Cumulative Grade Point Average (CGPA) with support for 4.0, 5.0, and 10.0 point scales. Calculate overall academic performance from individual semester grades. Essential tool for university students worldwide.",
    icon: RefreshCw,
    href: "/sgpa-to-cgpa-calculator",
    color: "text-amber-600",
    gradient: "bg-gradient-to-br from-amber-400 to-orange-500",
    features: [
      "Semester-based CGPA calculation",
      "Multiple grading scales",
      "Weighted semester averages",
      "Credit hour support",
      "Academic progress tracking",
    ],
  },
];

export default function CGPAConvertersPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          Free CGPA Converter Tools
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Convert between CGPA and percentage marks instantly with our
          comprehensive CGPA converter tools. Support for multiple grading
          scales (10.0, 5.0, 4.0, HEC) and SGPA to CGPA conversion. Essential
          for university admissions, job applications, and academic transcript
          conversions.
        </p>
      </section>

      {/* What are CGPA Converters Section */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          What are CGPA Converters?
        </h2>
        <Card className="px-4 py-6 sm:p-6">
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-4">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              <strong>CGPA Converters</strong> are essential academic tools that
              help students convert between different grading systems. CGPA
              (Cumulative Grade Point Average) is the primary grading metric in
              many countries including India, Pakistan, Bangladesh, Middle East,
              and parts of Europe. However, many applications require percentage
              marks, making conversion tools absolutely necessary.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Our suite includes three powerful converters:{" "}
              <strong>Percentage to CGPA Converter</strong> for admission
              applications, <strong>CGPA to Percentage Converter</strong> for
              job applications and transcript conversions, and
              <strong>SGPA to CGPA Calculator</strong> for calculating
              cumulative performance from semester grades. Each tool uses
              standardized conversion formulas approved by educational boards
              and universities.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Whether you're applying to universities abroad, converting grades
              for job applications, or tracking academic progress, these CGPA
              converters provide instant, accurate results across all major
              grading scales.
            </p>
          </div>
        </Card>
      </section>

      {/* Tools Grid Section */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
          CGPA Conversion Tools
        </h2>
        <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
          {cgpaConverterTools.map((tool) => (
            <Card
              key={tool.title}
              className="group relative overflow-hidden border-2 hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col pb-4"
            >
              <div
                className={`absolute inset-0 ${tool.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <CardHeader className="relative pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1">
                    <CardTitle className="text-base sm:text-lg">
                      {tool.title}
                    </CardTitle>
                  </div>
                  {tool.isNew && (
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-2.5 py-0.5 text-xs font-medium text-white">
                      New
                    </span>
                  )}
                </div>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  {tool.description}
                </CardDescription>
                <div className="pt-4">
                  <ul className="space-y-2">
                    {tool.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardHeader>

              <CardFooter className="relative mt-auto pt-4">
                <Button
                  asChild
                  className={`w-full ${tool.gradient} text-white hover:opacity-90 transition-opacity`}
                >
                  <Link href={tool.href}>
                    Convert Now <ArrowRightCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CGPA Conversion Formulas Section */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          CGPA Conversion Formulas
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-4">
              Percentage to CGPA
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2 text-xs sm:text-sm">
                  10.0 Scale (India, Pakistan):
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-xs sm:text-sm">
                  CGPA = Percentage ÷ 9.5
                </div>
              </div>
              <div>
                <p className="font-medium mb-2 text-xs sm:text-sm">
                  4.0 Scale (USA, Canada):
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-xs sm:text-sm">
                  CGPA = (Percentage × 4) ÷ 100
                </div>
              </div>
              <div>
                <p className="font-medium mb-2 text-xs sm:text-sm">
                  5.0 Scale:
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-xs sm:text-sm">
                  CGPA = (Percentage × 5) ÷ 100
                </div>
              </div>
            </div>
          </Card>

          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-4">
              CGPA to Percentage
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2 text-xs sm:text-sm">
                  10.0 Scale (India, Pakistan):
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-xs sm:text-sm">
                  Percentage = CGPA × 9.5
                </div>
              </div>
              <div>
                <p className="font-medium mb-2 text-xs sm:text-sm">
                  4.0 Scale (USA, Canada):
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-xs sm:text-sm">
                  Percentage = (CGPA × 100) ÷ 4
                </div>
              </div>
              <div>
                <p className="font-medium mb-2 text-xs sm:text-sm">
                  Pakistan HEC Scale:
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-xs sm:text-sm">
                  Percentage = (CGPA - 0.5) × 10
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Why Use CGPA Converters Section */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          Why Use CGPA Converters?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              University Admissions
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Many universities, especially international institutions, require
              percentage marks or specific GPA scales for admissions. Convert
              your CGPA to meet application requirements for undergraduate,
              graduate, and doctoral programs worldwide.
            </p>
          </Card>

          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Job Applications
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Employers often request percentage marks or specific GPA formats.
              Converting CGPA to percentage ensures your academic credentials
              are presented in the required format for job applications,
              competitive exams, and recruitment processes.
            </p>
          </Card>

          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Scholarship Applications
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Scholarship programs have specific GPA or percentage requirements.
              Use CGPA converters to determine eligibility, prepare
              applications, and present academic performance in the format
              required by scholarship committees and funding organizations.
            </p>
          </Card>

          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Academic Progress Tracking
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Track your academic performance across different grading systems.
              Convert SGPA to CGPA to monitor cumulative progress, set academic
              goals, and ensure you're maintaining required standards for
              graduation and academic honors.
            </p>
          </Card>
        </div>
      </section>

      {/* Grading Scales Comparison */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          CGPA Grading Scales Worldwide
        </h2>
        <Card className="px-4 py-6 sm:p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left px-2 py-4 font-semibold text-sm sm:text-base">
                    Scale
                  </th>
                  <th className="text-left px-2 py-4 font-semibold text-sm sm:text-base">
                    Countries/Regions
                  </th>
                  <th className="text-left px-2 py-4 font-semibold text-sm sm:text-base">
                    Grade Range
                  </th>
                  <th className="text-left px-2 py-4 font-semibold text-sm sm:text-base">
                    Percentage Equiv.
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">
                    10.0 Scale
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    India, Pakistan, Bangladesh
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    0.0 - 10.0
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    0% - 95%
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">
                    4.0 Scale
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    USA, Canada, Philippines
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    0.0 - 4.0
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    0% - 100%
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">
                    5.0 Scale
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Germany, Some EU countries
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    1.0 - 5.0
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    0% - 100%
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">
                    HEC Scale
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Pakistan (HEC Standard)
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    0.0 - 4.0
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    0% - 100%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Common Use Cases */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          Common CGPA Conversion Scenarios
        </h2>
        <Card className="px-4 py-6 sm:p-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                International University Applications
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Converting CGPA to percentage or 4.0 scale for applications to
                universities in USA, UK, Canada, Australia, and Europe. Many
                international admissions offices require specific GPA formats
                for evaluation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                Graduate School Admissions
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Master's and PhD programs often have minimum CGPA or percentage
                requirements. Use converters to check eligibility and prepare
                application materials in the required format for graduate
                admissions committees.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                Transcript Evaluations
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Educational credential evaluation services require standardized
                formats. Convert CGPA to percentage or other scales for WES,
                ECE, IQAS, and other transcript evaluation agencies used in visa
                and immigration processes.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl px-4 py-6 sm:p-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Convert Your CGPA Now
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get instant, accurate CGPA conversions with support for all major
          grading scales. Free to use, no registration required.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
          >
            <Link href="/percentage-to-cgpa-calculator">
              Percentage to CGPA
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/cgpa-to-percentage-calculator">
              CGPA to Percentage
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
