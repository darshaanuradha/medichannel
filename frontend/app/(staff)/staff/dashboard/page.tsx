import PageHeader from "@/components/common/PageHeader";
import StatCard from "@/components/common/StatCard";

export default function ReceptionistDashboardPage() {
    return (
        <>
            <PageHeader
                title="Receptionist Dashboard"
                description="Manage hospital appointments and patient registrations."
            />

            <div className="stats-grid">

                <StatCard
                    title="Total Patients"
                    value="250"
                    description="Registered patients"
                    icon="♙"
                />

                <StatCard
                    title="Today's Appointments"
                    value="35"
                    description="Scheduled appointments"
                    icon="▣"
                />

                <StatCard
                    title="Pending"
                    value="08"
                    description="Awaiting confirmation"
                    icon="◷"
                />

                <StatCard
                    title="Completed"
                    value="27"
                    description="Completed appointments"
                    icon="✓"
                />

            </div>

            <div className="content-panel">
                <h3>Recent Registrations</h3>
                <p style={{ color: "#64748b", fontSize: "14px" }}>
                    Recent patient registrations will appear here.
                </p>
            </div>
        </>
    );
}