interface HeaderProps {
    title: string;
    onMenuClick: () => void;
}

export default function Header({
    title,
    onMenuClick,
}: HeaderProps) {

    return (
        <header className="topbar">

            <div className="topbar-title">

                <button
                    className="mobile-menu-button"
                    onClick={onMenuClick}
                    aria-label="Toggle navigation"
                >
                    ☰
                </button>

                <h1>{title}</h1>

            </div>

            <div className="topbar-actions">

                <button
                    className="notification-button"
                    aria-label="Notifications"
                >
                    ♧
                    <span className="notification-dot"></span>
                </button>

                <div className="topbar-profile">

                    <div className="user-avatar">U</div>

                    <div>
                        <strong>Demo User</strong>
                        <span>Online</span>
                    </div>

                </div>

            </div>

        </header>
    );
}