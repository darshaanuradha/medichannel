import type { ReactNode } from "react";

export default function DoctorLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="doctor-layout min-h-screen">
            <header>
                <h1>MediChannel - Doctor Portal</h1>
            </header>

            <main>
                {children}
            </main>
        </div>
    );
}