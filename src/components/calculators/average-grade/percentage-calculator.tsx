"use client"

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import GradeRowComponent from '@/components/shared/grade-row'
import ResultsDisplay from '@/components/shared/results-display'
import { calculateWeightedAverage, loadFromLocalStorage, formatPercentage, type CalculatorData, type GradeRow } from '@/lib/utils'
import { PlusCircle, RotateCcw, AlertTriangle } from 'lucide-react'
import { useToast } from '@/components/ui/toast'

interface PercentageCalculatorProps {
  onDataChange?: (data: CalculatorData) => void;
  data?: CalculatorData | null;
}

export default function PercentageCalculator({ onDataChange, data }: PercentageCalculatorProps) {
    const { toast } = useToast()
    const [rows, setRows] = useState([
        { id: 1, value: '', weight: '10' },
        { id: 2, value: '', weight: '10' },
        { id: 3, value: '', weight: '10' },
        { id: 4, value: '', weight: '10' },
        { id: 5, value: '', weight: '10' },
        { id: 6, value: '', weight: '10' },
        { id: 7, value: '', weight: '10' },
        { id: 8, value: '', weight: '10' },
    ])

    const [averageGrade, setAverageGrade] = useState<number | null>(null)
    const [targetGrade, setTargetGrade] = useState<string>('')
    const [additionalGradeNeeded, setAdditionalGradeNeeded] = useState<number | null>(null)
    const [weightSum, setWeightSum] = useState<number>(0)
    const [hasWeightError, setHasWeightError] = useState<boolean>(false)

    useEffect(() => {
        if (data && data.rows && Array.isArray(data.rows) && data.rows.length > 0) {
            setRows(data.rows);
        }
    }, [data]);

    useEffect(() => {
        if (onDataChange) {
            onDataChange({
                rows,
                targetGrade,
            });
        }
    }, [rows, targetGrade]);

    // Load saved data on mount
    useEffect(() => {
        const savedData = loadFromLocalStorage<CalculatorData>('average-percentage')
        if (savedData) {
            setRows(savedData.rows)
            if (savedData.targetGrade) {
                setTargetGrade(savedData.targetGrade)
            }
        }
    }, [])

    // Debounced calculation to improve performance
    const debouncedCalculateAverage = useCallback(() => {
        const timeoutId = setTimeout(() => {
            calculateAverage()
        }, 300)
        return () => clearTimeout(timeoutId)
    }, [rows])

    // Calculate average whenever rows change (with debouncing)
    useEffect(() => {
        const cleanup = debouncedCalculateAverage()
        return cleanup
    }, [debouncedCalculateAverage])

    // Recalculate additional grade needed when target grade changes
    useEffect(() => {
        if (averageGrade !== null && targetGrade) {
            calculateAdditionalGradeNeeded(averageGrade, parseFloat(targetGrade))
        } else {
            setAdditionalGradeNeeded(null)
        }
    }, [targetGrade, averageGrade])

    // Validate weight sum
    useEffect(() => {
        const validRows = rows?.filter(row => row.weight !== '')
        const sum = validRows?.reduce((total, row) => total + parseFloat(row.weight || '0'), 0) || 0
        setWeightSum(sum)
        setHasWeightError(sum > 100)

        if (sum > 100) {
            toast({
                title: "Weight Error",
                description: "Total weights exceed 100%. Please adjust your weights.",
                variant: "destructive",
            })
        }
    }, [rows, toast])

    const handleRowChange = (rowNumber: number, field: keyof GradeRow, value: string) => {
        setRows(prevRows =>
            prevRows.map(row =>
                row.id === rowNumber ? { ...row, [field]: value } : row
            )
        )
    }

    const handleAddRow = () => {
        if (rows.length >= 15) {
            toast({
                title: "Maximum Limit Reached",
                description: "You can add up to 15 grades only.",
                variant: "destructive",
            })
            return
        }

        const newId = rows.length > 0 ? Math.max(...rows.map(row => row.id)) + 1 : 1

        setRows(prevRows => [
            ...prevRows,
            { id: newId, value: '', weight: '10' }
        ])
    }

    const handleClearAll = () => {
        setRows([
            { id: 1, value: '', weight: '10' },
            { id: 2, value: '', weight: '10' },
        ])
        setTargetGrade('')
        setAverageGrade(null)
        setAdditionalGradeNeeded(null)
        toast({
            title: "Calculator Cleared",
            description: "All data has been reset.",
        })
    }

    const handleRemoveRow = (id: number) => {
        if (rows.length <= 2) {
            toast({
                title: "Minimum Requirement",
                description: "At least 2 grades are required for calculation.",
                variant: "destructive",
            })
            return
        }
        setRows(prevRows => prevRows.filter(row => row.id !== id))
    }

    const calculateAverage = () => {
        // Filter out rows with empty values
        const validRows = rows?.filter(row => row.value !== '' && row.weight !== '')

        if (validRows?.length === 0) {
            setAverageGrade(null)
            return
        }

        const grades = validRows?.map(row => parseFloat(row.value))
        const weights = validRows?.map(row => parseFloat(row.weight))

        const average = calculateWeightedAverage(grades, weights)
        setAverageGrade(average)
    }

    const calculateAdditionalGradeNeeded = (currentAverage: number, target: number) => {
        // Calculate total weight of current grades
        const validRows = rows?.filter(row => row.value !== '' && row.weight !== '')
        const currentTotalWeight = validRows?.reduce((sum, row) => sum + parseFloat(row.weight), 0)

        // Assuming the remaining weight is for the additional grade
        const remainingWeight = 100 - currentTotalWeight

        if (remainingWeight <= 0) {
            setAdditionalGradeNeeded(null)
            return
        }

        // Fixed formula: (target - (currentAverage * currentTotalWeight) / 100) * 100 / remainingWeight
        // This correctly calculates what grade is needed on the remaining weight to achieve target
        const neededGrade = (target * 100 - currentAverage * currentTotalWeight) / remainingWeight

        setAdditionalGradeNeeded(Math.max(0, Math.min(100, neededGrade)))
    }

    return (
        <div>
            <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Enter grades and weights:</h3>

                <div className="grid grid-cols-12 gap-2 mb-2 font-medium">
                    <div className="col-span-1 text-center">#</div>
                    <div className="col-span-5 sm:col-span-6">Grade (%)</div>
                    <div className="col-span-5 sm:col-span-4">Weight</div>
                    <div className="col-span-1"></div>
                </div>

                {Array.isArray(rows) && rows.length > 0 ? rows.map((row) => (
                    <GradeRowComponent
                        key={row.id}
                        rowNumber={row.id}
                        value={row.value}
                        weight={row.weight}
                        onChange={handleRowChange}
                        onRemove={handleRemoveRow}
                        type="percentage"
                        showRemove={rows.length > 2}
                    />
                )) : <p>No rows to display</p>}

                <div className="flex flex-wrap gap-2 mt-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleAddRow}
                    >
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Row
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleClearAll}
                    >
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Clear All
                    </Button>
                </div>

                {/* Weight validation feedback */}
                <div className="mt-4 p-3 bg-secondary/40 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                        <span>Total Weight:</span>
                        <span className={`font-medium ${hasWeightError ? 'text-red-500' : weightSum === 100 ? 'text-green-500' : 'text-orange-500'}`}>
                            {weightSum.toFixed(1)}%
                        </span>
                    </div>
                    {hasWeightError && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                            <AlertTriangle className="h-3 w-3" />
                            Weights exceed 100%
                        </div>
                    )}
                    {weightSum < 100 && weightSum > 0 && (
                        <div className="text-orange-500 text-xs mt-1">
                            Remaining weight: {(100 - weightSum).toFixed(1)}%
                        </div>
                    )}
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Find additional grade needed to get average grade of</h3>
                <div className="flex items-center">
                    <input
                        type="number"
                        value={targetGrade}
                        onChange={(e) => setTargetGrade(e.target.value)}
                        className="w-24 rounded-md border border-input bg-background px-3 py-2 text-sm"
                        min="0"
                        max="100"
                        step="1"
                    />
                    <span className="ml-2 text-sm text-muted-foreground">%</span>
                </div>
            </div>

            {averageGrade !== null && (
                <ResultsDisplay
                    title="Average Grade"
                    result={averageGrade}
                    showLetter={true}
                    isSuccess={averageGrade >= 70}
                    customMessage={`Based on ${rows.length} assignments`}
                />
            )}

            {additionalGradeNeeded !== null && targetGrade && (
                <ResultsDisplay
                    title="Additional grade needed:"
                    result={additionalGradeNeeded}
                    showLetter={true}
                    isSuccess={additionalGradeNeeded <= 100}
                    customMessage={additionalGradeNeeded > 100 ? "Target grade may not be achievable" : "Additional grade needed to reach target"}
                />
            )}
        </div>
    )
}