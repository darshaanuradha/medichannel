import DashboardLayout from "@/components/common/DashboardLayout";

import { ReactNode } from "react";

export default function DoctorLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <DashboardLayout role="doctor" title="Doctor Portal">
            {children}
        </DashboardLayout>
    );
}