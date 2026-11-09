"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Lead = {
  id: number;
  name: string | null;
  phone: string | null;
  province: string | null;
  procedure: string | null;
  status: string | null;
};

const STATUSES = [
  "New",
  "Contacted",
  "Processing",
  "Completed",
  "Cancelled",
];

export default function AdminPage() {
  const router = useRouter();

  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const getLeads = useCallback(async () => {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to fetch leads:", error);
      return;
    }

    setLeads((data ?? []) as Lead[]);
  }, []);

  // LOGIN CHECK
  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");

    if (isAdmin !== "true") {
      router.replace("/login");
      return;
    }

    const timer = window.setTimeout(() => {
      void getLeads().finally(() => setLoading(false));
    }, 0);

    return () => window.clearTimeout(timer);
  }, [router, getLeads]);

  // UPDATE LEAD STATUS
  async function updateStatus(id: number, status: string) {
    setUpdatingId(id);

    const { error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("Failed to update lead:", error);
      alert("Failed to update status. Please try again.");
      setUpdatingId(null);
      return;
    }

    setLeads((currentLeads) =>
      currentLeads.map((lead) =>
        lead.id === id ? { ...lead, status } : lead
      )
    );

    setUpdatingId(null);
  }

  // LOGOUT
  function logout() {
    localStorage.removeItem("admin");
    router.replace("/login");
  }

  const filteredLeads = leads.filter((lead) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      (lead.name ?? "").toLowerCase().includes(searchTerm) ||
      (lead.phone ?? "").includes(search);

    const matchesFilter =
      filter === "All" || (lead.status ?? "New") === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-10">
      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold sm:text-4xl">
          Admin Dashboard
        </h1>

        <button
          onClick={logout}
          className="rounded-xl bg-red-600 px-5 py-2 text-white hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* TOTAL LEADS */}
      <div className="mb-6 rounded-xl bg-white p-5 shadow">
        <h2 className="text-xl font-bold">
          Total Leads: {leads.length}
        </h2>
      </div>

      {/* SEARCH + FILTER */}
      <div className="mb-6 flex flex-col gap-4 rounded-xl bg-white p-5 shadow sm:flex-row">
        <input
          className="w-full rounded border p-2"
          placeholder="Search by name or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="rounded border p-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          {STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {/* LEADS LIST */}
      <div className="space-y-5">
        {loading ? (
          <div className="rounded-xl bg-white p-8 text-center text-gray-500 shadow">
            Loading leads...
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="rounded-xl bg-white p-8 text-center text-gray-500 shadow">
            No leads found.
          </div>
        ) : (
          filteredLeads.map((lead) => (
            <div
              key={lead.id}
              className="rounded-xl bg-white p-6 shadow"
            >
              <p>
                <b>Name:</b> {lead.name || "N/A"}
              </p>
              <p>
                <b>Phone:</b> {lead.phone || "N/A"}
              </p>
              <p>
                <b>Province:</b> {lead.province || "N/A"}
              </p>
              <p>
                <b>Procedure:</b> {lead.procedure || "N/A"}
              </p>

              {/* STATUS */}
              <div className="mt-3">
                <label
                  htmlFor={`status-${lead.id}`}
                  className="font-bold"
                >
                  Status:
                </label>

                <select
                  id={`status-${lead.id}`}
                  value={lead.status || "New"}
                  disabled={updatingId === lead.id}
                  onChange={(e) =>
                    void updateStatus(lead.id, e.target.value)
                  }
                  className="ml-2 rounded border p-2 disabled:opacity-50"
                >
                  {STATUSES.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>

                {updatingId === lead.id && (
                  <span className="ml-2 text-sm text-gray-500">
                    Saving...
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}