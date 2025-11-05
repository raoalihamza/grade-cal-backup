import Link from "next/link";
import {
  ArrowRightCircle,
  Calculator,
  FileSpreadsheet,
  GraduationCap,
  PlusCircle,
  RefreshCw,
  Users,
  Clock,
  BookOpen,
  Target,
  CheckCircle,
  Star,
  ArrowLeftRight,
  TrendingDown,
  Percent,
  TrendingUp,
  ArrowDownUp,
  BarChart3,
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
  title: "Free Grade Calculator - Calculate GPA, Final Grades & Weighted Averages",
  description: "Calculate your grades instantly with our free online calculator tools. Compute weighted averages, final exam grades, GPA, CGPA, SGPA to CGPA, SGPA to percentage, percentage to CGPA, CGPA to percentage, percentage to SGPA, marks percentage conversion, and more. Trusted by over 100,000+ students and educators worldwide.",
  keywords: [
    "grade calculator",
    "free grade calculator",
    "online grade calculator",
    "GPA calculator",
    "CGPA calculator",
    "cumulative GPA calculator",
    "final grade calculator",
    "weighted average calculator",
    "percentage to CGPA calculator",
    "sgpa to percentage calculator",
    "cgpa to percentage calculator",
    "percentage to sgpa calculator",
    "marks percentage calculator",
    "marks to percentage",
    "CGPA converter",
    "SGPA converter",
    "easy grader",
    "student tools",
    "academic calculator",
    "grade computation",
    "percentage calculator",
    "letter grade calculator",
    "semester CGPA calculator"
  ],
  openGraph: {
    title: "Free Grade Calculator - Calculate GPA, Final Grades & Weighted Averages",
    description: "Calculate your grades instantly with our free online calculator tools. Compute weighted averages, final exam grades, GPA, SGPA to CGPA, percentage to CGPA conversion, and more.",
    type: "website",
    url: "https://grade-calculator-smoky.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Grade Calculator - Calculate GPA, Final Grades & Weighted Averages",
    description: "Calculate your grades instantly with our free online calculator tools. Compute weighted averages, final exam grades, GPA, SGPA to CGPA, percentage to CGPA conversion, and more.",
  },
  alternates: {
    canonical: "/",
  },
};

