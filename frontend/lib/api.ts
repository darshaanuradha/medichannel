const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiGet<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`);

    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
}