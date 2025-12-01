import type { ReactNode } from 'react';

interface SidebarItemProps {
    label: string;
    icon?: ReactNode;
    color?: string;
    isActive?: boolean;
    onClick?: () => void;
}

export default function SidebarItem({ label, icon, color, isActive, onClick }: SidebarItemProps) {
    return(
        <div 
            onClick={onClick}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition ${
                isActive 
                    ? 'text-primary' 
                    : 'hover:bg-gray-100'
            } ${color || ''}`}
        >
            {icon}
            <span className="text-lg font-medium">{label}</span>
        </div>
    );
}
