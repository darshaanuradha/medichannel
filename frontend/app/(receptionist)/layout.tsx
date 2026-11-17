import DashboardLayout from "@/components/common/DashboardLayout";

import { ReactNode } from "react";

export default function ReceptionistLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <DashboardLayout role="receptionist" title="Receptionist Portal">
            {children}
        </DashboardLayout>
    );
}