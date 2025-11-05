"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, Trash2, Calculator, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface Semester {
  id: string;
  name: string;
  gpa: string;
  credits: string;
}

interface CountryConfig {
  name: string;
  scales: string[];
  defaultScale: string;
  typicalCredits: string;
  creditRange: string;
}

const COUNTRY_CONFIGS: Record<string, CountryConfig> = {
  india: {
    name: "India",
    scales: ["10.0", "5.0", "4.0"],
    defaultScale: "10.0",
    typicalCredits: "22-24 credits per semester",
    creditRange: "20-26"
  },
  us: {
    name: "United States",
    scales: ["4.0", "5.0"],
    defaultScale: "4.0",
    typicalCredits: "15-16 credits per semester",
    creditRange: "12-18"
  },
  uk: {
    name: "United Kingdom",
    scales: ["4.0", "5.0"],
    defaultScale: "4.0",
    typicalCredits: "60 credits per year (30 per semester)",
    creditRange: "20-40"
  },
  canada: {
    name: "Canada",
    scales: ["4.0", "4.3", "5.0"],
    defaultScale: "4.0",
    typicalCredits: "15 credits per semester",
    creditRange: "12-18"
  },
  australia: {
    name: "Australia",
    scales: ["7.0", "4.0"],
    defaultScale: "7.0",
    typicalCredits: "24 credits per semester",
    creditRange: "18-30"
  },
  pakistan: {
    name: "Pakistan",
    scales: ["4.0", "5.0"],
    defaultScale: "4.0",
    typicalCredits: "18-20 credits per semester",
    creditRange: "15-24"
  },
  germany: {
    name: "Germany",
    scales: ["5.0", "4.0"],
    defaultScale: "5.0",
    typicalCredits: "28-30 ECTS credits per semester",
    creditRange: "24-36"
  },
  singapore: {
    name: "Singapore",
    scales: ["5.0", "4.0"],
    defaultScale: "5.0",
    typicalCredits: "18-20 credits per semester",
    creditRange: "15-24"
  },
  malaysia: {
    name: "Malaysia",
    scales: ["4.0", "5.0"],
    defaultScale: "4.0",
    typicalCredits: "18-19 credits per semester",
    creditRange: "15-22"
  },
  philippines: {
    name: "Philippines",
    scales: ["5.0", "4.0", "1.0"],
    defaultScale: "5.0",
    typicalCredits: "21-22 credits per semester",
    creditRange: "18-24"
  },
  france: {
    name: "France",
    scales: ["20.0", "4.0"],
    defaultScale: "20.0",
    typicalCredits: "28-30 ECTS credits per semester",
    creditRange: "24-36"
  },
  netherlands: {
    name: "Netherlands",
    scales: ["10.0", "4.0"],
    defaultScale: "10.0",
    typicalCredits: "28-30 ECTS credits per semester",
    creditRange: "24-36"
  },
  saudiarabia: {
    name: "Saudi Arabia",
    scales: ["5.0", "4.0"],
    defaultScale: "5.0",
    typicalCredits: "17-18 credits per semester",
    creditRange: "15-21"
  },
  uae: {
    name: "United Arab Emirates",
    scales: ["4.0", "5.0"],
    defaultScale: "4.0",
    typicalCredits: "15-18 credits per semester",
    creditRange: "12-21"
  },
  china: {
    name: "China",
    scales: ["4.0", "5.0"],
    defaultScale: "4.0",
    typicalCredits: "20-25 credits per semester",
    creditRange: "18-28"
  },
  japan: {
    name: "Japan",
    scales: ["4.0", "5.0"],
    defaultScale: "4.0",
    typicalCredits: "20-22 credits per semester",
    creditRange: "16-26"
  },
  southkorea: {
    name: "South Korea",
    scales: ["4.5", "4.3", "4.0"],
    defaultScale: "4.5",
    typicalCredits: "18-21 credits per semester",
    creditRange: "15-24"
  },
  bangladesh: {
    name: "Bangladesh",
    scales: ["4.0", "5.0"],
    defaultScale: "4.0",
    typicalCredits: "15-18 credits per semester",
    creditRange: "12-21"
  },
  srilanka: {
    name: "Sri Lanka",
    scales: ["4.0", "4.2"],
    defaultScale: "4.0",
    typicalCredits: "15-18 credits per semester",
    creditRange: "12-21"
  },
  nepal: {
    name: "Nepal",
    scales: ["4.0", "5.0"],
    defaultScale: "4.0",
    typicalCredits: "18-20 credits per semester",
    creditRange: "15-24"
  },
  thailand: {
    name: "Thailand",
    scales: ["4.0"],
    defaultScale: "4.0",
    typicalCredits: "18-21 credits per semester",
    creditRange: "15-24"
  },
  vietnam: {
    name: "Vietnam",
    scales: ["4.0", "10.0"],
    defaultScale: "4.0",
    typicalCredits: "18-22 credits per semester",
    creditRange: "15-25"
  },
  indonesia: {
    name: "Indonesia",
    scales: ["4.0"],
    defaultScale: "4.0",
    typicalCredits: "20-24 credits per semester",
    creditRange: "18-26"
  },
  turkey: {
    name: "Turkey",
    scales: ["4.0"],
    defaultScale: "4.0",
    typicalCredits: "30 ECTS credits per semester",
    creditRange: "24-36"
  },
  egypt: {
    name: "Egypt",
    scales: ["4.0", "5.0"],
    defaultScale: "4.0",
    typicalCredits: "18-20 credits per semester",
    creditRange: "15-24"
  },
  nigeria: {
    name: "Nigeria",
    scales: ["5.0", "4.0"],
    defaultScale: "5.0",
    typicalCredits: "18-24 credits per semester",
    creditRange: "15-28"
  },
  southafrica: {
    name: "South Africa",
    scales: ["4.0", "5.0"],
    defaultScale: "4.0",
    typicalCredits: "60 credits per year (30 per semester)",
    creditRange: "24-36"
  },
  kenya: {
    name: "Kenya",
    scales: ["5.0", "4.0"],
    defaultScale: "5.0",
    typicalCredits: "15-18 credits per semester",
    creditRange: "12-21"
  },
  newzealand: {
    name: "New Zealand",
    scales: ["9.0", "4.0"],
    defaultScale: "9.0",
    typicalCredits: "60 credits per year (30 per semester)",
    creditRange: "24-40"
  },
  ireland: {
    name: "Ireland",
    scales: ["4.0"],
    defaultScale: "4.0",
    typicalCredits: "30 ECTS credits per semester",
    creditRange: "24-36"
  },
  spain: {
    name: "Spain",
    scales: ["10.0", "4.0"],
    defaultScale: "10.0",
    typicalCredits: "30 ECTS credits per semester",
    creditRange: "24-36"
  },
  italy: {
    name: "Italy",
    scales: ["30.0", "4.0"],
    defaultScale: "30.0",
    typicalCredits: "30 ECTS credits per semester",
    creditRange: "24-36"
  },
  sweden: {
    name: "Sweden",
    scales: ["VG/G", "4.0"],
    defaultScale: "4.0",
    typicalCredits: "30 ECTS credits per semester",
    creditRange: "24-36"
  },
  denmark: {
    name: "Denmark",
    scales: ["12.0", "4.0"],
    defaultScale: "12.0",
    typicalCredits: "30 ECTS credits per semester",
    creditRange: "24-36"
  },
  norway: {
    name: "Norway",
    scales: ["A-F", "4.0"],
    defaultScale: "4.0",
    typicalCredits: "30 ECTS credits per semester",
    creditRange: "24-36"
  },
  switzerland: {
    name: "Switzerland",
    scales: ["6.0", "4.0"],
    defaultScale: "6.0",
    typicalCredits: "30 ECTS credits per semester",
    creditRange: "24-36"
  },
  brazil: {
    name: "Brazil",
    scales: ["10.0", "4.0"],
    defaultScale: "10.0",
    typicalCredits: "20-24 credits per semester",
    creditRange: "18-28"
  },
  mexico: {
    name: "Mexico",
    scales: ["10.0", "4.0"],
    defaultScale: "10.0",
    typicalCredits: "18-24 credits per semester",
    creditRange: "15-28"
  },
  argentina: {
    name: "Argentina",
    scales: ["10.0", "4.0"],
    defaultScale: "10.0",
    typicalCredits: "20-24 credits per semester",
    creditRange: "18-28"
  },
  chile: {
    name: "Chile",
    scales: ["7.0", "4.0"],
    defaultScale: "7.0",
    typicalCredits: "18-24 credits per semester",
    creditRange: "15-28"
  },
  russia: {
    name: "Russia",
    scales: ["5.0", "4.0"],
    defaultScale: "5.0",
    typicalCredits: "30 credits per semester",
    creditRange: "24-36"
  },
  poland: {
    name: "Poland",
    scales: ["5.0", "4.0"],
    defaultScale: "5.0",
    typicalCredits: "30 ECTS credits per semester",
    creditRange: "24-36"
  },
  hongkong: {
    name: "Hong Kong",
    scales: ["4.0", "4.3"],
    defaultScale: "4.0",
    typicalCredits: "15 credits per semester",
    creditRange: "12-18"
  },
  taiwan: {
    name: "Taiwan",
    scales: ["4.0", "4.3"],
    defaultScale: "4.0",
    typicalCredits: "18-20 credits per semester",
    creditRange: "15-24"
  },
  israel: {
    name: "Israel",
    scales: ["100", "4.0"],
    defaultScale: "100",
    typicalCredits: "15-18 credits per semester",
    creditRange: "12-21"
  }
};

