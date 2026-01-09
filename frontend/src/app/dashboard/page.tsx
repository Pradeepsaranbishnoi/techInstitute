"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Lead {
  _id: string;
  name: string;
  email: string;
  course: string;
  date: string;
  status: string;
  message: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      router.push("/login");
      return;
    }

    setIsAuthenticated(true);
    fetchLeads(token);
  }, [router]);

  const fetchLeads = async (token: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const res = await fetch(`${apiUrl}/leads`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (res.status === 401) {
        handleLogout();
        return;
      }

      const data = await res.json();
      
      if (Array.isArray(data)) {
        setLeads(data);
      } else {
        console.error("Failed to fetch leads:", data);
        setLeads([]); // Fallback to empty array
      }
    } catch (error) {
      console.error("Error fetching leads:", error);
      setLeads([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    document.cookie = "auth=; path=/; max-age=0";
    router.push("/login");
  };

  if (!isAuthenticated && !loading) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background-dark font-display text-gray-900 dark:text-gray-100 flex">
      {/* Sidebar (Simple) */}
      <aside className="w-64 bg-white dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 hidden md:flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
           <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-xl">code</span>
            </div>
            <h2 className="text-[#111318] dark:text-white text-lg font-bold">
              TechInstitute
            </h2>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined">group</span>
            Students
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined">school</span>
            Courses
          </a>
        </nav>
        <div className="p-4 border-t border-gray-100 dark:border-gray-800">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">logout</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 p-4 md:px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
             <button className="md:hidden text-gray-500">
                <span className="material-symbols-outlined">menu</span>
             </button>
             <h1 className="text-xl md:text-2xl font-bold">Lead Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
               <span className="material-symbols-outlined text-gray-500 dark:text-gray-300">person</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 md:p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Total Leads</p>
              <h3 className="text-3xl font-bold">{leads.length}</h3>
            </div>
             <div className="p-6 rounded-2xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">New Today</p>
              <h3 className="text-3xl font-bold text-green-500">
                {leads.filter(l => new Date(l.date).toDateString() === new Date().toDateString()).length}
              </h3>
            </div>
             <div className="p-6 rounded-2xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Pending</p>
              <h3 className="text-3xl font-bold text-amber-500">
                 {leads.filter(l => l.status === 'New').length}
              </h3>
            </div>
             <div className="p-6 rounded-2xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Conversion Rate</p>
              <h3 className="text-3xl font-bold text-blue-500">18%</h3>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <h3 className="font-bold text-lg">Recent Inquiries</h3>
              <button className="text-primary text-sm font-bold hover:underline cursor-pointer">View All</button>
            </div>
            {loading ? (
                <div className="p-12 text-center text-gray-500">Loading leads...</div>
            ) : leads.length === 0 ? (
                <div className="p-12 text-center text-gray-500">No leads found.</div>
            ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800 text-xs uppercase text-gray-500 dark:text-gray-400 font-semibold tracking-wider">
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Program Interest</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {leads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="font-bold text-gray-900 dark:text-white">{lead.name}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{lead.email}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {lead.course || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {new Date(lead.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          lead.status === 'New' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                          lead.status === 'Contacted' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                          lead.status === 'Enrolled' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                          'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                       <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 max-w-xs truncate">
                        {lead.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
