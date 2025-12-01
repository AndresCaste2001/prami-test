import { Heart } from 'lucide-react';
import Avatar from './Avatar';
import ProgressBar from './ProgressBar';
import { getCategoryColor } from '../../theme/colors';
import { useState } from 'react';
import type { Course } from '../../types/course';

type CourseCardProps = Course;

export default function CourseCard({ title, category, image, watched, total, icon: Icon, mentor }: CourseCardProps) {
    const { bg, text } = getCategoryColor(category);
    const [liked, setLiked] = useState(false);

    return (
        <div className="h-full mt-2 p-2 rounded-3xl overflow-hidden  transition cursor-pointer group flex flex-col">
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden h-40 bg-gray-200 flex-shrink-0">
                <img 
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                />
                <button 
                    onClick={() => setLiked(!liked)}
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full"
                >
                    <Heart 
                        size={18} 
                        className={liked ? 'text-primary fill-primary' : 'text-gray-600'} 
                    />
                </button>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                {/* Category with Icon */}
                <div className={`flex ${bg} p-1 px-2 w-fit rounded-full items-center gap-2 mb-2`}>
                    <Icon size={14} className={text} />
                    <p className={`text-xs font-semibold uppercase tracking-wide ${text}`}>
                        {category}
                    </p>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-gray-900 mb-3 line-clamp-2 flex-1">
                    {title}
                </h3>

                {/* Progress Bar */}
                <ProgressBar watched={watched} total={total} className="mb-3" />

                {/* Mentor */}
                <div className="flex items-center gap-2 mt-auto">
                    <Avatar src={mentor.avatar} alt={mentor.name} size="sm" />
                    <div className="flex flex-col justify-center" style={{ lineHeight: 1.2 }}>
                        <span className="text-xs font-bold text-gray-600">{mentor.name}</span>
                        <span className="text-xs text-gray-500">{mentor.label}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}