import React from 'react'

export default function Logo({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Wing */}
            <path
                d="M80 25L50 40L20 25L50 10L80 25Z"
                fill="#F49D37"
                className="drop-shadow-md"
            />

            {/* Dice background */}
            <rect
                x="40"
                y="25"
                width="30"
                height="30"
                rx="4"
                fill="#F49D37"
                className="drop-shadow-md"
            />

            {/* Dice dots */}
            <circle cx="47" cy="32" r="2.5" fill="white" />
            <circle cx="63" cy="32" r="2.5" fill="white" />
            <circle cx="55" cy="40" r="2.5" fill="white" />
            <circle cx="47" cy="48" r="2.5" fill="white" />
            <circle cx="63" cy="48" r="2.5" fill="white" />

            {/* Plus sign */}
            <path
                d="M55 30V35M52.5 32.5H57.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    )
}