const features = [
  {
    title: "Easy Grader",
    description:
      "Perfect for teachers and students to quickly calculate quiz, test, and assignment scores. Simply enter the total number of questions and wrong answers to get instant percentage grades and grading charts.",
    icon: Calculator,
    href: "/easy-grader",
    color: "text-orange-600",
    gradient: "bg-gradient-to-br from-orange-400 to-red-500",
    features: ["Instant grade calculation", "Customizable grading chart", "Decimal precision control"]
  },
  {
    title: "Average Grade Calculator",
    description:
      "Calculate weighted grade averages with comprehensive support for percentages, points, or letter grades. Ideal for tracking semester progress and computing final course grades.",
    icon: FileSpreadsheet,
    href: "/average-grade-calculator",
    color: "text-green-600",
    gradient: "bg-gradient-to-br from-green-400 to-teal-500",
    features: ["Multiple grade formats", "Weight validation", "Target grade planning"]
  },
  {
    title: "Final Grade Calculator",
    description:
      "Determine what grade you need on your final exam to achieve your desired course grade. Works with both percentage and letter grade systems for accurate planning.",
    icon: GraduationCap,
    href: "/final-grade-calculator",
    color: "text-blue-600",
    gradient: "bg-gradient-to-br from-blue-400 to-indigo-500",
    features: ["Exam requirement calculation", "Multiple grading scales", "Achievability analysis"]
  },
  {
    title: "GPA Calculator",
    description:
      "Calculate your term GPA and cumulative GPA from course letter grades (A, B+, C, etc.) with support for 4.0, 4.3, and 5.0 scales. Perfect for US/Canada students tracking course-level performance.",
    icon: PlusCircle,
    href: "/gpa-calculator",
    color: "text-purple-600",
    gradient: "bg-gradient-to-br from-purple-400 to-pink-500",
    features: ["Letter grade input", "Multiple GPA scales", "Term & cumulative calculation"]
  },
  {
    title: "SGPA to CGPA Calculator",
    description:
      "Convert your Semester Grade Point Average (SGPA) to Cumulative Grade Point Average (CGPA) with support for 4.0, 5.0, and 10.0 point scales. Essential for university students.",
    icon: RefreshCw,
    href: "/sgpa-to-cgpa-calculator",
    color: "text-amber-600",
    gradient: "bg-gradient-to-br from-amber-400 to-orange-500",
    features: ["Multiple calculation methods", "Various grading scales", "Percentage conversion"]
  },
  {
    title: "Percentage to CGPA Calculator",
    description:
      "Convert percentage marks to CGPA instantly with support for 10.0, 4.0, and 5.0 grading scales. Perfect for university admissions, scholarships, and international applications.",
    icon: ArrowLeftRight,
    href: "/percentage-to-cgpa-calculator",
    color: "text-cyan-600",
    gradient: "bg-gradient-to-br from-cyan-400 to-blue-500",
    features: ["Multiple grading scales", "Instant conversion", "Grade classification"]
  },
  {
    title: "SGPA to Percentage Calculator",
    description:
      "Convert SGPA to percentage marks instantly with accurate formulas for 10.0, 5.0, and 4.0 grading scales. Essential for job applications, academic evaluations, and standardizing semester grades.",
    icon: TrendingDown,
    href: "/sgpa-to-percentage-calculator",
    color: "text-rose-600",
    gradient: "bg-gradient-to-br from-rose-400 to-pink-500",
    features: ["UGC-approved formulas", "Grade classification", "Instant percentage conversion"]
  },
  {
    title: "Marks Percentage Calculator",
    description:
      "Calculate percentage from marks obtained instantly with our free online marks to percentage calculator. Supports single and multiple test calculations with automatic grade classification.",
    icon: Percent,
    href: "/marks-percentage-calculator",
    color: "text-emerald-600",
    gradient: "bg-gradient-to-br from-emerald-400 to-teal-500",
    features: ["Single & multiple tests", "Instant percentage calculation", "Automatic grade classification"]
  },
  {
    title: "CGPA to Percentage Calculator",
    description:
      "Convert CGPA to percentage marks instantly with accurate formulas for 10.0, 5.0, 4.0, and Pakistan HEC grading scales. Essential for job applications, university admissions, and transcript conversions.",
    icon: TrendingUp,
    href: "/cgpa-to-percentage-calculator",
    color: "text-violet-600",
    gradient: "bg-gradient-to-br from-violet-400 to-purple-500",
    isNew: true,
    features: ["Multiple grading scales", "Instant CGPA conversion", "Grade classification"]
  },
  {
    title: "Percentage to SGPA Calculator",
    description:
      "Convert percentage to SGPA (Semester Grade Point Average) instantly with support for 10.0, 5.0, 4.0, and Pakistan HEC scales. Perfect for semester grade conversions and academic records.",
    icon: ArrowDownUp,
    href: "/percentage-to-sgpa-calculator",
    color: "text-sky-600",
    gradient: "bg-gradient-to-br from-sky-400 to-cyan-500",
    features: ["Semester GPA conversion", "Multiple scales support", "Instant calculation"]
  },
  {
    title: "CGPA Calculator",
    description:
      "Calculate your Cumulative GPA (CGPA) from semester GPAs with support for 45+ countries and grading scales (4.0, 5.0, 7.0, 10.0). Enter SGPA values to track overall degree performance. Ideal for international students.",
    icon: BarChart3,
    href: "/cgpa-calculator",
    color: "text-indigo-600",
    gradient: "bg-gradient-to-br from-indigo-400 to-purple-500",
    isNew: true,
    features: ["45+ countries", "Semester-based input", "SGPA to CGPA conversion"]
  },
];

const benefits = [
  {
    icon: Users,
    title: "Trusted by 100,000+ Students",
    description: "Join thousands of students and educators worldwide who rely on our accurate calculations"
  },
  {
    icon: CheckCircle,
    title: "100% Free Forever",
    description: "All our tools are completely free with no hidden costs, registration, or limitations"
  },
  {
    icon: Clock,
    title: "Instant Results",
    description: "Get immediate calculations with real-time updates as you input your grades"
  },
  {
    icon: Target,
    title: "Precision Accuracy",
    description: "Mathematically verified formulas ensure accurate results for all your academic needs"
  }
];

