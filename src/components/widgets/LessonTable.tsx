import LessonTableRow from '../ui/LessonTableRow';
import { LESSONS } from '../../data/lessons';

export default function LessonTable() {
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl lg:text-2xl font-bold">Your Lesson</h2>
                <button className="text-primary text-sm font-semibold hover:underline">
                    See all
                </button>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto scrollbar-thin">
                    <table className="w-full min-w-[640px]">
                        <thead>
                        <tr className="border-b border-gray-200 text-center">
                            <th className=" py-4 px-4 text-xs font-semibold text-gray-500 uppercase">Mentor</th>
                            <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase">Type</th>
                            <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase">Desc</th>
                            <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {LESSONS.map(lesson => (
                            <LessonTableRow
                                key={lesson.id}
                                mentor={lesson.mentor}
                                category={lesson.category}
                                icon={lesson.icon}
                                description={lesson.description}
                            />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}