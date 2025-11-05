"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CalculatorContainer from "@/components/shared/calculator-container";
import PercentageCalculator from "@/components/calculators/average-grade/percentage-calculator";
import LettersCalculator from "@/components/calculators/average-grade/letters-calculator";
import PointsCalculator from "@/components/calculators/average-grade/points-calculator";

// Type definitions
interface GradeRow {
  id: number;
  value: string;
  weight: string;
}

interface PointsGradeRow {
  id: number;
  value: string;
  maxValue: string;
  weight: string;
}

interface CalculatorData {
  rows: GradeRow[];
  targetGrade?: string;
}

interface PointsCalculatorData {
  rows: PointsGradeRow[];
  targetGrade?: string;
}

const AverageGradeCalculator = () => {
  const [activeTab, setActiveTab] = useState("percentage");

  // State management for the active calculator
  const [percentageData, setPercentageData] = useState<CalculatorData | null>(
    null
  );
  const [lettersData, setLettersData] = useState<CalculatorData | null>(null);
  const [pointsData, setPointsData] = useState<PointsCalculatorData | null>(
    null
  );

  return (
    <section>
      <CalculatorContainer
        storageKey={`average-${activeTab}`}
      >
        <Tabs
          defaultValue="percentage"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="percentage">Percentage</TabsTrigger>
            <TabsTrigger value="letters">Letters</TabsTrigger>
            <TabsTrigger value="points">Points</TabsTrigger>
          </TabsList>

          <TabsContent value="percentage">
            <PercentageCalculator
              onDataChange={setPercentageData}
              data={percentageData}
            />
          </TabsContent>

          <TabsContent value="letters">
            <LettersCalculator
              onDataChange={setLettersData}
              data={lettersData}
            />
          </TabsContent>

          <TabsContent value="points">
            <PointsCalculator onDataChange={setPointsData} data={pointsData} />
          </TabsContent>
        </Tabs>
      </CalculatorContainer>
    </section>
  );
};

export default AverageGradeCalculator;
