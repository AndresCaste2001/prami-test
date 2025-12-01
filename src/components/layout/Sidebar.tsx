
import { useState } from 'react';
import SidebarItem from "../ui/SidebarItem";
import { LayoutDashboard, Mail, BookOpen, CheckSquare, Users, Settings, LogOut, Sparkle} from "lucide-react";
import { FRIENDS } from "../../data/mockData.ts";
import SidebarFriendItem from "../ui/SidebarFriendItem";

export default function Sidebar() {
    const [activeItem, setActiveItem] = useState("Dashboard");

    return(
        <aside className="left-0 top-0 h-full w-56 bg-white p-6 hidden md:flex shadow-sm flex-col overflow-y-auto">
            <div>
                <div className="flex mt-2 mb-10 gap-1">
                    <Sparkle className="text-primary" size={24} />
                    <h1 className="text-xl font-bold">Coursue</h1>
                </div>

                <h2 className="sidebar-section-title">Overview</h2>
                <nav className="sidebar-nav">
                    <SidebarItem 
                        label="Dashboard" 
                        icon={<LayoutDashboard size={20} />}
                        isActive={activeItem === "Dashboard"}
                        onClick={() => setActiveItem("Dashboard")}
                    />
                    <SidebarItem 
                        label="Inbox" 
                        icon={<Mail size={20} />}
                        isActive={activeItem === "Inbox"}
                        onClick={() => setActiveItem("Inbox")}
                    />
                    <SidebarItem 
                        label="Lesson" 
                        icon={<BookOpen size={20} />}
                        isActive={activeItem === "Lesson"}
                        onClick={() => setActiveItem("Lesson")}
                    />
                    <SidebarItem 
                        label="Task" 
                        icon={<CheckSquare size={20} />}
                        isActive={activeItem === "Task"}
                        onClick={() => setActiveItem("Task")}
                    />
                    <SidebarItem 
                        label="Group" 
                        icon={<Users size={20} />}
                        isActive={activeItem === "Group"}
                        onClick={() => setActiveItem("Group")}
                    />
                </nav>

                <h2 className="mt-4 mb-3 text-sm text-gray-400 uppercase">Friends</h2>
                <nav className="flex flex-col gap-5">
                    {FRIENDS.map(friend => (
                        <SidebarFriendItem
                            key={friend.id}
                            name={friend.name}
                            status={friend.status}
                            avatar={friend.avatar}
                        />
                    ))}
                </nav>
            </div>

            <div className="mt-auto">
                <h2 className="sidebar-section-title">Settings</h2>
                <nav className="sidebar-nav">
                    <SidebarItem label="Setting" icon={<Settings size={20} />}/>
                    <SidebarItem 
                        label="Logout" 
                        icon={<LogOut size={20} className="text-[#FF6B35]" />}
                        color="text-[#FF6B35]"
                    />
                </nav>
            </div>
        </aside>
    );
}