interface ProgressBarProps {
    watched: number;
    total: number;
    className?: string;
}

export default function ProgressBar({ watched, total, className }: ProgressBarProps) {
    const percentage = (watched / total) * 100;

    return (
        <div className={`w-full bg-gray-200 rounded-full h-1 overflow-hidden ${className || ''}`}>
            <div 
                className="bg-primary h-full rounded-full transition-all duration-300"
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
}