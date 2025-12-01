import ProgressBadge from "../ui/ProgressBadge";
import { COURSES } from "../../data/courses";

export default function CourseProgressList() {
    return (
        <div className="flex flex-col md:flex-row p-2 overflow-x-scroll scrollbar-hide md:justify-around items-center gap-4 lg:gap-0">
            {COURSES.slice(0, 3).map(course => {
                const IconComponent = course.icon;
                return (
                    <ProgressBadge
                        key={course.id}
                        icon={<IconComponent size={24} />}
                        title={course.category}
                        watched={course.watched}
                        total={course.total}
                        color={course.color}
                    />
                );
            })}
        </div>
    );
}