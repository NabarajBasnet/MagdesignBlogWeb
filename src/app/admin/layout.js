import ReduxProvider from "@/components/redux/ReduxProvider";
import AdminSidebar from "./AdminSidebar";
import Navbar from "@/components/navbar/Navbar";
import AdminHeader from "./AdminHeader";
import AdminSidebarWrapper from "./AdminSidebarWrapper";

export const metadata = {
    title: "MAGDESIGN",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <ReduxProvider>
                <body>
                    <Navbar />
                    <div className="flex flex-row items-start">
                        <div>
                            <AdminSidebarWrapper />
                        </div>
                        <div className="flex flex-col w-full">
                            <div>
                                <AdminHeader />

                            </div>
                            <div>
                                {children}
                            </div>
                        </div>
                    </div>

                </body>
            </ReduxProvider>
        </html>
    );
}
