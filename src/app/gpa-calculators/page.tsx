import Link from "next/link";
import { PlusCircle, BarChart3, ArrowRightCircle, CheckCircle, BookOpen, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPA & CGPA Calculators - Free Online Term GPA & Cumulative GPA Calculator",
  description: "Free GPA and CGPA calculators for students. Calculate term GPA from letter grades and semester-based CGPA from SGPA values. Supports multiple grading scales (4.0, 5.0, 7.0, 10.0) used in 45+ countries worldwide.",
  keywords: [
    "GPA calculator",
    "CGPA calculator",
    "term GPA calculator",
    "cumulative GPA calculator",
    "semester GPA calculator",
    "grade point average calculator",
    "college GPA calculator",
    "university GPA calculator",
    "4.0 GPA scale",
    "letter grade to GPA",
    "GPA calculator online",
    "free GPA calculator",
    "academic GPA calculator",
    "student GPA calculator"
  ],
  openGraph: {
    title: "GPA & CGPA Calculators - Free Online Term GPA & Cumulative GPA Calculator",
    description: "Calculate your GPA and CGPA instantly with our free online calculators. Support for multiple grading scales and international standards.",
    type: "website",
  },
  alternates: {
    canonical: "/gpa-calculators",
  },
};

const gpaCalculatorTools = [
  {
    title: "GPA Calculator",
    description: "Calculate your term GPA and cumulative GPA from course letter grades (A, A-, B+, B, etc.). Supports multiple GPA scales including 4.0, 4.3, and 5.0 commonly used in US, Canada, and international universities. Perfect for tracking course-level academic performance.",
    icon: PlusCircle,
    href: "/gpa-calculator",
    color: "text-purple-600",
    gradient: "bg-gradient-to-br from-purple-400 to-pink-500",
    features: [
      "Letter grade input (A, B+, C, etc.)",
      "Multiple GPA scales (4.0, 4.3, 5.0)",
      "Term and cumulative GPA",
      "Credit hour weighting",
      "Detailed grade breakdown"
    ]
  },
  {
    title: "CGPA Calculator",
    description: "Calculate your Cumulative Grade Point Average (CGPA) from semester SGPA values with support for 45+ countries and grading scales (4.0, 5.0, 7.0, 10.0). Enter SGPA values for each semester to track overall degree performance. Ideal for international students and multi-semester tracking.",
    icon: BarChart3,
    href: "/cgpa-calculator",
    color: "text-indigo-600",
    gradient: "bg-gradient-to-br from-indigo-400 to-purple-500",
    features: [
      "45+ country grading scales",
      "Semester SGPA input",
      "SGPA to CGPA conversion",
      "Credit weighting support",
      "International standards"
    ],
    isNew: true
  }
];

export default function GPACalculatorsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          Free GPA & CGPA Calculator Tools
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Calculate your Grade Point Average (GPA) and Cumulative Grade Point
          Average (CGPA) instantly with our free online calculators. Support for
          multiple grading scales and international standards used in
          universities worldwide. Perfect for students tracking academic
          performance across terms and semesters.
        </p>
      </section>

      {/* What is GPA/CGPA Section */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          Understanding GPA and CGPA
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="px-4 py-6 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-8 w-8 text-purple-600" />
              <h3 className="font-semibold text-base sm:text-lg">
                What is GPA?
              </h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              <strong>Grade Point Average (GPA)</strong> is a numerical
              representation of your academic performance calculated from letter
              grades (A, B, C, etc.) received in courses. It's the standard
              measure of academic achievement in the United States, Canada, and
              many international universities.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              GPA is calculated by converting letter grades to numerical values
              on a scale (commonly 4.0), multiplying by credit hours, and
              dividing by total credit hours. Our GPA calculator supports 4.0,
              4.3, and 5.0 scales for accurate grade point computation.
            </p>
          </Card>

          <Card className="px-4 py-6 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-8 w-8 text-indigo-600" />
              <h3 className="font-semibold text-base sm:text-lg">
                What is CGPA?
              </h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              <strong>Cumulative Grade Point Average (CGPA)</strong> is the
              overall GPA across all semesters or academic years. It's
              calculated from Semester Grade Point Average (SGPA) values and
              represents your entire academic performance throughout your degree
              program.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              CGPA is widely used in universities across India, Pakistan, Middle
              East, Europe, and other regions. Our CGPA calculator supports
              grading scales from 4.0 to 10.0, covering academic systems in 45+
              countries worldwide.
            </p>
          </Card>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
          Our GPA & CGPA Calculator Tools
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {gpaCalculatorTools.map((tool) => (
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
                  <CardTitle className="text-base sm:text-lg">
                    {tool.title}
                  </CardTitle>
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
                    Calculate Now <ArrowRightCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* GPA vs CGPA Comparison */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          GPA vs CGPA: Key Differences
        </h2>
        <Card className="px-4 py-6 sm:p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left px-2 py-4 font-semibold text-sm sm:text-base">
                    Aspect
                  </th>
                  <th className="text-left px-2 py-4 font-semibold text-sm sm:text-base">
                    GPA
                  </th>
                  <th className="text-left px-2 py-4 font-semibold text-sm sm:text-base">
                    CGPA
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">
                    Full Form
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Grade Point Average
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Cumulative Grade Point Average
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">
                    Scope
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Single term or semester
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    All semesters/entire program
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">
                    Input Type
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Letter grades (A, B+, C, etc.)
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    SGPA values from semesters
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium text-xs sm:text-sm">
                    Common Scales
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    4.0, 4.3, 5.0
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    4.0, 5.0, 7.0, 10.0
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">
                    Primary Use
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    USA, Canada, some international
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    India, Pakistan, Middle East, Europe
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-4 font-medium text-xs sm:text-sm">
                    Best For
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Course-level performance tracking
                  </td>
                  <td className="px-2 py-4 text-muted-foreground text-xs sm:text-sm">
                    Overall degree performance
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Why Use Section */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          Why Use Our GPA & CGPA Calculators?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Multiple Grading Scales
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Support for all major GPA and CGPA scales including 4.0, 4.3, 5.0,
              7.0, and 10.0 point systems. Works with grading standards from 45+
              countries including USA, Canada, India, UK, Australia, and more.
            </p>
          </Card>

          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Accurate Calculations
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Precise GPA and CGPA computation using industry-standard formulas.
              Accounts for credit hours, weighted averages, and semester credits
              to provide accurate academic performance metrics.
            </p>
          </Card>

          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Academic Planning
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Track your academic progress, set GPA goals, and plan course
              selections. Essential for scholarship applications, graduate
              school admissions, and maintaining academic standing requirements.
            </p>
          </Card>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          Common Use Cases
        </h2>
        <Card className="px-4 py-6 sm:p-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                University Applications
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Calculate your cumulative GPA or CGPA for university
                applications, scholarship submissions, and graduate school
                admissions. Many institutions require specific GPA thresholds -
                use our calculators to ensure you meet requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                Academic Progress Tracking
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Monitor your academic performance throughout your degree
                program. Calculate term GPA after each semester and cumulative
                CGPA to track overall progress toward graduation and academic
                honors.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                International Students
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Convert and calculate GPA/CGPA across different grading systems
                when transferring between universities or applying to
                international programs. Our calculators support multiple scales
                for seamless conversions.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-2xl px-4 py-6 sm:p-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Calculate Your GPA or CGPA Now
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get instant, accurate GPA and CGPA calculations with support for
          multiple grading scales. Free to use, no registration required.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white"
          >
            <Link href="/gpa-calculator">Calculate GPA</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="underline">
            <Link href="/cgpa-calculator">Calculate CGPA</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
