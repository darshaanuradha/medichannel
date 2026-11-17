interface PageHeaderProps {
    title: string;
    description: string;
}

export default function PageHeader({
    title,
    description,
}: PageHeaderProps) {
    return (
        <div className="page-header">
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}