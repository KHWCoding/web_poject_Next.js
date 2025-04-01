'use client';

import useDarkStore from "@/app/storage/darkmode";
import React from "react";

export default function DarkMode({ children }: {children: React.ReactNode[] }) {
    const { darkMode } = useDarkStore();

    return (
        <div className={darkMode ? "dark" : ""}>
            {children[0]}
            {children[1]}
            {children[2]}
        </div>
    )
}