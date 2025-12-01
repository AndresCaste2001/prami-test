import HeroBanner from "../components/widgets/HeroBanner";
import CourseProgressList from "../components/widgets/CourseProgressList";
import ContinueWatching from "../components/widgets/ContinueWatching";
import LessonTable from "../components/widgets/LessonTable";

export default function Dashboard() {
    return(
        <div className="flex flex-col gap-3">
            <HeroBanner />
            <CourseProgressList />
            <ContinueWatching />
            <LessonTable />
        </div>
    );
}