import Link from "next/link";

export default function HomePage() {
    return (
        <section className="hero">

            <div className="hero-content">

                <span className="hero-label">
                    HEALTHCARE APPOINTMENT PLATFORM
                </span>

                <h1>
                    Your Health,
                    <br />
                    Our <span>Priority.</span>
                </h1>

                <p>
                    MediChannel makes hospital appointments easier.
                    Connect with doctors, manage appointments and
                    organize your healthcare journey in one place.
                </p>

                <div className="hero-actions">

                    <Link href="/register" className="primary-button">
                        Get Started
                    </Link>

                    <Link href="/login" className="secondary-button">
                        Sign In
                    </Link>

                </div>

            </div>

            <div className="hero-visual">
                <div className="hero-medical-icon">⚕</div>

                <h3>Healthcare Made Simple</h3>

                <p>
                    Book appointments and connect with healthcare
                    professionals.
                </p>
            </div>

        </section>
    );
}