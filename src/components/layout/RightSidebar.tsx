import StatisticCard from "../widgets/StatisticCard";
import IconButton from "../ui/IconButton.tsx";
import {Plus} from "lucide-react";
import MentorList from "../widgets/MentorList";

export default function RightSidebar() {
    return(
        <div className="bg-white h-fit w-full mr-4 lg:p-4 overflow-y-auto shadow-sm rounded-2xl lg:rounded-3xl flex flex-col gap-4 lg:gap-6">
            {/* Statistic  */}
            <div>
                <h2 className="text-base lg:text-xl font-medium mb-2 lg:mb-2 flex items-center justify-between">
                    Statistic
                    <button className="text-gray-400 hover:text-gray-600 cursor-pointer" >⋮</button>
                </h2>
                <StatisticCard />
            </div>

            {/* Your mentor */}
            <div>
                <h2 className="text-base lg:text-xl font-medium mb-2 lg:mb-2 flex items-center justify-between">
                    Your mentor
                    <IconButton size="sm" icon={<Plus size={15} className="text-primary" />}/>
                </h2>
                <MentorList />
            </div>
        </div>
    );
}