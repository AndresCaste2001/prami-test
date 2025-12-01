import type { LucideIcon } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import Pathhang from '../assets/memojis/memoji5.png';

interface Lesson {
    id: number;
    mentor: {
        name: string;
        avatar: string;
        date: string;
    };
    category: string;
    icon: LucideIcon;
    description: string;
}

export const LESSONS: Lesson[] = [
    {
        id: 1,
        mentor: {
            name: "Padhang Satio",
            avatar: Pathhang,
            date: "27/6/2024"
        },
        category: "UI/UX DESIGN",
        icon: Smartphone,
        description: "Understand Of UI/UX Design"
    }
];