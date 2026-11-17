import type { ReactNode } from "react";

export default function AdminLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="admin-layout min-h-screen">
            <header>
                <h1>MediChannel - Administration Portal</h1>
            </header>

            <main>
                {children}
            </main>
        </div>
    );
}