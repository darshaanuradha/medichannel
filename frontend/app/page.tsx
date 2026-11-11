"use client";

import { useEffect, useState } from "react";

export default function BackendTest() {
    const [result, setResult] = useState("Connecting...");

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/health`)
            .then(response => {
                if (!response.ok) throw new Error("Backend error");
                return response.json();
            })
            .then(data => setResult(JSON.stringify(data)))
            .catch(() => setResult("Backend connection failed"));
    }, []);

    return (
        <main>
            <h1>MediChannel API Test</h1>
            <p>{result}</p>
        </main>
    );
}