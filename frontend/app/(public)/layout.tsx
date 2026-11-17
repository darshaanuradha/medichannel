
import { ReactNode } from "react";
import Link from "next/link";

export default function PublicLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="public-layout">

            <header className="public-header">

                <Link href="/" className="public-brand">
                    <span className="brand-icon">M</span>
                    MediChannel
                </Link>

                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/login">Login</Link>

                    <Link href="/register" className="primary-button">
                        Get Started
                    </Link>
                </nav>

            </header>

            <main>{children}</main>

            <footer className="public-footer">
                © 2026 MediChannel. All rights reserved.
            </footer>

        </div>
    );
}
