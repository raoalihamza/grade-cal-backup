"use client"

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import GradeRowComponent from '@/components/shared/grade-row'
import ResultsDisplay from '@/components/shared/results-display'
import { calculateWeightedAverage, loadFromLocalStorage, letterToPercentage, percentageToLetter, type CalculatorData, type GradeRow } from '@/lib/utils'
import { PlusCircle, RotateCcw, AlertTriangle } from 'lucide-react'
import { useToast } from '@/components/ui/toast'

interface LettersCalculatorProps {
  onDataChange?: (data: CalculatorData) => void;
  data?: CalculatorData | null;
}

export default function LettersCalculator({ onDataChange, data }: LettersCalculatorProps) {
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
    const [letterGrade, setLetterGrade] = useState<string>('')
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
            });
        }
    }, [rows, onDataChange]);

    // Load saved data on mount
    useEffect(() => {
        const savedData = loadFromLocalStorage<CalculatorData>('average-letters')
        if (savedData && savedData.rows) {
            setRows(savedData.rows)
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
        const validRows = rows.filter(row => row.value !== '' && row.weight !== '')

        if (validRows.length === 0) {
            setAverageGrade(null)
            setLetterGrade('')
            return
        }

        // Convert letter grades to percentages for calculation
        const grades = validRows.map(row => letterToPercentage(row.value))
        const weights = validRows.map(row => parseFloat(row.weight))

        const average = calculateWeightedAverage(grades, weights)
        setAverageGrade(average)

        // Convert percentage back to letter
        setLetterGrade(percentageToLetter(average))
    }

    const handleReset = () => {
        setRows([
            { id: 1, value: '', weight: '10' },
            { id: 2, value: '', weight: '10' },
        ])
        setAverageGrade(null)
        setLetterGrade('')
        setWeightSum(0)
        setHasWeightError(false)
        toast({
            title: "Calculator Reset",
            description: "All data has been cleared.",
        })
    }

    const handleSave = () => {
        return {
            rows
        }
    }

    return (
        <div>
            <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Enter grades and weights:</h3>

                <div className="grid grid-cols-12 gap-2 mb-2 font-medium">
                    <div className="col-span-1 text-center">#</div>
                    <div className="col-span-5 sm:col-span-6">Grade (letter)</div>
                    <div className="col-span-6 sm:col-span-5">Weight</div>
                </div>

                {Array.isArray(rows) && rows.length > 0 ? rows.map((row) => (
                    <GradeRowComponent
                        key={row.id}
                        rowNumber={row.id}
                        value={row.value}
                        weight={row.weight}
                        onChange={handleRowChange}
                        onRemove={handleRemoveRow}
                        type="letter"
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
                        onClick={handleReset}
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

            {averageGrade !== null && (
                <div className="space-y-4">
                    <ResultsDisplay
                        title="Average Grade"
                        result={averageGrade}
                        showLetter={false}
                        isSuccess={averageGrade >= 70}
                        customMessage={`Based on ${rows.length} grades`}
                    />

                    <ResultsDisplay
                        title="Letter Grade"
                        result={letterGrade}
                        units=""
                        isSuccess={!!letterGrade && letterGrade <= 'C'}
                        customMessage={`Grade based on ${averageGrade.toFixed(1)}%`}
                    />
                </div>
            )}
        </div>
    )
}