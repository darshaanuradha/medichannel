import type { ReactNode } from "react";

export default function PatientLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="patient-layout min-h-screen">
            <header>
                <h1>MediChannel - Patient Portal</h1>
            </header>

            <main>
                {children}
            </main>
        </div>
    );
}