const educationalContent = [
  {
    icon: BookOpen,
    title: "Understanding Weighted Averages",
    description: "Learn how different assignments and exams contribute to your final grade based on their weight percentages."
  },
  {
    icon: Star,
    title: "GPA vs CGPA Difference",
    description: "Understand the distinction between Grade Point Average (GPA) and Cumulative Grade Point Average (CGPA)."
  },
  {
    icon: Calculator,
    title: "Grade Calculation Methods",
    description: "Explore different grading systems including percentage, letter grades, and point-based calculations."
  }
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
          Free Grade Calculator Tools
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
          Calculate your grades instantly with our comprehensive suite of free online calculator tools.
          Perfect for students, teachers, and educators to compute weighted averages, final exam grades,
          GPA conversions, and more with mathematical precision.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <Link href="/average-grade-calculator">Start Calculating</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#features">Explore Tools</Link>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary/40 rounded-2xl p-8">
        <div className="text-center mb-12">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Why Choose Our Grade Calculators?</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by students and educators worldwide for accurate, reliable grade calculations
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center space-y-3">
              <benefit.icon className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-base sm:text-lg font-semibold">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <div className="text-center mb-12">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Complete Grade Calculator Suite</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to calculate, track, and plan your academic grades
          </p>
        </div>

        <div className="space-y-6">
          {/* First row - 3 tools */}
          <div className="flex flex-wrap justify-center gap-6">
            {features.slice(0, 3).map((feature) => (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-2 hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col min-h-[320px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

                <CardHeader className="relative pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    <CardTitle className="text-base sm:text-lg">{feature.title}</CardTitle>
                    {feature.isNew && (
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-2.5 py-0.5 text-xs font-medium text-white">
                        New
                      </span>
                    )}
                  </div>
                  <CardDescription className="min-h-[80px] text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <div className="pt-3">
                    <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                      {feature.features.map((featureItem, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          {featureItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardHeader>
                <CardFooter className="relative mt-auto pt-2">
                  <Button asChild className={`w-full ${feature.gradient} text-white hover:opacity-90 transition-opacity border-none`}>
                    <Link href={feature.href}>
                      Try it <ArrowRightCircle className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Second row - 2 tools with same width as first row items */}
          <div className="flex flex-wrap justify-center gap-6">
            {features.slice(3).map((feature) => (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-2 hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col min-h-[320px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

                <CardHeader className="relative pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    <CardTitle className="text-base sm:text-lg">{feature.title}</CardTitle>
                    {feature.isNew && (
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-2.5 py-0.5 text-xs font-medium text-white">
                        New
                      </span>
                    )}
                  </div>
                  <CardDescription className="min-h-[80px] text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <div className="pt-3">
                    <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                      {feature.features.map((featureItem, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          {featureItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardHeader>
                <CardFooter className="relative mt-auto pt-2">
                  <Button asChild className={`w-full ${feature.gradient} text-white hover:opacity-90 transition-opacity border-none`}>
                    <Link href={feature.href}>
                      Try it <ArrowRightCircle className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/10 rounded-2xl p-8">
        <div className="text-center mb-12">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Learn About Grade Calculations</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding how grades work helps you make better academic decisions
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {educationalContent.map((content) => (
            <div key={content.title} className="text-center space-y-4">
              <content.icon className="h-16 w-16 mx-auto text-primary" />
              <h3 className="text-base sm:text-lg font-semibold">{content.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{content.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 text-center">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Start Calculating Your Grades Today</h2>
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of students and educators who trust our free, accurate, and easy-to-use grade calculators.
          No registration required - start calculating immediately!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <Link href="/average-grade-calculator">Calculate Grades Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about-us">Learn More About Us</Link>
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            100% Free Forever
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            No Registration Required
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Instant Results
          </div>
        </div>
      </section>
    </div>
  );
}
