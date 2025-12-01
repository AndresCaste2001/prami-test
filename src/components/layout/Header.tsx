import { Search, Mail, Bell, Moon, Sun } from 'lucide-react';
import { CURRENT_USER } from "../../data/mockData";
import IconButton from "../ui/IconButton";
import Avatar from "../ui/Avatar";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
    const { isDark, toggleTheme } = useTheme();

    return(
        <header className=" bg-gray-50 px-4 lg:px-8 py-3 lg:py-7">
            <div className="flex items-center justify-between gap-3 lg:gap-6">
                {/* Left - Search Bar */}
                <div className="hidden lg:flex items-center gap-2 bg-white shadow-sm rounded-3xl px-4 py-3 flex-1 max-w-[820px]">
                    <Search size={20} className="text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search your course..." 
                        className="bg-transparent outline-none flex-1 placeholder:text-gray-400"
                    />
                </div>

                {/* Mobile Search Bar */}
                <div className="lg:hidden flex items-center gap-2 bg-white shadow-sm rounded-2xl px-3 py-2 flex-1">
                    <Search size={18} className="text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="bg-transparent outline-none flex-1 text-sm placeholder:text-gray-400"
                    />
                </div>

                {/* Right - Icons & Profile */}
                <div className="flex items-center gap-3 lg:gap-7 ml-auto mr-0 lg:mr-10">
                    <IconButton 
                        size="xl" 
                        icon={isDark ? <Sun size={16} className="text-yellow-400" /> : <Moon size={16} className="text-gray-600" />}
                        onClick={toggleTheme}
                    />
                    <IconButton size="xl" icon={<Mail fill="gray" size={16} className="text-gray-600" />}/>
                    <IconButton size="xl" icon={<Bell fill="gray" size={16} className="text-gray-600" />}/>

                    {/* Profile */}
                    <div className="cursor-pointer sm:flex items-center gap-2 lg:gap-4 pl-3 lg:pl-4 border-l">
                        <Avatar
                            src={CURRENT_USER.avatar}
                            alt={CURRENT_USER.name}
                            size="md"
                        />
                        <span className="font-medium text-sm lg:text-base hidden md:inline">{CURRENT_USER.name}</span>
                    </div>
                </div>
            </div>
        </header>
    );
}