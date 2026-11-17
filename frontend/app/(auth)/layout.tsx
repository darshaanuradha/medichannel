import { ReactNode } from "react";
import Link from "next/link";

export default function AuthLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="auth-container">

            <div className="auth-brand">
                <Link href="/">
                    <span className="brand-icon">M</span>
                    MediChannel
                </Link>
            </div>

            <div className="auth-card">
                {children}
            </div>

            <p className="auth-footer">
                © {new Date().getFullYear()} MediChannel
            </p>

        </div>
    );
}