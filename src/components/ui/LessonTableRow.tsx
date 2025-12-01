import type { LucideIcon } from 'lucide-react';
import { Play } from 'lucide-react';
import Avatar from './Avatar';
import IconButton from './IconButton';
import { getCategoryColor } from '../../theme/colors';

interface LessonTableRowProps {
    mentor: {
        name: string;
        avatar: string;
        date: string;
    };
    category: string;
    icon: LucideIcon;
    description: string;
}

export default function LessonTableRow({ mentor, category, icon: Icon, description }: LessonTableRowProps) {
    const { bg, text } = getCategoryColor(category);

    return (
        <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
            {/* Mentor */}
            <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                    <Avatar src={mentor.avatar} alt={mentor.name} size="md" />
                    <div>
                        <p className="font-semibold text-sm">{mentor.name}</p>
                        <p className="text-xs text-gray-500">{mentor.date}</p>
                    </div>
                </div>
            </td>

            {/* Type/Category */}
            <td className="py-4 px-4">
                <div className={`flex ${bg} p-1 px-3 w-fit rounded-full items-center gap-2`}>
                    <Icon size={14} className={text} />
                    <span className={`text-xs font-semibold uppercase ${text}`}>{category}</span>
                </div>
            </td>

            {/* Description */}
            <td className="py-4 px-4">
                <p className="text-sm text-gray-700">{description}</p>
            </td>

            {/* Action */}
            <td className="py-4 px-4">
                <IconButton
                    size="md"
                    className="border-primary"
                    icon={<Play size={16} className="text-primary" fill="#6e63e4" />}
                />
            </td>
        </tr>
    );
}