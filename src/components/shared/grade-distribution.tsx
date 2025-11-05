"use client"

import { useState, useEffect } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { percentageToLetter } from '@/lib/utils'

export default function GradeDistribution({ grades }: { grades: any[] }) {
    const [distributionData, setDistributionData] = useState<any[]>([])

    useEffect(() => {
        if (!grades || !grades.length) return

        // Count occurrences of each letter grade
        const letterGradeCounts = grades.reduce((counts, grade) => {
            const letterGrade = percentageToLetter(parseFloat(grade))
            counts[letterGrade] = (counts[letterGrade] || 0) + 1
            return counts
        }, {})

        // Convert to array for chart
        const data = Object.entries(letterGradeCounts).map(([grade, count]) => ({
            grade,
            count,
        }))

        // Sort by grade (A -> F)
        const gradeOrder = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F']
        data.sort((a, b) => gradeOrder.indexOf(a.grade) - gradeOrder.indexOf(b.grade))

        setDistributionData(data)
    }, [grades])

    // Grade colors for chart
    const gradeColors: { [key: string]: string } = {
        'A+': '#1E8E3E',
        'A': '#1E8E3E',
        'A-': '#1E8E3E',
        'B+': '#3D85C6',
        'B': '#3D85C6',
        'B-': '#3D85C6',
        'C+': '#F1C232',
        'C': '#F1C232',
        'C-': '#F1C232',
        'D+': '#E69138',
        'D': '#E69138',
        'D-': '#E69138',
        'F': '#CC0000',
    }

    // Get color for each bar
    const getGradeColor = (entry: any) => {
        return gradeColors[entry.grade] || '#999'
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Grade Distribution</CardTitle>
            </CardHeader>
            <CardContent>
                {distributionData.length > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={distributionData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="grade" />
                            <YAxis allowDecimals={false} />
                            <Tooltip
                                formatter={(value) => [`${value} grades`, 'Count']}
                                labelFormatter={(label) => `Grade: ${label}`}
                            />
                            <Legend />
                            <Bar
                                dataKey="count"
                                name="Number of Grades"
                                fill="#8884d8"
                                radius={[4, 4, 0, 0]}
                                isAnimationActive={true}
                                animationDuration={1000}
                                animationEasing="ease-out"
                            >
                                {distributionData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={getGradeColor(entry)} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="flex justify-center items-center h-64 text-muted-foreground">
                        No grade data available for distribution chart
                    </div>
                )}
            </CardContent>
        </Card>
    )
}