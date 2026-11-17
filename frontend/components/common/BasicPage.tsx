import PageHeader from "@/components/common/PageHeader";

interface BasicPageProps {
    title: string;
    description: string;
}

export default function BasicPage({
    title,
    description,
}: BasicPageProps) {

    return (
        <>
            <PageHeader
                title={title}
                description={description}
            />

            <div className="content-panel">
                <h3>{title}</h3>

                <p style={{ color: "#64748b", fontSize: "14px" }}>
                    This section is currently under development.
                    Content and functionality will be implemented
                    in the next development phase.
                </p>
            </div>
        </>
    );
}