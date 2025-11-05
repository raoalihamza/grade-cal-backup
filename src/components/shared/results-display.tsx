"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import { percentageToLetter, getGradeColor } from '@/lib/utils'

interface ResultsDisplayProps {
    title: string;
    result: number | string;
    showLetter?: boolean;
    isSuccess?: boolean;
    customMessage: string;
    units?: string;
    showAnimation?: boolean;
}

export default function ResultsDisplay({
    title,
    result,
    showLetter = false,
    isSuccess = false,
    customMessage,
    units = '%',
    showAnimation = true
}: ResultsDisplayProps) {
    const [confetti, setConfetti] = useState(false)
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    })

    // Update window size on resize
    useEffect(() => {
        if (typeof window === 'undefined') return

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Show confetti effect for successful results
    useEffect(() => {
        if (isSuccess && showAnimation) {
            setConfetti(true)
            const timer = setTimeout(() => setConfetti(false), 3000)
            return () => clearTimeout(timer)
        }
    }, [isSuccess, result, showAnimation])

    // Format the result for display
    const formattedResult = typeof result === 'number'
        ? result.toFixed(2).replace(/\.00$/, '')
        : result

    // Determine the letter grade if applicable
    const letterGrade = showLetter && typeof result === 'number'
        ? percentageToLetter(result)
        : null

    // Determine background color based on grade
    const gradeBgColor = typeof result === 'number'
        ? getGradeColor(result)
        : 'bg-secondary'

    return (
        <div className="result-box relative overflow-hidden">
            {confetti && (
                <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    recycle={false}
                    numberOfPieces={200}
                    gravity={0.15}
                />
            )}

            <h3 className="text-lg font-medium mb-2">{title}</h3>

            <motion.div
                className={`rounded-md p-4 ${gradeBgColor} text-black`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                key={result} // Re-animate when result changes
            >
                <div className="flex items-center justify-center gap-4">
                    <span className="text-3xl font-bold">
                        {formattedResult}{units && units}
                    </span>

                    {letterGrade && (
                        <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center">
                            <span className="text-xl font-bold">{letterGrade}</span>
                        </div>
                    )}
                </div>

                {customMessage && (
                    <p className="mt-2 text-sm text-white/90">{customMessage}</p>
                )}
            </motion.div>
        </div>
    )
}