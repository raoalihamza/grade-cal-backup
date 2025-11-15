import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import { ToastProvider } from "@/components/ui/toast";
import { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://markcalculator.com"),
  title: {
    default: "Grade Calculator - Free Online Grade & GPA Calculator Tools",
    template: "%s | Grade Calculator",
  },
  description:
    "Free comprehensive grade calculator tools for students and educators. Calculate weighted averages, final exam grades, GPA, SGPA to CGPA, CGPA to percentage, percentage to SGPA conversion, marks percentage, and more. Easy-to-use online calculators with instant results.",
  keywords: [
    "grade calculator",
    "GPA calculator",
    "final grade calculator",
    "weighted average calculator",
    "SGPA to CGPA calculator",
    "SGPA to percentage calculator",
    "percentage to CGPA calculator",
    "CGPA to percentage calculator",
    "percentage to SGPA calculator",
    "marks percentage calculator",
    "marks to percentage",
    "easy grader",
    "grade percentage calculator",
    "student tools",
    "academic calculator",
    "free grade calculator",
    "online grade calculator",
    "grade computation",
    "semester GPA",
    "cumulative GPA",
    "letter grade calculator",
    "points grade calculator",
    "percentage to CGPA converter",
    "CGPA converter",
    "SGPA converter",
    "test score calculator",
    "exam percentage calculator",
  ],
  authors: [{ name: "Grade Calculator Team" }],
  creator: "Grade Calculator",
  publisher: "Grade Calculator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://markcalculator.com",
    title: "Grade Calculator - Free Online Grade & GPA Calculator Tools",
    description:
      "Free comprehensive grade calculator tools for students and educators. Calculate weighted averages, final exam grades, GPA, SGPA to CGPA conversion, and more.",
    siteName: "Grade Calculator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Grade Calculator - Free Online Grade Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grade Calculator - Free Online Grade & GPA Calculator Tools",
    description:
      "Free comprehensive grade calculator tools for students and educators. Calculate weighted averages, final exam grades, GPA, SGPA to CGPA conversion, and more.",
    images: ["/twitter-image.png"],
    creator: "@gradecalculator",
    site: "@gradecalculator",
  },
  category: "Education",
  classification: "Education",
  other: {
    "google-site-verification": "verification-code-here",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Grade Calculator",
    description:
      "Free comprehensive grade calculator tools for students and educators",
    url: "https://markcalculator.com",
    applicationCategory: "EducationalApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "Grade Calculator Team",
    },
    featureList: [
      "Average Grade Calculator",
      "Final Grade Calculator",
      "GPA Calculator",
      "SGPA to CGPA Calculator",
      "SGPA to Percentage Calculator",
      "Percentage to CGPA Calculator",
      "CGPA to Percentage Calculator",
      "Percentage to SGPA Calculator",
      "Marks Percentage Calculator",
      "Easy Grader Tool",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              // strategy="afterInteractive"
              strategy="lazyOnload" // Changed from "afterInteractive"
            />
            <Script
              id="google-analytics"
              // strategy="afterInteractive"
              strategy="lazyOnload" // Changed from "afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Theme permanently set to dark mode - system theme detection disabled */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          <Header />
          <main className="flex-grow container !px-4 sm:!px-8 py-8" role="main">
            <ToastProvider>{children}</ToastProvider>
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
