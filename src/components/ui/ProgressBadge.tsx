import type { ReactNode } from 'react';
import IconButton from "./IconButton.tsx";

interface ProgressBadgeProps {
    icon: ReactNode;
    title: string;
    watched: number;
    total: number;
    color: string;
}

export default function ProgressBadge({ icon, title, watched, total, color }: ProgressBadgeProps) {
    return (
        <div className="bg-white rounded-3xl p-4 shadow-sm flex items-center justify-between gap-10 cursor-pointer hover:shadow-md min-w-70 md:min-w-60 transition flex-shrink-0">
            <div className="flex items-center gap-3">
                <IconButton 
                    size="xl"
                    className={`${color} border-none dark-preserve-color text-gray-800`}
                    icon={icon}
                />
                <div>
                    <p className="text-sm font-semibold text-gray-400">{watched}/{total} watched</p>
                    <p className="text-lg font-bold text-gray-900">{title}</p>
                </div>
            </div>
            <button className="text-gray-600 hover:text-gray-600 cursor-pointer">⋮</button>
        </div>
    );
}