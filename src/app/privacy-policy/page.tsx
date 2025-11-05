import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Database,
  Cookie,
  Users,
  Lock,
  RefreshCw,
  Mail,
  Eye,
  Server,
  Globe
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Grade Calculator | Data Protection & Privacy Rights",
  description: "Learn how Grade Calculator protects your privacy and handles data. We're committed to transparency about data collection, usage, and your privacy rights when using our free grade calculation tools.",
  keywords: [
    "privacy policy grade calculator",
    "data protection",
    "privacy rights",
    "grade calculator data handling",
    "student privacy",
    "educational tool privacy",
    "data security",
    "privacy practices",
    "cookie policy",
    "user data protection"
  ],
  openGraph: {
    title: "Privacy Policy - Grade Calculator Data Protection",
    description: "Transparent privacy practices for Grade Calculator. Learn how we protect your data and respect your privacy while providing free grade calculation tools.",
    type: "website",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

const privacySections = [
  {
    icon: Eye,
    title: "Information We Collect",
    description: "We collect minimal information to provide our service effectively",
    gradient: "bg-gradient-to-br from-blue-400 to-indigo-500",
    content: [
      "No personal information required to use our calculators",
      "Optional local storage for your convenience",
      "Anonymous usage statistics to improve our service",
      "Basic log data for security and performance"
    ]
  },
  {
    icon: Database,
    title: "Local Storage",
    description: "Your data stays on your device for privacy and convenience",
    gradient: "bg-gradient-to-br from-green-400 to-teal-500",
    content: [
      "Calculator inputs saved locally in your browser",
      "No transmission to our servers",
      "You can clear this data anytime",
      "Used only for your convenience"
    ]
  },
  {
    icon: Cookie,
    title: "Cookies & Tracking",
    description: "Minimal cookies for essential functionality only",
    gradient: "bg-gradient-to-br from-orange-400 to-red-500",
    content: [
      "Essential cookies for website functionality",
      "Anonymous analytics to improve user experience",
      "No third-party advertising cookies",
      "You can disable cookies in your browser settings"
    ]
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Your information is protected with industry-standard security",
    gradient: "bg-gradient-to-br from-purple-400 to-pink-500",
    content: [
      "No sensitive personal data stored on our servers",
      "HTTPS encryption for all communications",
      "Regular security audits and updates",
      "Industry-standard security practices"
    ]
  }
];

const quickFacts = [
  {
    icon: Shield,
    title: "No Account Required",
    description: "Use all our tools without creating an account or providing personal information"
  },
  {
    icon: Database,
    title: "No Grade Data Stored",
    description: "Your grades and calculations are never stored on our servers"
  },
  {
    icon: Users,
    title: "No Data Selling",
    description: "We never sell, rent, or share your personal information with third parties"
  },
  {
    icon: Globe,
    title: "GDPR Compliant",
    description: "We follow international privacy standards and regulations"
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Privacy Policy
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Your privacy matters to us. We're committed to being transparent about
          how we collect, use, and protect your information when you use Grade Calculator.
        </p>
        <p className="text-sm text-muted-foreground">
          Last updated: December 2024
        </p>
      </div>

      {/* Quick Facts */}
      <section className="bg-secondary/40 rounded-lg p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Privacy at a Glance</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((fact) => (
              <div key={fact.title} className="text-center space-y-2">
                <fact.icon className="h-8 w-8 mx-auto text-primary" />
                <h3 className="font-semibold">{fact.title}</h3>
                <p className="text-sm text-muted-foreground">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Privacy Sections */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">How We Protect Your Privacy</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've designed Grade Calculator with privacy by design. Here's exactly
            how we handle your information.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {privacySections.map((section) => (
            <Card key={section.title} className="group relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
              <div className={`absolute inset-0 ${section.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <section.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{section.description}</p>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-2">
                  {section.content.map((item, index) => (
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
      </section>

      {/* Detailed Legal Sections */}
      <section className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">Detailed Privacy Information</h2>

        <div className="space-y-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                Log Data Collection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Like most websites, we automatically collect certain information when you visit our site. This may include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Your IP address (anonymized for privacy)</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Device and screen information</li>
              </ul>
              <p className="text-muted-foreground">
                This data helps us understand how our service is used and identify potential issues or improvements.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We use the limited information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Provide and maintain our grade calculation services</li>
                <li>Improve website performance and user experience</li>
                <li>Understand usage patterns to guide feature development</li>
                <li>Ensure security and prevent abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Third-Party Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We may use third-party services to help us operate our website:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Web hosting services for reliability and performance</li>
                <li>Analytics services (with anonymized data) to understand usage</li>
                <li>Content delivery networks for faster loading</li>
              </ul>
              <p className="text-muted-foreground">
                These services are carefully selected and required to maintain the same privacy standards we uphold.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                Changes to This Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons.
              </p>
              <p className="text-muted-foreground">
                When we make changes, we will update the "Last updated" date and notify users through our website.
                We encourage you to review this policy periodically.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="bg-secondary/40 rounded-lg p-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold">Your Privacy Rights</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Data Control</h3>
              <p className="text-muted-foreground">
                You have full control over any local data stored by our calculators.
                You can clear this data anytime through your browser settings.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Cookie Control</h3>
              <p className="text-muted-foreground">
                You can disable cookies in your browser settings. Our core calculator
                functions will continue to work without cookies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
          <Mail className="h-6 w-6" />
          Questions About Your Privacy?
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          If you have any questions about this Privacy Policy or our privacy practices,
          we're here to help and provide clarification.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact-us"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
          <a
            href="mailto:privacy@gradecalculator.com"
            className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Email Privacy Team
          </a>
        </div>
      </section>
    </div>
  );
}
