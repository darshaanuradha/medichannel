export type UserRole =
    | "patient"
    | "doctor"
    | "receptionist"
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

    receptionist: [
        {
            label: "Dashboard",
            href: "/receptionist/dashboard",
            icon: "⌂",
        },
        {
            label: "Appointments",
            href: "/receptionist/appointments",
            icon: "▣",
        },
        {
            label: "Patients",
            href: "/receptionist/patients",
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