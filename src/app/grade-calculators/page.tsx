import Link from "next/link";
import { Calculator, FileSpreadsheet, GraduationCap, Percent, ArrowRightCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grade Calculators - Free Online Grade & Weighted Average Calculator Tools",
  description: "Free online grade calculator tools including easy grader, weighted average calculator, final grade calculator, and marks percentage calculator. Calculate student grades instantly with precision and accuracy.",
  keywords: [
    "grade calculator",
    "easy grader online",
    "weighted grade calculator",
    "average grade calculator",
    "final grade calculator",
    "marks percentage calculator",
    "test score calculator",
    "quiz grader",
    "assignment grade calculator",
    "grade computation tool",
    "student grading tools",
    "teacher grading calculator",
    "online grade calculator",
    "free grade calculator"
  ],
  openGraph: {
    title: "Grade Calculators - Free Online Grade & Weighted Average Calculator Tools",
    description: "Free online grade calculator tools for students and teachers. Calculate grades, weighted averages, final exam scores, and percentage marks instantly.",
    type: "website",
  },
  alternates: {
    canonical: "/grade-calculators",
  },
};

const gradeCalculatorTools = [
  {
    title: "Easy Grader",
    description: "Quick and efficient grading tool perfect for teachers and educators. Calculate quiz scores, test grades, and assignment marks instantly by entering total questions and wrong answers. Features customizable grading scales and decimal precision.",
    icon: Calculator,
    href: "/easy-grader",
    color: "text-orange-600",
    gradient: "bg-gradient-to-br from-orange-400 to-red-500",
    features: ["Instant percentage calculation", "Customizable grading charts", "Decimal precision control", "Print-friendly results"]
  },
  {
    title: "Average Grade Calculator",
    description: "Calculate weighted grade averages with comprehensive support for percentages, letter grades, and points-based systems. Perfect for tracking semester progress and computing final course grades with different assignment weights.",
    icon: FileSpreadsheet,
    href: "/average-grade-calculator",
    color: "text-green-600",
    gradient: "bg-gradient-to-br from-green-400 to-teal-500",
    features: ["Multiple grade formats", "Weighted average calculation", "Target grade planning", "Save calculations"]
  },
  {
    title: "Final Grade Calculator",
    description: "Determine the exact grade needed on your final exam to achieve your desired course grade. Works with both percentage-based and letter grade systems. Plan your study strategy effectively by knowing what score you need.",
    icon: GraduationCap,
    href: "/final-grade-calculator",
    color: "text-blue-600",
    gradient: "bg-gradient-to-br from-blue-400 to-indigo-500",
    features: ["Final exam score calculation", "Multiple grading scales", "Achievability analysis", "What-if scenarios"]
  },
  {
    title: "Marks Percentage Calculator",
    description: "Convert marks obtained to percentage instantly with our free online calculator. Supports single test calculations and multiple test aggregations with automatic grade classification. Perfect for students tracking academic performance.",
    icon: Percent,
    href: "/marks-percentage-calculator",
    color: "text-emerald-600",
    gradient: "bg-gradient-to-br from-emerald-400 to-teal-500",
    features: ["Single & multiple tests", "Instant percentage conversion", "Grade classification", "Performance tracking"]
  }
];

export default function GradeCalculatorsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          Free Online Grade Calculator Tools
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Comprehensive suite of free grade calculator tools designed for
          students, teachers, and educators. Calculate grades, weighted
          averages, final exam scores, and percentage marks with mathematical
          precision. Trusted by thousands of users worldwide for accurate grade
          computation.
        </p>
      </section>

      {/* What Are Grade Calculators Section */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          What Are Grade Calculators?
        </h2>
        <Card className="px-4 py-6 sm:p-6">
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Grade calculators are essential academic tools that help students
              and educators compute various types of grades and academic scores.
              These powerful calculators eliminate manual calculation errors and
              provide instant, accurate results for different grading scenarios.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Our grade calculator suite includes specialized tools for
              different grading needs: the <strong>Easy Grader</strong> for
              quick test scoring, <strong>Weighted Grade Calculator</strong> for
              computing course averages,
              <strong>Final Grade Calculator</strong> for determining required
              exam scores, and <strong>Marks Percentage Calculator</strong> for
              converting raw marks to percentages. Each tool is designed with
              user-friendly interfaces and precise mathematical formulas.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Whether you're a student planning your academic goals, a teacher
              grading assignments, or an educator managing class performance,
              these online grade calculators streamline the grading process and
              provide reliable results in seconds.
            </p>
          </div>
        </Card>
      </section>

      {/* Tools Grid Section */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-12">
          Our Grade Calculator Tools
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {gradeCalculatorTools.map((tool) => (
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
                    Use Calculator <ArrowRightCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Use Grade Calculators Section */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          Why Use Online Grade Calculators?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Instant Accuracy
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Eliminate calculation errors with automated grade computation. Our
              calculators use precise mathematical formulas to ensure 100%
              accuracy in all grade calculations, from simple percentage
              conversions to complex weighted averages.
            </p>
          </Card>

          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Time-Saving Efficiency
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Save hours of manual grade calculations. Teachers can grade entire
              classes in minutes using the Easy Grader, while students can
              instantly check their grade status and plan academic strategies
              without tedious math.
            </p>
          </Card>

          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Academic Planning
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Make informed decisions about your academic performance. Use the
              Final Grade Calculator to determine required exam scores, or the
              Weighted Grade Calculator to track semester progress and set
              realistic academic goals.
            </p>
          </Card>

          <Card className="px-4 py-6 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Free & Accessible
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              All grade calculators are completely free with no registration
              required. Access from any device - desktop, tablet, or mobile -
              and get instant results anytime, anywhere. No downloads or
              installations needed.
            </p>
          </Card>
        </div>
      </section>

      {/* Common Use Cases Section */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          Common Use Cases for Grade Calculators
        </h2>
        <Card className="px-4 py-6 sm:p-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                For Students
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Track your academic progress throughout the semester with the
                Weighted Grade Calculator. Plan your study strategy by using the
                Final Grade Calculator to see what score you need on upcoming
                exams. Convert test marks to percentages to understand your
                performance level and identify areas for improvement.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                For Teachers & Educators
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Grade tests and quizzes efficiently with the Easy Grader -
                simply enter total questions and wrong answers to get instant
                percentage grades. Calculate class averages, generate grading
                curves, and maintain consistent grading standards across all
                assignments and assessments.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                For Parents
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Help your children understand their academic performance by
                converting marks to percentages and calculating weighted course
                grades. Use these tools to set realistic academic goals and
                track progress throughout the school year, ensuring transparent
                communication about academic expectations.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl px-4 py-6 sm:p-6 text-center">
        <h2 className="text-lg sm:text-xl font-bold mb-4">
          Start Calculating Grades Now
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Choose the grade calculator that fits your needs and get instant,
          accurate results. All tools are free, require no registration, and
          work on any device.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
          >
            <Link href="/easy-grader">Try Easy Grader</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/average-grade-calculator">
              Calculate Weighted Average
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
