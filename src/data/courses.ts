import { Smartphone, Palette, Code } from 'lucide-react';
import type { Course } from '../types/course';
import Leonardo from '../assets/memojis/memoji7.png'
import Bayu from '../assets/memojis/memoji6.png'
import Padhang from '../assets/memojis/memoji5.png'

export const COURSES: Course[] = [
    {
        id: 1,
        icon: Code,
        title: "Beginner's Guide to Becoming a Professional Front-End Developer",
        category: "FRONT END",
        watched: 2,
        total: 8,
        image: "https://www.orientsoftware.com/Themes/Content/Images/blog/2024-08-12/senior-front-end-dev.webp",
        color: "bg-blue-100",
        mentor: {
            name: "Leonardo Samul",
            avatar: Leonardo,
            label: "Mentor"
        }
    },
    {
        id: 2,
        icon: Smartphone,
        title: "Optimizing User Experience with the Best UI/UX Design",
        category: "UI/UX DESIGN",
        watched: 3,
        total: 8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1KnCWdEo2aY7caFqm6ZNsK-G_6eiAPGERg&s",
        color: "bg-purple-100",
        mentor: {
            name: "Bayu Salto",
            avatar: Bayu,
            label: "Mentor"
        }
    },
    {
        id: 3,
        icon: Palette,
        title: "Reviving and Refresh Company Image",
        category: "BRANDING",
        watched: 6,
        total: 12,
        image: "https://www.marketingdonut.co.uk/sites/default/files/production/image/why-do-small-businesses-need-a-brand-3717051371.jpg",
        color: "bg-pink-100",
        mentor: {
            name: "Padhang Satio",
            avatar: Padhang,
            label: "Mentor"
        }
    }

];

// Para usar en CourseProgressList - solo los primeros 3
export const COURSE_PROGRESS = COURSES.slice(0, 3);
