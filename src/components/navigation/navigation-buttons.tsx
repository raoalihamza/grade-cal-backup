"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Calculator,
  FileSpreadsheet,
  GraduationCap,
  PlusCircle,
  RefreshCw,
  ChevronDown,
  ArrowLeftRight,
  TrendingDown,
  Percent,
  TrendingUp,
  ArrowDownUp,
  BarChart3,
  MoreHorizontal,
  BookOpen,
} from "lucide-react";
import { useState } from "react";

// Tool definitions with SEO keywords for dropdowns and technical descriptions for popover
const toolsData = {
  easyGrader: {
    href: "/easy-grader",
    label: "Easy Grader",
    icon: Calculator,
    keyword: "easy grade calculator online",
    description: "Easy Grade Calculator Online",
    isNew: false,
  },
  averageGrade: {
    href: "/average-grade-calculator",
    label: "Average Grade Calculator",
    icon: FileSpreadsheet,
    keyword: "weighted grade calculator",
    description: "Average Weighted Grade Calculator",
    isNew: false,
  },
  finalGrade: {
    href: "/final-grade-calculator",
    label: "Final Grade Calculator",
    icon: GraduationCap,
    keyword: "final grade calculator",
    description: "Final Grade Calculator to Find Required Exam Scores",
    isNew: false,
  },
  marksPercentage: {
    href: "/marks-percentage-calculator",
    label: "Marks Percentage Calculator",
    icon: Percent,
    keyword: "marks percentage calculator",
    description: "Convert marks to percentage",
    isNew: false,
  },
  gpa: {
    href: "/gpa-calculator",
    label: "GPA Calculator",
    icon: PlusCircle,
    keyword: "term gpa calculator",
    description: "Calculate term and cumulative GPA",
    isNew: false,
  },
  cgpa: {
    href: "/cgpa-calculator",
    label: "CGPA Calculator",
    icon: BarChart3,
    keyword: "semester cgpa calculator",
    description: "Semester CGPA Calculator",
    isNew: true,
  },
  percentageToCgpa: {
    href: "/percentage-to-cgpa-calculator",
    label: "Percentage to CGPA",
    icon: ArrowLeftRight,
    keyword: "percentage to cgpa converter",
    description: "Convert percentage to CGPA",
    isNew: false,
  },
  cgpaToPercentage: {
    href: "/cgpa-to-percentage-calculator",
    label: "CGPA to Percentage",
    icon: TrendingUp,
    keyword: "cgpa to percentage converter",
    description: "Convert CGPA to percentage",
    isNew: true,
  },
  sgpaToCgpa: {
    href: "/sgpa-to-cgpa-calculator",
    label: "SGPA to CGPA",
    icon: RefreshCw,
    keyword: "online sgpa to cgpa calculator",
    description: "Online SGPA to CGPA Calculator",
    isNew: false,
  },
  sgpaToPercentage: {
    href: "/sgpa-to-percentage-calculator",
    label: "SGPA to Percentage",
    icon: TrendingDown,
    keyword: "sgpa to percentage calculator",
    description: "Online SGPA to Percentage Calculator",
    isNew: false,
  },
  percentageToSgpa: {
    href: "/percentage-to-sgpa-calculator",
    label: "Percentage to SGPA",
    icon: ArrowDownUp,
    keyword: "percentage to sgpa converter",
    description: "Convert percentage to SGPA",
    isNew: true,
  },
};

// Category definitions with tools
const categories = {
  gradeCalculators: {
    name: "Grade Calculators",
    href: "/grade-calculators",
    tools: [
      toolsData.easyGrader,
      toolsData.averageGrade,
      toolsData.finalGrade,
      toolsData.marksPercentage,
    ],
  },
  gpaCalculators: {
    name: "GPA Calculators",
    href: "/gpa-calculators",
    tools: [toolsData.gpa, toolsData.cgpa],
  },
  cgpaConverters: {
    name: "CGPA Converters",
    href: "/cgpa-converters",
    tools: [
      toolsData.percentageToCgpa,
      toolsData.cgpaToPercentage,
      toolsData.sgpaToCgpa,
    ],
  },
  sgpaConverters: {
    name: "SGPA Converters",
    href: "/sgpa-converters",
    tools: [toolsData.sgpaToPercentage, toolsData.percentageToSgpa],
  },
};

