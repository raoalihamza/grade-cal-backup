import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Users, Target, Award, BookOpen, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Grade Calculator | Free Online Grade Calculation Tools",
  description: "Learn about Grade Calculator, the leading platform for free online grade calculation tools. Discover our mission to help students and educators with accurate, easy-to-use calculators for academic success.",
  keywords: [
    "about grade calculator",
    "grade calculation platform",
    "student grade tools",
    "educational technology",
    "academic calculator team",
    "grade calculation mission",
    "free education tools",
    "student success platform",
    "grade calculator company",
    "educational calculator service"
  ],
  openGraph: {
    title: "About Grade Calculator - Free Online Grade Calculation Tools",
    description: "Discover our mission to provide free, accurate grade calculation tools for students and educators worldwide. Learn about our commitment to educational excellence.",
    type: "website",
  },
  alternates: {
    canonical: "/about-us",
  },
};

const values = [
  {
    icon: Calculator,
    title: "Accuracy First",
    description: "We prioritize precision in all our calculations, ensuring students and educators can trust our results for important academic decisions.",
    gradient: "bg-gradient-to-br from-blue-400 to-indigo-500"
  },
  {
    icon: Users,
    title: "Student-Centered",
    description: "Every feature we build is designed with students' needs in mind, making grade calculation simple, fast, and stress-free.",
    gradient: "bg-gradient-to-br from-green-400 to-teal-500"
  },
  {
    icon: Target,
    title: "Educational Excellence",
    description: "We believe in empowering students with tools that help them understand their academic progress and achieve their goals.",
    gradient: "bg-gradient-to-br from-purple-400 to-pink-500"
  },
  {
    icon: Award,
    title: "Always Free",
    description: "Quality education tools should be accessible to everyone. That's why all our calculators will always remain completely free to use.",
    gradient: "bg-gradient-to-br from-orange-400 to-red-500"
  }
];

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Tools",
    description: "From simple quiz grading to complex GPA calculations, we cover all your academic calculation needs.",
  },
  {
    icon: Lightbulb,
    title: "Educational Content",
    description: "Beyond calculations, we provide explanations and guides to help you understand grading systems better.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          About Grade Calculator
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Empowering students and educators with free, accurate, and easy-to-use
          grade calculation tools since our founding. We're committed to making
          academic success more accessible for everyone.
        </p>
      </div>

      {/* Mission Section */}
      <section className="bg-secondary/40 rounded-lg p-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To democratize access to high-quality educational tools by providing free,
            accurate, and user-friendly grade calculators that help students track their
            academic progress, set realistic goals, and achieve educational success.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that every student deserves access to tools that can help them
            understand their academic standing and make informed decisions about their
            education, regardless of their financial situation.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These principles guide everything we do and shape how we build products
            that truly serve the educational community.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <Card key={value.title} className="group relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
              <div className={`absolute inset-0 ${value.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <value.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We develop and maintain a comprehensive suite of grade calculation tools
            designed to meet the diverse needs of students and educators.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <feature.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Tools Section */}
      <section className="bg-secondary/40 rounded-lg p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Calculator Tools</h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center p-4">
              <Calculator className="h-8 w-8 mx-auto mb-2 text-orange-500" />
              <h3 className="font-semibold">Easy Grader</h3>
              <p className="text-sm text-muted-foreground">Quick quiz and test scoring</p>
            </div>

            <div className="text-center p-4">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <h3 className="font-semibold">Average Grade Calculator</h3>
              <p className="text-sm text-muted-foreground">Weighted grade averages</p>
            </div>

            <div className="text-center p-4">
              <Target className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <h3 className="font-semibold">Final Grade Calculator</h3>
              <p className="text-sm text-muted-foreground">Required exam scores</p>
            </div>

            <div className="text-center p-4">
              <Award className="h-8 w-8 mx-auto mb-2 text-purple-500" />
              <h3 className="font-semibold">GPA Calculator</h3>
              <p className="text-sm text-muted-foreground">Term and cumulative GPA</p>
            </div>

            <div className="text-center p-4">
              <Lightbulb className="h-8 w-8 mx-auto mb-2 text-amber-500" />
              <h3 className="font-semibold">SGPA to CGPA Converter</h3>
              <p className="text-sm text-muted-foreground">Convert semester to cumulative GPA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Our Commitment to You</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-lg text-muted-foreground">
            <strong>Accuracy:</strong> Every calculation is thoroughly tested and verified to ensure
            you can trust our results for your academic decisions.
          </p>
          <p className="text-lg text-muted-foreground">
            <strong>Privacy:</strong> We respect your privacy and don't store any of your grade
            information. All calculations happen locally in your browser.
          </p>
          <p className="text-lg text-muted-foreground">
            <strong>Accessibility:</strong> Our tools are designed to be accessible to everyone,
            with responsive design and clear, easy-to-use interfaces.
          </p>
          <p className="text-lg text-muted-foreground">
            <strong>Continuous Improvement:</strong> We regularly update and improve our tools
            based on user feedback and changing educational needs.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Calculate Your Grades?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Join thousands of students who trust Grade Calculator for their academic success.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/average-grade-calculator"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Start Calculating
          </a>
          <a
            href="/contact-us"
            className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}