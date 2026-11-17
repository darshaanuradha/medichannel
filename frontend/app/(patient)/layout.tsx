import DashboardLayout from "@/components/common/DashboardLayout";

import { ReactNode } from "react";

export default function PatientLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <DashboardLayout role="patient" title="Patient Portal">
            {children}
        </DashboardLayout>
    );
}