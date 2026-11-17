import PageHeader from "@/components/common/PageHeader";
import StatCard from "@/components/common/StatCard";

export default function DoctorDashboardPage() {
    return (
        <>
            <PageHeader
                title="Doctor Dashboard"
                description="Manage your appointments and patients."
            />

            <div className="stats-grid">

                <StatCard
                    title="Today's Appointments"
                    value="12"
                    description="Scheduled for today"
                    icon="▣"
                />

                <StatCard
                    title="Total Patients"
                    value="156"
                    description="Registered patients"
                    icon="♙"
                />

                <StatCard
                    title="Completed"
                    value="08"
                    description="Appointments completed"
                    icon="✓"
                />

                <StatCard
                    title="Pending"
                    value="04"
                    description="Upcoming consultations"
                    icon="◷"
                />

            </div>

            <div className="content-panel">
                <h3>Today&apos;s Schedule</h3>
                <p style={{ color: "#64748b", fontSize: "14px" }}>
                    Your appointment schedule will appear here.
                </p>
            </div>
        </>
    );
}