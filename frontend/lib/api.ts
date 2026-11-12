
const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function apiRequest<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        cache: "no-store",
    });

    if (!response.ok) {
        let message = `API Error: ${response.status}`;

        try {
            const errorData = await response.json();
            message = errorData.error || message;
        } catch {
            // Keep the default error message.
        }

        throw new Error(message);
    }

    if (response.status === 204) {
        return undefined as T;
    }

    return response.json();
}

export function apiGet<T>(endpoint: string): Promise<T> {
    return apiRequest<T>(endpoint);
}

export function apiPost<T>(endpoint: string, data: unknown): Promise<T> {
    return apiRequest<T>(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
    });
}

export function apiPut<T>(endpoint: string, data: unknown): Promise<T> {
    return apiRequest<T>(endpoint, {
        method: "PUT",
        body: JSON.stringify(data),
    });
}

export function apiDelete(endpoint: string): Promise<void> {
    return apiRequest<void>(endpoint, {
        method: "DELETE",
    });
}
