import DashboardLayout from "@/components/common/DashboardLayout";

import { ReactNode } from "react";

export default function AdminLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <DashboardLayout role="admin" title="Administration Portal">
            {children}
        </DashboardLayout>
    );
}