export function CGPACalculator() {
  const [country, setCountry] = useState<string>("us");
  const [scale, setScale] = useState<string>("4.0");
  const [semesters, setSemesters] = useState<Semester[]>([
    { id: "1", name: "Semester 1", gpa: "", credits: "" },
  ]);
  const [cgpa, setCgpa] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState<number>(0);

  // Load saved data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cgpa-calculator-data");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.country) setCountry(data.country);
        if (data.scale) setScale(data.scale);
        if (data.semesters && data.semesters.length > 0) {
          setSemesters(data.semesters);
        }
      } catch (e) {
        console.error("Error loading saved data:", e);
      }
    }
  }, []);

  // Update scale when country changes
  useEffect(() => {
    const config = COUNTRY_CONFIGS[country];
    if (config && !config.scales.includes(scale)) {
      setScale(config.defaultScale);
    }
  }, [country, scale]);

  // Save to localStorage whenever data changes
  useEffect(() => {
    const dataToSave = { country, scale, semesters };
    localStorage.setItem("cgpa-calculator-data", JSON.stringify(dataToSave));
  }, [country, scale, semesters]);

  const addSemester = () => {
    const newId = (semesters.length + 1).toString();
    setSemesters([
      ...semesters,
      { id: newId, name: `Semester ${newId}`, gpa: "", credits: "" },
    ]);
  };

  const removeSemester = (id: string) => {
    if (semesters.length > 1) {
      setSemesters(semesters.filter((sem) => sem.id !== id));
    } else {
      toast.error("You must have at least one semester");
    }
  };

  const updateSemester = (id: string, field: keyof Semester, value: string) => {
    setSemesters(
      semesters.map((sem) =>
        sem.id === id ? { ...sem, [field]: value } : sem
      )
    );
  };

  const validateInput = (gpa: string, credits: string): boolean => {
    const gpaNum = parseFloat(gpa);
    const creditsNum = parseFloat(credits);
    const maxScale = parseFloat(scale);

    if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > maxScale) {
      toast.error(`GPA must be between 0 and ${scale}`);
      return false;
    }

    if (isNaN(creditsNum) || creditsNum <= 0) {
      toast.error("Credits must be a positive number");
      return false;
    }

    return true;
  };

  const calculateCGPA = () => {
    let totalWeightedGPA = 0;
    let totalCreds = 0;
    let hasError = false;

    for (const semester of semesters) {
      if (!semester.gpa || !semester.credits) {
        toast.error(`Please fill in all fields for ${semester.name}`);
        hasError = true;
        break;
      }

      if (!validateInput(semester.gpa, semester.credits)) {
        hasError = true;
        break;
      }

      const gpa = parseFloat(semester.gpa);
      const credits = parseFloat(semester.credits);

      totalWeightedGPA += gpa * credits;
      totalCreds += credits;
    }

    if (!hasError && totalCreds > 0) {
      const calculatedCGPA = totalWeightedGPA / totalCreds;
      setCgpa(calculatedCGPA);
      setTotalCredits(totalCreds);
      toast.success("CGPA calculated successfully!");
    } else if (!hasError) {
      toast.error("Total credits must be greater than 0");
    }
  };

  const reset = () => {
    setSemesters([{ id: "1", name: "Semester 1", gpa: "", credits: "" }]);
    setCgpa(null);
    setTotalCredits(0);
    setCountry("us");
    setScale("4.0");
    localStorage.removeItem("cgpa-calculator-data");
    toast.success("Calculator reset successfully");
  };

  const getGradeClassification = (cgpa: number, scale: number): string => {
    const percentage = (cgpa / scale) * 100;

    if (percentage >= 85) return "Outstanding/Distinction";
    if (percentage >= 75) return "First Class/Excellent";
    if (percentage >= 60) return "Second Class/Good";
    if (percentage >= 50) return "Pass Class/Satisfactory";
    return "Fail/Below Average";
  };

  const convertToPercentage = (cgpa: number, scale: number): number => {
    // Standard formula: (CGPA / Scale) × 100
    // For 10.0 scale, some universities use: CGPA × 9.5
    if (scale === 10.0) {
      return cgpa * 9.5; // Common Indian conversion
    }
    return (cgpa / scale) * 100;
  };

  const currentConfig = COUNTRY_CONFIGS[country];

  return (
    <div className="space-y-6">
      {/* Country and Scale Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl font-bold">
            Select Your Country & Grading Scale
          </CardTitle>
          <CardDescription>
            Choose your country to get relevant credit information and grading
            scale
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="country" className="text-base sm:text-lg">
                Country
              </Label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {Object.entries(COUNTRY_CONFIGS)
                    .sort((a, b) => a[1].name.localeCompare(b[1].name))
                    .map(([key, config]) => (
                      <SelectItem key={key} value={key}>
                        {config.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="scale" className="text-base sm:text-lg">
                Grading Scale
              </Label>
              <Select value={scale} onValueChange={setScale}>
                <SelectTrigger id="scale">
                  <SelectValue placeholder="Select scale" />
                </SelectTrigger>
                <SelectContent>
                  {currentConfig.scales.map((scaleOption) => (
                    <SelectItem key={scaleOption} value={scaleOption}>
                      {scaleOption} Scale
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Typical Credits for {currentConfig.name}:</strong>{" "}
              {currentConfig.typicalCredits}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Semester Input Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl font-bold">
            Enter Semester Data
          </CardTitle>
          <CardDescription>
            Add your semester GPA and credits to calculate cumulative CGPA
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b text-sm sm:text-base">
                  <th className="text-left p-2 font-semibold">Semester</th>
                  <th className="text-left p-2 font-semibold">
                    GPA (Max {scale})
                  </th>
                  <th className="text-left p-2 font-semibold">Credits</th>
                  <th className="text-left p-2 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {semesters.map((semester) => (
                  <tr key={semester.id} className="border-b ">
                    <td className="p-2">
                      <Input
                        value={semester.name}
                        onChange={(e) =>
                          updateSemester(semester.id, "name", e.target.value)
                        }
                        placeholder="Semester name"
                      />
                    </td>
                    <td className="p-2">
                      <Input
                        type="number"
                        step="0.01"
                        min="0"
                        max={scale}
                        value={semester.gpa}
                        onChange={(e) =>
                          updateSemester(semester.id, "gpa", e.target.value)
                        }
                        placeholder="e.g., 3.5"
                      />
                    </td>
                    <td className="p-2">
                      <Input
                        type="number"
                        step="1"
                        min="0"
                        value={semester.credits}
                        onChange={(e) =>
                          updateSemester(semester.id, "credits", e.target.value)
                        }
                        placeholder="e.g., 18"
                      />
                    </td>
                    <td className="p-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeSemester(semester.id)}
                        disabled={semesters.length === 1}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-2">
            <Button onClick={addSemester} variant="outline" className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Add Semester
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Calculate Buttons */}
      <div className="flex gap-4">
        <Button onClick={calculateCGPA} className="flex-1">
          <Calculator className="mr-2 h-4 w-4" />
          Calculate CGPA
        </Button>
        <Button onClick={reset} variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>

      {/* Results */}
      {cgpa !== null && (
        <Card className="border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="text-green-700 dark:text-green-400">
              Your CGPA Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  Cumulative GPA (CGPA)
                </p>
                <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                  {cgpa.toFixed(2)} / {scale}
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  Total Credits Completed
                </p>
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  {totalCredits}
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  Percentage Equivalent
                </p>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">
                  {convertToPercentage(cgpa, parseFloat(scale)).toFixed(2)}%
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  Grade Classification
                </p>
                <p className="text-lg font-bold text-amber-700 dark:text-amber-400">
                  {getGradeClassification(cgpa, parseFloat(scale))}
                </p>
              </div>
            </div>

            {/* Detailed Semester Breakdown */}
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Semester Breakdown</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-2">Semester</th>
                      <th className="text-left p-2">GPA</th>
                      <th className="text-left p-2">Credits</th>
                      <th className="text-left p-2">Weighted GPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {semesters.map((sem) => {
                      const gpa = parseFloat(sem.gpa) || 0;
                      const credits = parseFloat(sem.credits) || 0;
                      const weighted = gpa * credits;
                      return (
                        <tr key={sem.id} className="border-b">
                          <td className="p-2">{sem.name}</td>
                          <td className="p-2">{gpa.toFixed(2)}</td>
                          <td className="p-2">{credits}</td>
                          <td className="p-2">{weighted.toFixed(2)}</td>
                        </tr>
                      );
                    })}
                    <tr className="font-semibold bg-muted">
                      <td className="p-2">Total</td>
                      <td className="p-2">-</td>
                      <td className="p-2">{totalCredits}</td>
                      <td className="p-2">
                        {semesters
                          .reduce((sum, sem) => {
                            const gpa = parseFloat(sem.gpa) || 0;
                            const credits = parseFloat(sem.credits) || 0;
                            return sum + gpa * credits;
                          }, 0)
                          .toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
