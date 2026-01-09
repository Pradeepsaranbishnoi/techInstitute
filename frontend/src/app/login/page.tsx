"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const res = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Store token in localStorage and cookie for middleware/client checks
        localStorage.setItem('token', data.token);
        localStorage.setItem('userInfo', JSON.stringify({ username: data.username }));
        // Keep simple cookie for basic protection, though token is key
        document.cookie = "auth=true; path=/; max-age=3600";
        router.push("/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Failed to connect to server");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-background-dark px-4">
      <div className="max-w-md w-full bg-white dark:bg-surface-dark rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary mb-4">
            <span className="material-symbols-outlined text-3xl">lock</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Admin Login
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Sign in to access the dashboard
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium text-center">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="Enter your ID"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all cursor-pointer"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-6 text-center">
             <Link href="/" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Back to Home
             </Link>
        </div>
      </div>
    </div>
  );
}
