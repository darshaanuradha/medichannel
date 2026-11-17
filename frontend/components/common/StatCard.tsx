interface StatCardProps {
    title: string;
    value: string | number;
    description: string;
    icon: string;
}

export default function StatCard({
    title,
    value,
    description,
    icon,
}: StatCardProps) {
    return (
        <div className="stat-card">

            <div className="stat-card-top">
                <span>{title}</span>
                <div className="stat-icon">{icon}</div>
            </div>

            <h3>{value}</h3>

            <p>{description}</p>

        </div>
    );
}