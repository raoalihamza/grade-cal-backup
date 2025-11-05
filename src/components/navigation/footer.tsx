import Link from 'next/link'
import Logo from './logo'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const gradeCalculators = [
        { href: '/easy-grader', label: 'Easy Grade Calculator Online' },
        { href: '/average-grade-calculator', label: 'Weighted Grade Calculator' },
        { href: '/final-grade-calculator', label: 'Final Grade Calculator' },
        { href: '/marks-percentage-calculator', label: 'Marks Percentage Calculator' }
    ]

    const gpaCalculators = [
        { href: '/gpa-calculator', label: 'Term GPA Calculator' },
        { href: '/cgpa-calculator', label: 'Semester CGPA Calculator' }
    ]

    const cgpaConverters = [
        { href: '/percentage-to-cgpa-calculator', label: 'Percentage to CGPA Converter' },
        { href: '/cgpa-to-percentage-calculator', label: 'CGPA to Percentage Converter' },
        { href: '/sgpa-to-cgpa-calculator', label: 'Online SGPA to CGPA Calculator' }
    ]

    const sgpaConverters = [
        { href: '/sgpa-to-percentage-calculator', label: 'SGPA to Percentage Calculator' },
        { href: '/percentage-to-sgpa-calculator', label: 'Percentage to SGPA Converter' }
    ]

    const companyLinks = [
        { href: '/about-us', label: 'About Us' },
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/terms-of-service', label: 'Terms of Service' },
        { href: '/contact-us', label: 'Contact Us' }
    ]

    return (
        <footer className="w-full border-t bg-secondary/30">
            <div className="container py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
                    {/* Brand Column */}
                    <div className="lg:col-span-1 space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Logo className="h-10 w-10" />
                            <span className="font-bold text-lg">Grade Calculator</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Free online grade calculator tools for students and educators. Calculate grades instantly with precision.
                        </p>
                        <p className="text-sm text-muted-foreground pt-2">
                            © {currentYear} Grade Calculator. All rights reserved.
                        </p>
                    </div>

                    {/* Grade Calculators Column */}
                    <div className="space-y-4">
                        <Link href="/grade-calculators">
                            <h3 className="font-semibold text-sm hover:text-primary transition-colors cursor-pointer">
                                Grade Calculators
                            </h3>
                        </Link>
                        <ul className="space-y-3">
                            {gradeCalculators.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* GPA Calculators Column */}
                    <div className="space-y-4">
                        <Link href="/gpa-calculators">
                            <h3 className="font-semibold text-sm hover:text-primary transition-colors cursor-pointer">
                                GPA Calculators
                            </h3>
                        </Link>
                        <ul className="space-y-3">
                            {gpaCalculators.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CGPA Converters Column */}
                    <div className="space-y-4">
                        <Link href="/cgpa-converters">
                            <h3 className="font-semibold text-sm hover:text-primary transition-colors cursor-pointer">
                                CGPA Converters
                            </h3>
                        </Link>
                        <ul className="space-y-3">
                            {cgpaConverters.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SGPA Converters Column */}
                    <div className="space-y-4">
                        <Link href="/sgpa-converters">
                            <h3 className="font-semibold text-sm hover:text-primary transition-colors cursor-pointer">
                                SGPA Converters
                            </h3>
                        </Link>
                        <ul className="space-y-3">
                            {sgpaConverters.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links Column */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-sm">Company</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}