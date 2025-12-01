import Avatar from "./Avatar";

interface SidebarFriendItemProps {
    name: string;
    status: string;
    avatar: string;
}

export default function SidebarFriendItem({ name, status, avatar }: SidebarFriendItemProps) {
    return(
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition">
            <Avatar src={avatar} alt={name} size="md" />
            <div className="flex-1">
                <p className="font-bold text-sm">{name}</p>
                <p className="text-xs text-gray-500">{status}</p>
            </div>
        </div>
    );
}
