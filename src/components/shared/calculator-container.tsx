"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { loadFromLocalStorage } from "@/lib/utils";


interface CalculatorContainerProps {
  title?: string;
  description?: string;
  storageKey?: string;
  children: React.ReactNode;
}

export default function CalculatorContainer({
  title,
  description,
  storageKey,
  children,
}: CalculatorContainerProps) {
  const [hasSavedData, setHasSavedData] = useState(false);

  // Check if there's saved data on mount
  useEffect(() => {
    const saved = loadFromLocalStorage(storageKey);
    setHasSavedData(!!saved);
  }, [storageKey]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground mt-2">{description}</p>
      </div>

      <Card className="calculator-container">
        <CardContent className="pt-6 !px-2 sm:!px-6">{children}</CardContent>
      </Card>
    </motion.div>
  );
}
