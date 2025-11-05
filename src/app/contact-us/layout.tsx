import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Grade Calculator | Get Help with Grade Calculations",
  description: "Need help with grade calculations? Contact Grade Calculator support team. Get assistance with our free online tools, report bugs, request features, or ask questions about academic grading.",
  keywords: [
    "contact grade calculator",
    "grade calculator support",
    "grade calculation help",
    "student calculator support",
    "academic calculator assistance",
    "grade calculator contact form",
    "educational tool support",
    "grade calculation questions",
    "calculator bug report",
    "feature request grade calculator"
  ],
  openGraph: {
    title: "Contact Grade Calculator - Get Help with Grade Calculations",
    description: "Get support for our free grade calculation tools. Contact us for help, bug reports, feature requests, or any questions about academic grading.",
    type: "website",
  },
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}