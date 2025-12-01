interface AvatarProps {
    src: string;
    alt: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-30 h-30'
};


export default function Avatar({ src, alt, size = 'md', className }: AvatarProps) {

    return (
        <img
            src={src}
            alt={alt}
            className={`rounded-full object-cover ${sizeMap[size]} ${className || ''}`}
        />
    );
}
