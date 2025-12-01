import type { ReactNode } from 'react';

interface IconButtonProps {
    icon: ReactNode;
    onClick?: () => void;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14'
};

export default function IconButton({ icon, onClick, size = 'lg', className}: IconButtonProps) {
    return (
        <div
            onClick={onClick}
            className={`rounded-full border border-gray-300 bg-white flex flex-shrink-0 items-center justify-center cursor-pointer active:scale-110 transition ${className} ${sizeMap[size]}`}
        >
            {icon}
        </div>
    );
}
