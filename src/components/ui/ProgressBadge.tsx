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
        <div className={`bg-white rounded-3xl p-4 shadow-sm flex items-center  lg:flex-row lg:items-center justify-between lg:gap-10 cursor-pointer hover:shadow-md transition lg:w-auto`}>
            <div className="flex items-center gap-2 lg:gap-3">
                <IconButton 
                    size="xl"
                    className={`${color} border-none`}
                    icon={icon}
                />
                <div className="flex-1 lg:flex-none">
                    <p className="text-xs lg:text-sm font-semibold text-gray-600">{watched}/{total} watched</p>
                    <p className="text-base lg:text-lg font-bold text-gray-900">{title}</p>
                </div>
            </div>
            <button className="text-gray-600 hover:text-gray-600 cursor-pointer self-start lg:self-auto">⋮</button>
        </div>
    );
}