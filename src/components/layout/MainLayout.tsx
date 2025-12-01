import Sidebar from './Sidebar';
import Header from './Header';
import RightSidebar from './RightSidebar';
import type { ReactNode } from "react";

export default function MainLayout({ children } : { children: ReactNode }) {

    return(
        <div className="flex min-h-screen bg-gray-50 overflow-hidden">
            <div className="hidden lg:block w-56 flex-shrink-0">
                <Sidebar />
            </div>

            <div className="flex flex-col flex-1 min-w-0">
                <Header />
                <div className="flex flex-col mt-2 lg:flex-row flex-1 w-full max-w-full lg:max-w-screen-xl mx-auto gap-4 lg:gap-0 overflow-hidden">
                    <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden px-4 lg:px-6">
                        {children}
                    </main>
                    <div className="hidden lg:flex lg:w-100 flex-shrink-0 overflow-y-auto">
                        <RightSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}



