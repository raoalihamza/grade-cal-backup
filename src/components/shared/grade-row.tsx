"use client"

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Trash2 } from 'lucide-react'

interface GradeRowProps {
    rowNumber: number;
    value: string;
    weight: string;
    onChange: (rowNumber: number, field: 'value' | 'weight', value: string) => void;
    onRemove?: (rowNumber: number) => void;
    type?: string;
    maxGrade?: number | null;
    letterOptions?: { value: string; label: string }[];
    showRemove?: boolean;
}

export default function GradeRow({
    rowNumber,
    value,
    weight,
    onChange,
    onRemove,
    type = 'percentage',
    maxGrade = null,
    showRemove = false,
    letterOptions = [
        { value: 'A+', label: 'A+' },
        { value: 'A', label: 'A' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B', label: 'B' },
        { value: 'B-', label: 'B-' },
        { value: 'C+', label: 'C+' },
        { value: 'C', label: 'C' },
        { value: 'C-', label: 'C-' },
        { value: 'D+', label: 'D+' },
        { value: 'D', label: 'D' },
        { value: 'D-', label: 'D-' },
        { value: 'F', label: 'F' }
    ],
}: GradeRowProps) {
    const handleGradeChange = (newValue: string) => {
        onChange(rowNumber, 'value', newValue)
    }

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(rowNumber, 'weight', e.target.value)
    }

    // Render different input types based on the grade type
    const renderGradeInput = () => {
        switch (type) {
            case 'letter':
                return (
                    <Select value={value} onValueChange={handleGradeChange}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                            {letterOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )

            case 'points':
                return (
                    <div className="flex items-center space-x-2">
                        <Input
                            type="number"
                            value={value}
                            onChange={(e) => handleGradeChange(e.target.value)}
                            min="0"
                            step="0.1"
                            className="w-full"
                        />
                        {maxGrade !== null && (
                            <span className="text-sm text-muted-foreground whitespace-nowrap">/ {maxGrade}</span>
                        )}
                    </div>
                )

            case 'percentage':
            default:
                return (
                    <div className="flex items-center">
                        <Input
                            type="number"
                            value={value}
                            onChange={(e) => handleGradeChange(e.target.value)}
                            min="0"
                            max="100"
                            step="0.1"
                            className="w-full"
                        />
                        <span className="ml-2 text-sm text-muted-foreground">%</span>
                    </div>
                )
        }
    }

    return (
        <div className="grid grid-cols-12 gap-2 items-center mb-2">
            <div className="col-span-1 text-center font-medium">{rowNumber}</div>
            <div className="col-span-5 sm:col-span-6">
                {renderGradeInput()}
            </div>
            <div className="col-span-5 sm:col-span-4">
                <div className="flex items-center">
                    <Input
                        type="number"
                        value={weight}
                        onChange={handleWeightChange}
                        min="0"
                        max="100"
                        step="1"
                        className="w-full"
                    />
                    <span className="ml-2 text-sm text-muted-foreground">%</span>
                </div>
            </div>
            {showRemove && onRemove && (
                <div className="col-span-1 flex justify-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onRemove(rowNumber)}
                        className="h-8 w-8 text-red-500 hover:text-red-700"
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            )}
        </div>
    )
}