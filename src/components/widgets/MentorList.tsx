import { useState } from 'react';
import MentorItem from "../ui/MentorItem";
import { MENTORS } from "../../data/mentors";

export default function MentorList() {
    const [mentors, setMentors] = useState(MENTORS);

    const handleFollowClick = (id: number) => {
        setMentors(mentors.map(mentor => 
            mentor.id === id 
                ? { ...mentor, isFollowing: !mentor.isFollowing }
                : mentor
        ));
    };

    return (
        <div className="flex flex-col bg-gray-50 rounded-3xl p-3">
            <div className="divide-y divide-dashed divide-gray-200">
                {mentors.map(mentor => (
                    <MentorItem
                        key={mentor.id}
                        name={mentor.name}
                        avatar={mentor.avatar}
                        status={mentor.status}
                        isFollowing={mentor.isFollowing}
                        onFollowClick={() => handleFollowClick(mentor.id)}
                    />
                ))}
            </div>
            <button className="flex-1 p-2 cursor-pointer bg-[#ebeafc] rounded-full text-primary font-bold hover:underline mt-2">
                See all
            </button>
        </div>
    );
}