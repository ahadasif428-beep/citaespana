"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const router = useRouter();

  const [leads, setLeads] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // ---------------- LOGIN CHECK ----------------
  useEffect(() => {
    const admin = localStorage.getItem("admin");

    if (admin !== "true") {
      router.replace("/login");
    } else {
      getLeads();
    }
  }, []);

  // ---------------- FETCH LEADS ----------------
  async function getLeads() {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setLeads(data || []);
  }

  // ---------------- UPDATE STATUS ----------------
  async function updateStatus(id: number, status: string) {
    const { error } = await supabase
      .from("leads")
      .update({ status: status })
      .eq("id", id);

    if (error) {
      console.log(error);
      return;
    }

    getLeads();
  }

  // ---------------- LOGOUT ----------------
  function logout() {
    localStorage.removeItem("admin");
    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-red-600 text-white px-5 py-2 rounded-xl"
        >
          Logout
        </button>
      </div>

      {/* TOTAL LEADS */}
      <div className="bg-white p-5 rounded-xl shadow mb-6">
        <h2 className="text-xl font-bold">
          Total Leads: {leads.length}
        </h2>
      </div>

      {/* SEARCH + FILTER */}
      <div className="bg-white p-5 rounded-xl shadow mb-6 flex gap-4">

        {/* SEARCH */}
        <input
          className="border p-2 rounded w-full"
          placeholder="Search by name or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* FILTER */}
        <select
          className="border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Processing">Processing</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>

      </div>

      {/* LEADS LIST */}
      <div className="space-y-5">

        {leads
          .filter((lead) => {
            const matchesSearch =
              lead.name?.toLowerCase().includes(search.toLowerCase()) ||
              lead.phone?.includes(search);

            const matchesFilter =
              filter === "All" || lead.status === filter;

            return matchesSearch && matchesFilter;
          })
          .map((lead) => (
            <div
              key={lead.id}
              className="bg-white p-6 rounded-xl shadow"
            >

              <p><b>Name:</b> {lead.name}</p>
              <p><b>Phone:</b> {lead.phone}</p>
              <p><b>Province:</b> {lead.province}</p>
              <p><b>Procedure:</b> {lead.procedure}</p>

              {/* STATUS */}
              <div className="mt-3">
                <label className="font-bold">Status:</label>

                <select
                  value={lead.status || "New"}
                  onChange={(e) =>
                    updateStatus(lead.id, e.target.value)
                  }
                  className="border p-2 rounded ml-2"
                >
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Processing</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </div>

            </div>
          ))}

      </div>

    </main>
  );
}