const navigationItems = Object.values(categories);

export default function NavigationButtons({ isMobile = false }) {
  const pathname = usePathname();
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  // Helper function to check if any tool in a category is active
  const isCategoryActive = (
    category: (typeof categories)[keyof typeof categories]
  ) => {
    return category.tools.some((tool) => tool.href === pathname);
  };

  // Helper function to check if any category has active tool
  const isAnyToolActive = () => {
    return Object.values(categories).some((cat) => isCategoryActive(cat));
  };

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-2">
        {/* Categories for mobile */}
        {Object.values(categories).map((category) => (
          <div key={category.name} className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground px-3 pt-2">
              {category.name}
            </h3>
            {category.tools.map((tool) => (
              <Link key={tool.href} href={tool.href}>
                <Button
                  variant={pathname === tool.href ? "secondary" : "ghost"}
                  className="w-full justify-start text-left"
                >
                  <tool.icon className="mr-2 h-4 w-4" />
                  {tool.label}
                  {tool.isNew && (
                    <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                      New
                    </span>
                  )}
                </Button>
              </Link>
            ))}
          </div>
        ))}

        <div className="pt-2 border-t">
          <Link href="/blog">
            <Button
              variant={
                pathname === "/blog" || pathname.startsWith("/blog/")
                  ? "secondary"
                  : "ghost"
              }
              className="w-full justify-start text-left"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex items-center space-x-1">
        {/* Individual category dropdowns */}
        {Object.values(categories).map((category) => {
          const isActive = isCategoryActive(category);

          return (
            <DropdownMenu key={category.name}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className="flex items-center gap-1"
                >
                  {category.name}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {category.tools.map((tool, index) => (
                  <div key={tool.href}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <DropdownMenuItem asChild>
                          <Link
                            href={tool.href}
                            className="flex items-start gap-3 p-3 cursor-pointer"
                          >
                            <tool.icon className="h-4 w-4 mt-0.5 text-muted-foreground" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">
                                  {tool.label}
                                </span>
                                {tool.isNew && (
                                  <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                                    New
                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        align="end"
                        className="max-w-xs font-normal"
                      >
                        <p>
                          {tool.keyword
                            .split(" ")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ")}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                    {index < category.tools.length - 1 && (
                      <DropdownMenuSeparator />
                    )}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        })}

        {/* Blog Link */}
        <Link href="/blog">
          <Button
            variant={
              pathname === "/blog" || pathname.startsWith("/blog/")
                ? "secondary"
                : "ghost"
            }
            className="flex items-center gap-1"
          >
            Blogs
          </Button>
        </Link>

        {/* More menu with all categories in columns */}
        <DropdownMenu open={isMoreOpen} onOpenChange={setIsMoreOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-1">
              More
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[800px] p-4">
            <div className="grid grid-cols-4 gap-6">
              {Object.values(categories).map((category) => (
                <div key={category.name} className="space-y-3">
                  <Link
                    href={category.href}
                    onClick={() => setIsMoreOpen(false)}
                    className="block"
                  >
                    <h3 className="font-semibold text-sm text-foreground border-b pb-2 hover:text-primary transition-colors cursor-pointer">
                      {category.name}
                    </h3>
                  </Link>
                  <div className="space-y-1">
                    {category.tools.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        onClick={() => setIsMoreOpen(false)}
                        className="block p-2 rounded-md hover:bg-accent transition-colors group"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-medium group-hover:text-foreground">
                              {tool.label}
                            </span>
                            {tool.isNew && (
                              <span className="rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-medium text-primary-foreground">
                                New
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {tool.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </TooltipProvider>
  );
}
