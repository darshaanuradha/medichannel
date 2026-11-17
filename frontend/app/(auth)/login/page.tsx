import Link from "next/link";

export default function LoginPage() {
    return (
        <>
            <h2>Welcome Back</h2>

            <p className="auth-description">
                Sign in to your MediChannel account.
            </p>

            <form className="auth-form">

                <label>Email Address</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                />

                <button type="button" className="primary-button">
                    Sign In
                </button>

            </form>

            <p className="auth-switch">
                Don&apos;t have an account?
                {" "}
                <Link href="/register">Create Account</Link>
            </p>
        </>
    );
}