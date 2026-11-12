
"use client";

import { useEffect, useState } from "react";

interface HealthResponse {
    status: string;
    application?: string;
    database?: string;
}

interface ConnectionStatus {
    state: "checking" | "connected" | "failed";
    message: string;
}

interface StatusCardProps {
    title: string;
    status: ConnectionStatus;
}

// StatusCard is now outside BackendTest
function StatusCard({ title, status }: StatusCardProps) {
    const isConnected = status.state === "connected";
    const isChecking = status.state === "checking";

    return (
        <div className="rounded-xl border border-gray-700 bg-gray-900 p-5">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">
                    {title}
                </h2>

                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        isConnected
                            ? "bg-green-900 text-green-300"
                            : isChecking
                              ? "bg-yellow-900 text-yellow-300"
                              : "bg-red-900 text-red-300"
                    }`}
                >
                    {isConnected
                        ? "CONNECTED"
                        : isChecking
                          ? "CHECKING"
                          : "FAILED"}
                </span>
            </div>

            <p className="mt-3 text-sm text-gray-400">
                {status.message}
            </p>
        </div>
    );
}

export default function BackendTest() {
    const [backend, setBackend] = useState<ConnectionStatus>({
        state: "checking",
        message: "Checking backend...",
    });

    const [database, setDatabase] = useState<ConnectionStatus>({
        state: "checking",
        message: "Waiting for database test...",
    });

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        async function checkConnections() {
            if (!API_URL) {
                setBackend({
                    state: "failed",
                    message: "NEXT_PUBLIC_API_URL is not configured",
                });

                setDatabase({
                    state: "failed",
                    message: "Cannot test database",
                });

                return;
            }

            // 1. Test Spring Boot Backend
            try {
                const response = await fetch(`${API_URL}/health`);

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }

                const data: HealthResponse = await response.json();

                setBackend({
                    state: "connected",
                    message: `${data.application ?? "Backend"} is running`,
                });
            } catch (error) {
                setBackend({
                    state: "failed",
                    message:
                        error instanceof Error
                            ? error.message
                            : "Backend connection failed",
                });

                setDatabase({
                    state: "failed",
                    message: "Backend unavailable",
                });

                return;
            }

            // 2. Test PostgreSQL through Spring Boot
            try {
                const response = await fetch(`${API_URL}/db-health`);

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }

                const data: HealthResponse = await response.json();

                if (data.status !== "CONNECTED") {
                    throw new Error("Database is not connected");
                }

                setDatabase({
                    state: "connected",
                    message: `${data.database ?? "PostgreSQL"} is connected`,
                });
            } catch (error) {
                setDatabase({
                    state: "failed",
                    message:
                        error instanceof Error
                            ? error.message
                            : "Database connection failed",
                });
            }
        }

        checkConnections();
    }, [API_URL]);

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-950 p-6">
            <div className="w-full max-w-2xl space-y-6">

                {/* Application Header */}
                <header>
                    <h1 className="text-2xl font-bold text-amber-900">
                        MediChannel
                    </h1>

                    <p className="mt-2 text-gray-400">
                        Full Stack Integration Test
                    </p>
                </header>

                {/* Connection Status */}
                <StatusCard
                    title="Spring Boot Backend"
                    status={backend}
                />

                <StatusCard
                    title="PostgreSQL Database"
                    status={database}
                />

                {/* Architecture Diagram */}
                <div className="rounded-xl border border-gray-700 bg-gray-900 p-5">
                    <h2 className="font-semibold text-white">
                        Application Architecture
                    </h2>

                    <div className="mt-4 space-y-3 text-center">

                        <div className="rounded-lg bg-blue-900/40 p-3 text-blue-300">
                            Next.js Frontend
                            <p className="text-xs">localhost:3000</p>
                        </div>

                        <div className="text-gray-500">
                            ↓ REST API ↓
                        </div>

                        <div className="rounded-lg bg-green-900/40 p-3 text-green-300">
                            Spring Boot Backend
                            <p className="text-xs">localhost:8080</p>
                        </div>

                        <div className="text-gray-500">
                            ↓ JDBC ↓
                        </div>

                        <div className="rounded-lg bg-orange-900/40 p-3 text-orange-300">
                            PostgreSQL Database
                            <p className="text-xs">localhost:5432</p>
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-xs text-gray-500">
                    MediChannel Development Environment
                </p>

            </div>
        </main>
    );
}
