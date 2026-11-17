import type { ReactNode } from "react";

export default function ReceptionistLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="receptionist-layout min-h-screen">
            <header>
                <h1>MediChannel - Receptionist Portal</h1>
            </header>

            <main>
                {children}
            </main>
        </div>
    );
}