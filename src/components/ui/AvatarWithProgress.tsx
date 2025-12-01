import Avatar from "./Avatar";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface AvatarWithProgressProps {
    src: string;
    alt: string;
    percentage: number;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function AvatarWithProgress({ 
    src, 
    alt, 
    percentage,
    size = 'lg'
}: AvatarWithProgressProps) {
    return (
        <div className="relative w-40 h-40 flex cursor-pointer items-center justify-center">
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={2}
                styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: 'round',
                    textSize: '15px',
                    pathTransitionDuration: 0.5,
                    pathColor: '#6e63e4',
                    textColor: '#4c41cb',
                    trailColor: '#f0f0f0',
                })}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Avatar src={src} alt={alt} size={size} />
            </div>
        </div>
    );
}