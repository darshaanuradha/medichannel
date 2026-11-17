"use client";

import { ReactNode, useState } from "react";

import Sidebar from "@/components/navigation/Sidebar";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

import { UserRole } from "@/constants/navigation";

interface DashboardLayoutProps {
    children: ReactNode;
    role: UserRole;
    title: string;
}

export default function DashboardLayout({
    children,
    role,
    title,
}: DashboardLayoutProps) {

    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="dashboard-layout">

            <Sidebar
                role={role}
                mobileOpen={mobileOpen}
                onClose={() => setMobileOpen(false)}
            />

            {mobileOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            <div className="dashboard-main">

                <Header
                    title={title}
                    onMenuClick={() => setMobileOpen(!mobileOpen)}
                />

                <main className="dashboard-content">
                    {children}
                </main>

                <Footer />

            </div>

        </div>
    );
}