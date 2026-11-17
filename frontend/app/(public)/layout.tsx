import type { ReactNode } from "react";

export default function PublicLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="public-layout min-h-screen">
            <header>
                <h1>MediChannel</h1>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <p>© MediChannel. All rights reserved.</p>
            </footer>
        </div>
    );
}