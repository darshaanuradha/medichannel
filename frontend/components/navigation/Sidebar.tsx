"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    navigationConfig,
    UserRole,
} from "@/constants/navigation";

interface SidebarProps {
    role: UserRole;
    mobileOpen: boolean;
    onClose: () => void;
}

const roleNames: Record<UserRole, string> = {
    patient: "Patient Portal",
    doctor: "Doctor Portal",
    staff: "Staff Portal",
    admin: "Administration",
};

export default function Sidebar({
    role,
    mobileOpen,
    onClose,
}: SidebarProps) {

    const pathname = usePathname();

    return (
        <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>

            <div className="sidebar-brand">
                <div className="brand-icon">M</div>

                <div>
                    <h2>MediChannel</h2>
                    <span>Healthcare System</span>
                </div>
            </div>

            <div className="sidebar-role">
                {roleNames[role]}
            </div>

            <nav className="sidebar-navigation">

                {navigationConfig[role].map((item) => {

                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className={`nav-item ${isActive ? "active" : ""}`}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span>{item.label}</span>
                        </Link>
                    );
                })}

            </nav>

            <div className="sidebar-bottom">
                <div className="sidebar-user">
                    <div className="user-avatar">U</div>

                    <div>
                        <strong>Demo User</strong>
                        <span>{role}</span>
                    </div>
                </div>
            </div>

        </aside>
    );
}