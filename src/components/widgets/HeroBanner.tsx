import { ArrowRight } from 'lucide-react';
import { HERO_BANNER } from "../../data/heroBanner";
import IconButton from "../ui/IconButton.tsx";


export default function HeroBanner() {
    return (
        <div className={`bg-primary rounded-3xl p-5 lg:p-5 text-white relative overflow-hidden`}>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-lg">
                {/* Badge */}
                <div className="opacity-70 inline-block px-4 py-2 rounded-full text-sm font-semibold mb-2 uppercase tracking-wide">
                    {HERO_BANNER.badge}
                </div>

                {/* Title */}
                <h2 className="text-3xl lg:text-4xl font-normal mb-6 leading-tight">
                    {HERO_BANNER.title}
                </h2>


                {/* Button */}
                <button className="bg-black hover:bg-black/40 text-white  py-2 pl-6 pr-2 rounded-full flex items-center gap-2 transition transform hover:scale-105">
                    <span>{HERO_BANNER.buttonLabel}</span>
                    <IconButton className="bg-white" size="sm" icon={<ArrowRight className="text-black"/>}/>
                </button>
            </div>
        </div>
    );
}