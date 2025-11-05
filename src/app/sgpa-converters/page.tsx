import Link from "next/link";
import { TrendingDown, ArrowDownUp, ArrowRightCircle, CheckCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SGPA Converters - Free SGPA to Percentage & Percentage to SGPA Calculator",
  description: "Free SGPA conversion tools for students. Convert SGPA to percentage and percentage to SGPA instantly. Supports 10.0, 5.0, 4.0 scales and Pakistan HEC system. Essential for semester grade conversions and academic records.",
  keywords: [
    "SGPA converter",
    "SGPA to percentage",
    "percentage to SGPA",
    "semester GPA converter",
    "SGPA calculator",
    "SGPA to percentage calculator",
    "online SGPA converter",
    "10 point SGPA scale",
    "4 point SGPA scale",
    "semester grade converter",
    "SGPA conversion formula",
    "marks to SGPA",
    "SGPA percentage calculator"
  ],
  openGraph: {
    title: "SGPA Converters - Free SGPA to Percentage & Percentage to SGPA Calculator",
    description: "Convert between SGPA and percentage marks instantly. Support for multiple grading scales including 10.0, 5.0, 4.0, and HEC.",
    type: "website",
  },
  alternates: {
    canonical: "/sgpa-converters",
  },
};

const sgpaConverterTools = [
  {
    title: "SGPA to Percentage Calculator",
    description: "Convert SGPA (Semester Grade Point Average) to percentage marks instantly with accurate formulas for 10.0, 5.0, and 4.0 grading scales. Essential for job applications, academic evaluations, and standardizing semester grades. Uses UGC-approved conversion formulas.",
    icon: TrendingDown,
    href: "/sgpa-to-percentage-calculator",
    color: "text-rose-600",
    gradient: "bg-gradient-to-br from-rose-400 to-pink-500",
    features: [
      "UGC-approved conversion formulas",
      "Multiple scales (10.0, 5.0, 4.0)",
      "Instant SGPA to percentage",
      "Automatic grade classification",
      "Job application ready"
    ]
  },
  {
    title: "Percentage to SGPA Converter",
    description: "Convert percentage to SGPA (Semester Grade Point Average) instantly with support for 10.0, 5.0, 4.0, and Pakistan HEC scales. Perfect for semester grade conversions and academic records. Get accurate SGPA values from percentage marks.",
    icon: ArrowDownUp,
    href: "/percentage-to-sgpa-calculator",
    color: "text-sky-600",
    gradient: "bg-gradient-to-br from-sky-400 to-cyan-500",
    features: [
      "Semester GPA conversion",
      "Multiple scale support",
      "Instant calculation",
      "Grade classification",
      "Academic record ready"
    ],
    isNew: true
  }
];

