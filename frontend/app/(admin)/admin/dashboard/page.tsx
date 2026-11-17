import PageHeader from "@/components/common/PageHeader";
import StatCard from "@/components/common/StatCard";

export default function AdminDashboardPage() {
    return (
        <>
            <PageHeader
                title="Administration Dashboard"
                description="Monitor and manage the MediChannel system."
            />

            <div className="stats-grid">

                <StatCard
                    title="Total Users"
                    value="1,250"
                    description="Registered system users"
                    icon="♙"
                />

                <StatCard
                    title="Doctors"
                    value="85"
                    description="Registered doctors"
                    icon="⚕"
                />

                <StatCard
                    title="Patients"
                    value="1,120"
                    description="Registered patients"
                    icon="♧"
                />

                <StatCard
                    title="Appointments"
                    value="340"
                    description="Total appointments"
                    icon="▣"
                />

            </div>

            <div className="content-panel">
                <h3>System Overview</h3>
                <p style={{ color: "#64748b", fontSize: "14px" }}>
                    System activities and reports will appear here.
                </p>
            </div>
        </>
    );
}