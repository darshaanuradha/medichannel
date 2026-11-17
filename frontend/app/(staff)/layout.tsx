import DashboardLayout from "@/components/common/DashboardLayout";

import { ReactNode } from "react";

export default function StaffLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <DashboardLayout role="staff" title="Staff Portal">
            {children}
        </DashboardLayout>
    );
}