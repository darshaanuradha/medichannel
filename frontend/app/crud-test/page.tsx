"use client";

import { useCallback, useEffect, useState } from "react";
import { apiDelete, apiGet, apiPost, apiPut } from "@/lib/api";

interface CrudTestRecord {
  id: number;
  name: string;
  description: string | null;
  createdAt: string;
}

interface CrudTestRequest {
  name: string;
  description: string;
}

export default function CrudTestPage() {
  const [records, setRecords] = useState<CrudTestRecord[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Reusable function for refreshing records
  const loadRecords = useCallback(async () => {
    try {
      setError("");

      const data = await apiGet<CrudTestRecord[]>("/crud-tests");

      setRecords(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load records");
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial data loading
  useEffect(() => {
    let cancelled = false;

    apiGet<CrudTestRecord[]>("/crud-tests")
      .then((data) => {
        if (!cancelled) {
          setRecords(data);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to load records",
          );
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  function resetForm() {
    setName("");
    setDescription("");
    setEditingId(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const request: CrudTestRequest = {
      name: name.trim(),
      description: description.trim(),
    };

    if (!request.name) {
      setError("Name is required");
      return;
    }

    try {
      setSaving(true);
      setError("");
      setMessage("");

      if (editingId === null) {
        await apiPost<CrudTestRecord>("/crud-tests", request);
        setMessage("Record created successfully.");
      } else {
        await apiPut<CrudTestRecord>(`/crud-tests/${editingId}`, request);
        setMessage("Record updated successfully.");
      }

      resetForm();
      await loadRecords();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Operation failed");
    } finally {
      setSaving(false);
    }
  }

  function handleEdit(record: CrudTestRecord) {
    setEditingId(record.id);
    setName(record.name);
    setDescription(record.description ?? "");
    setError("");
    setMessage("");
  }

  async function handleDelete(id: number) {
    if (!window.confirm("Are you sure you want to delete this record?")) {
      return;
    }

    try {
      setError("");
      setMessage("");

      await apiDelete(`/crud-tests/${id}`);

      if (editingId === id) {
        resetForm();
      }

      setMessage("Record deleted successfully.");

      await loadRecords();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-3xl font-bold">MediChannel CRUD Test</h1>

        <p className="mb-8 text-gray-400">Next.js → Spring Boot → PostgreSQL</p>

        <section className="mb-10 rounded-xl border border-gray-800 bg-gray-900 p-6">
          <h2 className="mb-5 text-xl font-semibold">
            {editingId === null ? "Create Record" : `Edit Record #${editingId}`}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm text-gray-300">Name</label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                required
                placeholder="Enter name"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={255}
                rows={3}
                placeholder="Enter description"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-blue-600 px-5 py-3 font-medium hover:bg-blue-700 disabled:opacity-50"
              >
                {saving
                  ? "Saving..."
                  : editingId === null
                    ? "Create Record"
                    : "Update Record"}
              </button>

              {editingId !== null && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-lg bg-gray-700 px-5 py-3 hover:bg-gray-600"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        {error && (
          <div className="mb-5 rounded-lg border border-red-800 bg-red-950 p-4 text-red-300">
            {error}
          </div>
        )}

        {message && (
          <div className="mb-5 rounded-lg border border-green-800 bg-green-950 p-4 text-green-300">
            {message}
          </div>
        )}

        <section className="rounded-xl border border-gray-800 bg-gray-900 p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Records ({records.length})
            </h2>

            <button
              onClick={() => void loadRecords()}
              disabled={loading}
              className="rounded-lg bg-gray-700 px-4 py-2 text-sm hover:bg-gray-600 disabled:opacity-50"
            >
              Refresh
            </button>
          </div>

          {loading ? (
            <p className="text-gray-400">Loading records...</p>
          ) : records.length === 0 ? (
            <p className="text-gray-400">
              No records found. Create your first record.
            </p>
          ) : (
            <div className="space-y-4">
              {records.map((record) => (
                <div
                  key={record.id}
                  className="flex flex-col justify-between gap-4 rounded-lg border border-gray-700 bg-gray-800 p-4 sm:flex-row sm:items-center"
                >
                  <div>
                    <h3 className="font-semibold">
                      #{record.id} — {record.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {record.description || "No description"}
                    </p>

                    <p className="mt-2 text-xs text-gray-500">
                      Created: {new Date(record.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(record)}
                      className="rounded-lg bg-yellow-600 px-4 py-2 text-sm hover:bg-yellow-700"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => void handleDelete(record.id)}
                      className="rounded-lg bg-red-600 px-4 py-2 text-sm hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
