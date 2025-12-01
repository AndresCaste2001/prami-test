import type { ReactNode } from 'react';

interface ButtonProps {
    label: string;
    icon?: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    onClick?: () => void;
    className?: string;
}

const variantMap = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border border-gray-300 text-primary hover:bg-primary/5'
};

const sizeMap = {
    xs: 'px-3 py-1 text-xs',
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
};

export default function Button({ 
    label, 
    icon,
    variant = 'primary', 
    size = 'md', 
    onClick,
    className 
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`rounded-full font-medium transition cursor-pointer flex items-center gap-2 ${variantMap[variant]} ${sizeMap[size]} ${className || ''}`}
        >
            {icon}
            {label}
        </button>
    );
}