import PageHeader from "@/components/common/PageHeader";
import StatCard from "@/components/common/StatCard";

export default function PatientDashboardPage() {
    return (
        <>
            <PageHeader
                title="Welcome to MediChannel"
                description="Manage your medical appointments and healthcare information."
            />

            <div className="stats-grid">

                <StatCard
                    title="Total Appointments"
                    value="08"
                    description="All your appointments"
                    icon="▣"
                />

                <StatCard
                    title="Upcoming"
                    value="02"
                    description="Scheduled appointments"
                    icon="◷"
                />

                <StatCard
                    title="Completed"
                    value="06"
                    description="Previous appointments"
                    icon="✓"
                />

                <StatCard
                    title="Doctors"
                    value="04"
                    description="Doctors consulted"
                    icon="⚕"
                />

            </div>

            <div className="content-panel">
                <h3>Recent Activity</h3>
                <p style={{ color: "#64748b", fontSize: "14px" }}>
                    Your recent appointments will appear here.
                </p>
            </div>
        </>
    );
}