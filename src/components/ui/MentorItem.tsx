import Avatar from "./Avatar";
import Button from "./Button";
import {UserCheck} from "lucide-react";

interface MentorItemProps {
    name: string;
    avatar: string;
    status: string;
    isFollowing: boolean;
    onFollowClick?: () => void;
}

export default function MentorItem({ name, avatar, status, isFollowing, onFollowClick }: MentorItemProps) {
    return (
        <div className="flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition">
            <div className="flex items-center gap-3">
                <Avatar src={avatar} alt={name} size="lg" />
                <div className="flex-1">
                    <span className="font-bold text-xs">{name}</span>
                    <p className="text-xs text-gray-500">{status}</p>
                </div>
            </div>
            <Button
                label={isFollowing ? "Following" : "Follow"}
                icon={<UserCheck size={15} />}
                variant={isFollowing ? "secondary" : "outline"}
                size="xs"
                onClick={onFollowClick}
            />
        </div>
    );
}