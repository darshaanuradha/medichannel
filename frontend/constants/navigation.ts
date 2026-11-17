export type UserRole =
    | "patient"
    | "doctor"
    | "staff"
    | "admin";

export interface NavigationItem {
    label: string;
    href: string;
    icon: string;
}

export const navigationConfig: Record<UserRole, NavigationItem[]> = {
    patient: [
        {
            label: "Dashboard",
            href: "/patient/dashboard",
            icon: "⌂",
        },
        {
            label: "My Appointments",
            href: "/patient/appointments",
            icon: "▣",
        },
        {
            label: "My Profile",
            href: "/patient/profile",
            icon: "◉",
        },
    ],

    doctor: [
        {
            label: "Dashboard",
            href: "/doctor/dashboard",
            icon: "⌂",
        },
        {
            label: "Appointments",
            href: "/doctor/appointments",
            icon: "▣",
        },
        {
            label: "My Patients",
            href: "/doctor/patients",
            icon: "♙",
        },
    ],

    staff: [
        {
            label: "Dashboard",
            href: "/staff/dashboard",
            icon: "⌂",
        },
        {
            label: "Appointments",
            href: "/staff/appointments",
            icon: "▣",
        },
        {
            label: "Patients",
            href: "/staff/patients",
            icon: "♙",
        },
    ],

    admin: [
        {
            label: "Dashboard",
            href: "/admin/dashboard",
            icon: "⌂",
        },
        {
            label: "Users",
            href: "/admin/users",
            icon: "♙",
        },
        {
            label: "Doctors",
            href: "/admin/doctors",
            icon: "⚕",
        },
        {
            label: "Reports",
            href: "/admin/reports",
            icon: "▤",
        },
    ],
};