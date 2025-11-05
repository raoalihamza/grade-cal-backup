import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, GraduationCap, Percent, TrendingUp } from "lucide-react";

interface RelatedTool {
  title: string;
  description: string;
  href: string;
  icon?: "calculator" | "graduation" | "percent" | "trending";
}

interface RelatedToolsProps {
  tools: RelatedTool[];
  title?: string;
}

const iconMap = {
  calculator: Calculator,
  graduation: GraduationCap,
  percent: Percent,
  trending: TrendingUp,
};

export function RelatedTools({ tools, title = "Related Calculators" }: RelatedToolsProps) {
  return (
    <section className="max-w-4xl mx-auto space-y-6 py-12 md:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white mb-2">
            {title}
          </h2>
          <p className="text-gray-400 text-lg">
            Explore more tools to help with your academic calculations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon ? iconMap[tool.icon] : Calculator;

            return (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex flex-col h-full"
              >
                <CardHeader className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    {/* <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div> */}
                    <CardTitle className="text-lg text-white leading-tight">
                      {tool.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 pb-6">
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Link href={tool.href}>
                      Try This Tool
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
