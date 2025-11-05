import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, Users, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - Grade Calculator | Legal Terms & Conditions",
  description: "Read Grade Calculator's Terms of Service and legal conditions for using our free online grade calculation tools. Learn about user responsibilities, service limitations, and privacy policies.",
  keywords: [
    "terms of service grade calculator",
    "grade calculator legal terms",
    "terms and conditions",
    "grade calculator user agreement",
    "educational tool terms",
    "calculator service terms",
    "user responsibilities",
    "service limitations",
    "grade calculator policies",
    "legal agreement grade calculator"
  ],
  openGraph: {
    title: "Terms of Service - Grade Calculator Legal Agreement",
    description: "Review the terms and conditions for using Grade Calculator's free online tools. Learn about your rights and responsibilities as a user.",
    type: "website",
  },
  alternates: {
    canonical: "/terms-of-service",
  },
};

const sections = [
  {
    icon: Users,
    title: "User Responsibilities",
    items: [
      "Use our calculators responsibly and for legitimate educational purposes",
      "Verify calculations with your institution's official grading policies",
      "Do not attempt to compromise or exploit our systems",
      "Respect other users and maintain appropriate conduct"
    ]
  },
  {
    icon: Shield,
    title: "Service Limitations",
    items: [
      "Calculations are provided for informational purposes only",
      "We are not liable for academic decisions based on our calculations",
      "Service availability may vary and is not guaranteed 24/7",
      "Features may change or be discontinued with notice"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Important Disclaimers",
    items: [
      "Always verify results with official institutional policies",
      "Grade calculations may vary between different educational systems",
      "We do not guarantee admission or academic success",
      "Our tools supplement but do not replace academic counseling"
    ]
  }
];

export default function TermsOfServicePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Terms of Service
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Please read these Terms of Service carefully before using Grade Calculator.
          By accessing our website and using our tools, you agree to be bound by these terms.
        </p>
        <p className="text-sm text-muted-foreground">
          Last updated: December 2024
        </p>
      </div>

      {/* Quick Overview */}
      <section className="bg-secondary/40 rounded-lg p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Quick Overview</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {sections.map((section) => (
              <Card key={section.title} className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <section.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">Detailed Terms and Conditions</h2>

        <div className="space-y-8">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                1. Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                By accessing and using Grade Calculator ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p className="text-muted-foreground">
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>2. Description of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Grade Calculator provides free online tools for educational grade calculations, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Easy Grader for quiz and test scoring</li>
                <li>Average Grade Calculator for weighted averages</li>
                <li>Final Grade Calculator for required exam scores</li>
                <li>GPA Calculator for term and cumulative GPA</li>
                <li>SGPA to CGPA Converter</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>3. User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Users are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Using the service for legitimate educational purposes</li>
                <li>Verifying all calculations with official institutional policies</li>
                <li>Understanding that our calculations are estimates and may not reflect exact institutional grading</li>
                <li>Not attempting to hack, compromise, or exploit our systems</li>
                <li>Respecting the intellectual property rights of the service</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>4. Accuracy and Limitations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                While we strive for accuracy in our calculations:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>All calculations are provided for informational purposes only</li>
                <li>Results should be verified with your educational institution</li>
                <li>Grading systems vary between institutions and countries</li>
                <li>We do not guarantee the accuracy of calculations for all scenarios</li>
                <li>Users should not make important academic decisions based solely on our calculations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>5. Privacy and Data Collection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We respect your privacy:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>We do not store any grade information entered into our calculators</li>
                <li>All calculations happen locally in your browser</li>
                <li>We may collect anonymous usage statistics to improve our service</li>
                <li>We do not sell or share personal information with third parties</li>
                <li>Cookies may be used for basic website functionality</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>6. Service Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Regarding service availability:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>We strive to maintain high uptime but do not guarantee 24/7 availability</li>
                <li>Maintenance and updates may temporarily interrupt service</li>
                <li>We reserve the right to modify or discontinue features with reasonable notice</li>
                <li>The service is provided "as is" without warranties</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>7. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                All content on Grade Calculator, including but not limited to text, graphics, logos, and software, is the property of Grade Calculator and is protected by copyright and other intellectual property laws.
              </p>
              <p className="text-muted-foreground">
                Users may not reproduce, distribute, or create derivative works without explicit permission.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>8. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Grade Calculator shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Use or inability to use our service</li>
                <li>Academic decisions based on our calculations</li>
                <li>Any errors or omissions in calculations</li>
                <li>Service interruptions or technical issues</li>
                <li>Any other matter relating to our service</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>9. Prohibited Uses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Users may not use our service to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Violate any local, state, national, or international law</li>
                <li>Transmit any harmful, threatening, or offensive content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Use automated systems to access the service excessively</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>10. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date.
              </p>
              <p className="text-muted-foreground">
                Continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>11. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us through our Contact Us page or email us at legal@gradecalculator.com.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Effective Date */}
      <section className="bg-secondary/40 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Agreement</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          By using Grade Calculator, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          These terms are effective as of December 2024 and will remain in effect until modified or terminated.
        </p>
      </section>
    </div>
  );
}