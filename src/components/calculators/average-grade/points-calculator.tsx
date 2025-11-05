"use client"

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import GradeRow from '@/components/shared/grade-row'
import ResultsDisplay from '@/components/shared/results-display'
import { calculateWeightedAverage, loadFromLocalStorage, percentageToLetter, type PointsCalculatorData, type PointsGradeRow } from '@/lib/utils'
import { PlusCircle, RotateCcw, AlertTriangle, Trash2 } from 'lucide-react'
import { useToast } from '@/components/ui/toast'

interface PointsCalculatorProps {
  onDataChange?: (data: PointsCalculatorData) => void;
  data?: PointsCalculatorData | null;
}

export default function PointsCalculator({ onDataChange, data }: PointsCalculatorProps) {
    const { toast } = useToast()
    const [rows, setRows] = useState([
        { id: 1, value: '', maxValue: '100', weight: '10' },
        { id: 2, value: '', maxValue: '100', weight: '10' },
        { id: 3, value: '', maxValue: '100', weight: '10' },
        { id: 4, value: '', maxValue: '100', weight: '10' },
        { id: 5, value: '', maxValue: '100', weight: '10' },
        { id: 6, value: '', maxValue: '100', weight: '10' },
        { id: 7, value: '', maxValue: '100', weight: '10' },
        { id: 8, value: '', maxValue: '100', weight: '10' },
    ])

    const [averageGrade, setAverageGrade] = useState<number | null>(null)
    const [totalPoints, setTotalPoints] = useState<number | null>(null)
    const [maxTotalPoints, setMaxTotalPoints] = useState<number | null>(null)
    const [weightSum, setWeightSum] = useState<number>(0)
    const [hasWeightError, setHasWeightError] = useState<boolean>(false)
    const [hasValidationError, setHasValidationError] = useState<boolean>(false)

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
        const savedData = loadFromLocalStorage<PointsCalculatorData>('average-points')
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

    // Validate inputs and weight sum
    useEffect(() => {
        const validRows = rows?.filter(row => row.weight !== '')
        const sum = validRows?.reduce((total, row) => total + parseFloat(row.weight || '0'), 0) || 0
        setWeightSum(sum)
        setHasWeightError(sum > 100)

        // Check for validation errors
        let hasError = false
        rows.forEach(row => {
            if (row.value && row.maxValue && parseFloat(row.value) > parseFloat(row.maxValue)) {
                hasError = true
            }
        })
        setHasValidationError(hasError)

        if (sum > 100) {
            toast({
                title: "Weight Error",
                description: "Total weights exceed 100%. Please adjust your weights.",
                variant: "destructive",
            })
        }
    }, [rows, toast])

    const handleRowChange = (rowNumber: number, field: keyof PointsGradeRow, value: string) => {
        setRows(prevRows =>
            prevRows.map(row =>
                row.id === rowNumber ? { ...row, [field]: value } : row
            )
        )
    }

    const handleMaxValueChange = (rowNumber: number, value: string) => {
        setRows(prevRows =>
            prevRows.map(row =>
                row.id === rowNumber ? { ...row, maxValue: value } : row
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
            { id: newId, value: '', maxValue: '100', weight: '10' }
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
        const validRows = rows.filter(row =>
            row.value !== '' && row.maxValue !== '' && row.weight !== ''
        )

        if (validRows.length === 0) {
            setAverageGrade(null)
            setTotalPoints(null)
            setMaxTotalPoints(null)
            return
        }

        // Calculate percentage for each row
        const percentages = validRows.map(row =>
            (parseFloat(row.value) / parseFloat(row.maxValue)) * 100
        )

        // Calculate total points and max points
        const points = validRows.reduce((sum, row) => sum + parseFloat(row.value), 0)
        const maxPoints = validRows.reduce((sum, row) => sum + parseFloat(row.maxValue), 0)

        const weights = validRows.map(row => parseFloat(row.weight))
        const average = calculateWeightedAverage(percentages, weights)

        setAverageGrade(average)
        setTotalPoints(points)
        setMaxTotalPoints(maxPoints)
    }

    const handleReset = () => {
        setRows([
            { id: 1, value: '', maxValue: '100', weight: '10' },
            { id: 2, value: '', maxValue: '100', weight: '10' },
        ])
        setAverageGrade(null)
        setTotalPoints(null)
        setMaxTotalPoints(null)
        setWeightSum(0)
        setHasWeightError(false)
        setHasValidationError(false)
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
                <h3 className="text-lg font-medium mb-4">Enter points and weights:</h3>

                <div className="grid grid-cols-12 gap-2 mb-2 font-medium">
                    <div className="col-span-1 text-center">#</div>
                    <div className="col-span-4">Grade (points)</div>
                    <div className="col-span-3">Max Grade</div>
                    <div className="col-span-3">Weight</div>
                    <div className="col-span-1"></div>
                </div>

                {Array.isArray(rows) && rows.length > 0 ? rows.map((row) => (
                    <div key={row.id} className="grid grid-cols-12 gap-2 mb-3 items-center">
                        <div className="col-span-1 text-center font-medium text-muted-foreground">
                            {row.id}
                        </div>
                        <div className="col-span-4">
                            <Input
                                type="number"
                                value={row.value}
                                onChange={(e) => {
                                    const value = e.target.value
                                    const maxValue = parseFloat(row.maxValue)
                                    if (value === '' || parseFloat(value) <= maxValue) {
                                        handleRowChange(row.id, 'value', value)
                                    } else {
                                        toast({
                                            title: "Invalid Input",
                                            description: `Points cannot exceed max grade (${row.maxValue}).`,
                                            variant: "destructive",
                                        })
                                    }
                                }}
                                min="0"
                                step="0.1"
                                className="w-full"
                            />
                        </div>
                        <div className="col-span-3">
                            <Input
                                type="number"
                                value={row.maxValue}
                                onChange={(e) => {
                                    const value = e.target.value
                                    if (value === '' || parseFloat(value) > 0) {
                                        handleMaxValueChange(row.id, value)
                                    }
                                }}
                                min="0.1"
                                step="0.1"
                                className="w-full"
                            />
                        </div>
                        <div className="col-span-3">
                            <div className="flex items-center">
                                <Input
                                    type="number"
                                    value={row.weight}
                                    onChange={(e) => handleRowChange(row.id, 'weight', e.target.value)}
                                    min="0"
                                    max="100"
                                    step="1"
                                    className="w-full"
                                />
                                <span className="ml-2 text-sm text-muted-foreground">%</span>
                            </div>
                        </div>
                        {rows.length > 2 && (
                            <div className="col-span-1 flex justify-center">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleRemoveRow(row.id)}
                                    className="h-8 w-8 text-red-500 hover:text-red-700"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        )}
                    </div>
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

                {/* Validation feedback */}
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
                    {hasValidationError && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                            <AlertTriangle className="h-3 w-3" />
                            Some points exceed maximum grades
                        </div>
                    )}
                </div>
            </div>

            {averageGrade !== null && (
                <div className="space-y-4">
                    <ResultsDisplay
                        title="Average Grade"
                        result={averageGrade}
                        showLetter={true}
                        isSuccess={averageGrade >= 70}
                        customMessage={`Based on ${rows.length} assignments`}
                    />

                    {totalPoints !== null && maxTotalPoints !== null && (
                        <ResultsDisplay
                            title="Total Points"
                            result={`${totalPoints.toFixed(1)} / ${maxTotalPoints.toFixed(1)}`}
                            units=""
                            isSuccess={totalPoints / maxTotalPoints >= 0.7}
                            customMessage={`Points earned out of total possible`}
                        />
                    )}
                </div>
            )}
        </div>
    )
}