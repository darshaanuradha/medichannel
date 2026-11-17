import Link from "next/link";

export default function RegisterPage() {
    return (
        <>
            <h2>Create Account</h2>

            <p className="auth-description">
                Register to get started with MediChannel.
            </p>

            <form className="auth-form">

                <label>Full Name</label>
                <input
                    type="text"
                    placeholder="Enter your full name"
                />

                <label>Email Address</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Create a password"
                />

                <button type="button" className="primary-button">
                    Create Account
                </button>

            </form>

            <p className="auth-switch">
                Already have an account?
                {" "}
                <Link href="/login">Sign In</Link>
            </p>
        </>
    );
}