export default function SGPAConvertersPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          Free SGPA Converter Tools
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Convert between SGPA and percentage marks instantly with our
          specialized SGPA converter tools. Support for multiple grading scales
          (10.0, 5.0, 4.0, HEC) and UGC-approved conversion formulas. Perfect
          for semester grade conversions, job applications, and academic
          evaluations.
        </p>
      </section>

      {/* What is SGPA Section */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">What is SGPA?</h2>
        <Card className="px-4 py-6 sm:p-6">
          <div className="flex items-start mb-6">
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                <strong>SGPA (Semester Grade Point Average)</strong> is a
                numerical representation of a student's academic performance
                during a single semester or academic term. It's calculated based
                on the grades obtained in all courses taken during that
                semester, weighted by credit hours.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                SGPA is widely used in universities across India, Pakistan,
                Bangladesh, and many other countries following the semester
                system. While CGPA represents overall performance across all
                semesters, SGPA focuses on a single term's academic achievement.
                Converting between SGPA and percentage is essential for various
                applications including job applications, higher education
                admissions, and scholarship eligibility.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Our <strong>SGPA to Percentage Calculator</strong> and{" "}
                <strong>Percentage to SGPA Converter</strong> use standardized
                formulas approved by educational boards like UGC (University
                Grants Commission) and HEC (Higher Education Commission) to
                ensure accurate, reliable conversions.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Tools Grid Section */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
          SGPA Conversion Tools
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {sgpaConverterTools.map((tool) => (
            <Card
              key={tool.title}
              className="group relative overflow-hidden border-2 hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col pb-4"
            >
              <div
                className={`absolute inset-0 ${tool.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <CardHeader className="relative pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <tool.icon className={`h-7 w-7 ${tool.color}`} />
                  <div className="flex-1">
                    <CardTitle className="text-base sm:text-lg">{tool.title}</CardTitle>
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

      {/* SGPA vs CGPA Section */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          SGPA vs CGPA: Understanding the Difference
        </h2>
        <Card className="px-4 py-6 sm:p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left px-2 py-4 font-semibold text-sm sm:text-base">Aspect</th>
                  <th className="text-left px-2 py-4 font-semibold text-sm sm:text-base">SGPA</th>
                  <th className="text-left px-2 py-4 font-semibold text-sm sm:text-base">CGPA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">Full Form</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Semester Grade Point Average
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Cumulative Grade Point Average
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">Scope</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Single semester only
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    All semesters combined
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">Calculation Period</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    End of each semester
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Continuous (updated each semester)
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">Purpose</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Track semester performance
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Overall degree performance
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">Used In</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Semester reports, progress tracking
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Final transcripts, admissions, jobs
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* SGPA Conversion Formulas */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          SGPA Conversion Formulas
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-4">SGPA to Percentage</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2 text-xs sm:text-sm">10.0 Scale (UGC Formula):</p>
                <div className="bg-muted p-3 rounded-md font-mono text-xs sm:text-sm">
                  Percentage = (SGPA - 0.75) × 10
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Commonly used in Indian universities
                </p>
              </div>
              <div>
                <p className="font-medium mb-2 text-xs sm:text-sm">Alternative 10.0 Scale:</p>
                <div className="bg-muted p-3 rounded-md font-mono text-xs sm:text-sm">
                  Percentage = SGPA × 9.5
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Used by some universities
                </p>
              </div>
              <div>
                <p className="font-medium mb-2 text-xs sm:text-sm">4.0 Scale:</p>
                <div className="bg-muted p-3 rounded-md font-mono text-xs sm:text-sm">
                  Percentage = (SGPA × 100) ÷ 4
                </div>
              </div>
            </div>
          </Card>

          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-4">Percentage to SGPA</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2 text-xs sm:text-sm">10.0 Scale (UGC Formula):</p>
                <div className="bg-muted p-3 rounded-md font-mono text-xs sm:text-sm">
                  SGPA = (Percentage ÷ 10) + 0.75
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  UGC-approved conversion
                </p>
              </div>
              <div>
                <p className="font-medium mb-2 text-xs sm:text-sm">Alternative 10.0 Scale:</p>
                <div className="bg-muted p-3 rounded-md font-mono text-xs sm:text-sm">
                  SGPA = Percentage ÷ 9.5
                </div>
              </div>
              <div>
                <p className="font-medium mb-2 text-xs sm:text-sm">4.0 Scale:</p>
                <div className="bg-muted p-3 rounded-md font-mono text-xs sm:text-sm">
                  SGPA = (Percentage × 4) ÷ 100
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Why Use SGPA Converters */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          Why Use SGPA Converters?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Job Applications
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Many employers request percentage marks rather than SGPA in job
              applications and recruitment forms. Converting your semester GPA
              to percentage ensures you can accurately represent your academic
              performance in the format employers expect and understand.
            </p>
          </Card>

          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Higher Education Applications
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Universities and colleges, especially for postgraduate programs,
              may require percentage equivalents of SGPA. Use our converters to
              prepare application materials, check eligibility criteria, and
              submit accurate academic records for admissions.
            </p>
          </Card>

          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Academic Progress Tracking
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Track your semester-by-semester academic performance by converting
              SGPA to percentage. This helps you understand your progress in
              familiar terms, identify trends across semesters, and set
              realistic academic improvement goals.
            </p>
          </Card>

          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Scholarship Eligibility
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Scholarship programs often have percentage-based eligibility
              criteria. Converting SGPA to percentage helps you determine if you
              meet scholarship requirements and prepare accurate documentation
              for scholarship applications and renewal processes.
            </p>
          </Card>
        </div>
      </section>

      {/* SGPA Grading Scales */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">SGPA Grading Scales</h2>
        <Card className="px-4 py-6 sm:p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left px-2 py-4 font-semibold text-sm sm:text-base">Scale</th>
                  <th className="text-left px-2 py-4 font-semibold text-sm sm:text-base">SGPA Range</th>
                  <th className="text-left px-2 py-4 font-semibold text-sm sm:text-base">
                    Grade Classification
                  </th>
                  <th className="text-left px-2 py-4 font-semibold text-sm sm:text-base">
                    Percentage Range
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">10.0 Scale</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">9.0 - 10.0</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Outstanding/Excellent
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">85% - 95%+</td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">10.0 Scale</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">8.0 - 8.9</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">Very Good</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">75% - 84%</td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">10.0 Scale</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">7.0 - 7.9</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">Good</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">65% - 74%</td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">10.0 Scale</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">6.0 - 6.9</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">Average</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">55% - 64%</td>
                </tr>
                <tr>
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">10.0 Scale</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">5.0 - 5.9</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">Pass</td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">45% - 54%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Common Use Cases */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          Common SGPA Conversion Scenarios
        </h2>
        <Card className="px-4 py-6 sm:p-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                Semester Result Analysis
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                After receiving semester results in SGPA format, convert to
                percentage to better understand performance levels and compare
                with previous semesters or peers who use percentage-based
                grading systems.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                Competitive Exam Eligibility
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Many competitive exams and entrance tests require minimum
                percentage criteria. Converting SGPA to percentage helps
                determine eligibility for exams like GATE, CAT, GRE, GMAT, and
                various government job examinations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                Internship Applications
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Companies offering internships often specify percentage-based
                eligibility criteria. Convert your latest semester SGPA to
                percentage to check if you meet internship requirements and
                prepare accurate application documents.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto bg-gradient-to-r from-rose-500/10 to-pink-600/10 rounded-2xl px-4 py-6 sm:p-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Convert Your SGPA Now</h2>
        <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get instant, accurate SGPA conversions with UGC-approved formulas.
          Free to use, no registration required.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-rose-500 to-pink-600 text-white"
          >
            <Link href="/sgpa-to-percentage-calculator">
              SGPA to Percentage
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/percentage-to-sgpa-calculator">
              Percentage to SGPA
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
