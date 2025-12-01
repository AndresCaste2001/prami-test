import type { LucideIcon } from 'lucide-react';

export interface Course {
    id: number;
    icon: LucideIcon;
    title: string;
    category: string;
    watched: number;
    total: number;
    color: string;
    image: string;
    mentor: {
        name: string;
        avatar: string;
        label: string;
    };
}
