
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CourseCard from '../ui/CourseCard';
import { COURSES } from '../../data/courses';
import { useRef, useState, useEffect } from 'react';

export default function ContinueWatching() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        checkScroll();
        const ref = scrollRef.current;
        ref?.addEventListener('scroll', checkScroll);
        return () => ref?.removeEventListener('scroll', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.8;

            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full overflow-hidden">
            <div className="flex items-center justify-between">
                <h2 className="text-xl lg:text-2xl font-bold">Continue Watching</h2>
                <div className="flex gap-2">
                    <button 
                        onClick={() => scroll('left')}
                        className={`p-2 rounded-full border transition ${canScrollLeft ? 'border-primary bg-primary' : ' bg-white border-gray-300 hover:bg-gray-50'}`}
                    >
                        <ChevronLeft size={20} className={canScrollLeft ? 'text-white' : 'text-primary'} />
                    </button>
                    <button 
                        onClick={() => scroll('right')}
                        className={`p-2 rounded-full border transition ${canScrollRight ? 'border-primary bg-primary' : 'bg-white border-gray-300 hover:bg-gray-50'}`}
                    >
                        <ChevronRight size={20} className={canScrollRight ? 'text-white' : 'text-primary'} />
                    </button>
                </div>
            </div>

            <div 
                ref={scrollRef}
                className="bg-white rounded-3xl flex gap-1 overflow-x-auto scrollbar-hide overflow-y-hidden scroll-smooth snap-x snap-mandatory"
            >
                {COURSES.map(course => (
                    <div 
                        key={course.id} 
                        className="snap-start p-1 flex-shrink-0 w-[100%] sm:w-80"
                    >
                        <CourseCard {...course} />
                    </div>
                ))}
            </div>
        </div>
    );
}