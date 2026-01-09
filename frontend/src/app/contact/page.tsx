"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Get form data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      course: formData.get("course"),
      message: formData.get("message"),
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const res = await fetch(`${apiUrl}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        form.reset();
        alert("Thank you! Your message has been sent successfully.");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to send message. Please checking your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-white overflow-x-hidden min-h-screen">
      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="relative flex h-full min-h-screen w-full flex-col group/design-root md:max-w-7xl md:mx-auto md:px-6 md:pt-12">
        {/* Header (Mobile Only) */}
        <div className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-[#e5e7eb] dark:border-[#1f2937] md:hidden">
          <Link href="/">
            <div className="text-[#111318] dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <span className="material-symbols-outlined">arrow_back</span>
            </div>
          </Link>
          <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            Contact Us
          </h2>
        </div>

        <main className="flex-1 w-full max-w-md mx-auto pb-10 md:max-w-full md:grid md:grid-cols-12 md:gap-12 md:pb-24">
           {/* Left Column (Info) */}
           <div className="md:col-span-5 lg:col-span-4">
             {/* Headline Section */}
            <div className="pt-5 px-4 pb-3 md:pt-0 md:px-0">
                <h2 className="text-[#111318] dark:text-white tracking-light text-[28px] md:text-5xl font-bold leading-tight text-left">
                We're here to help start your tech career.
                </h2>
                <p className="text-[#616f89] dark:text-gray-400 text-base md:text-xl font-normal leading-normal pt-2 md:pt-4">
                Reach out with questions about admissions or courses.
                </p>
            </div>
            
            {/* Quick Action Grid */}
            <div className="grid grid-cols-3 md:grid-cols-1 gap-3 p-4 md:px-0 md:py-8">
                <button className="flex flex-col md:flex-row gap-2 md:gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-800 p-4 items-center md:justify-start justify-center hover:bg-primary/5 dark:hover:bg-gray-700 transition-all group md:p-6 shadow-sm cursor-pointer">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[24px] md:text-[28px] group-hover:scale-110 transition-transform">
                        call
                    </span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-[#111318] dark:text-white text-sm md:text-lg font-bold leading-tight">
                        Call Us
                    </span>
                    <span className="text-[#616f89] dark:text-gray-400 text-xs md:text-sm hidden md:block">
                        Mon-Fri, 9am-6pm
                    </span>
                </div>
                </button>
                <button className="flex flex-col md:flex-row gap-2 md:gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-800 p-4 items-center md:justify-start justify-center hover:bg-primary/5 dark:hover:bg-gray-700 transition-all group md:p-6 shadow-sm cursor-pointer">
                 <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[24px] md:text-[28px] group-hover:scale-110 transition-transform">
                        mail
                    </span>
                 </div>
                 <div className="flex flex-col items-center md:items-start">
                    <span className="text-[#111318] dark:text-white text-sm md:text-lg font-bold leading-tight">
                        Email Us
                    </span>
                     <span className="text-[#616f89] dark:text-gray-400 text-xs md:text-sm hidden md:block">
                        hello@techinstitute.com
                    </span>
                 </div>
                </button>
                <button className="flex flex-col md:flex-row gap-2 md:gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-800 p-4 items-center md:justify-start justify-center hover:bg-primary/5 dark:hover:bg-gray-700 transition-all group md:p-6 shadow-sm cursor-pointer">
                 <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[24px] md:text-[28px] group-hover:scale-110 transition-transform">
                        location_on
                    </span>
                 </div>
                 <div className="flex flex-col items-center md:items-start">
                    <span className="text-[#111318] dark:text-white text-sm md:text-lg font-bold leading-tight">
                        Visit Campus
                    </span>
                     <span className="text-[#616f89] dark:text-gray-400 text-xs md:text-sm hidden md:block">
                        123 Tech Park, City
                    </span>
                 </div>
                </button>
            </div>
           </div>


          {/* Divider (Mobile Only) */}
          <div className="h-px bg-[#e5e7eb] dark:bg-gray-700 mx-4 my-2 md:hidden"></div>

            {/* Right Column (Form) */}
            <div className="md:col-span-7 lg:col-span-8 md:bg-white md:dark:bg-surface-dark md:border md:border-gray-200 md:dark:border-gray-800 md:rounded-2xl md:p-8 md:shadow-sm">
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4 py-3 md:p-0">
                    <div className="flex flex-col gap-1">
                    <h3 className="text-lg md:text-2xl font-bold text-[#111318] dark:text-white mb-2">
                        Send us a message
                    </h3>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-4">
                        <label className="flex flex-col w-full">
                        <span className="text-[#111318] dark:text-gray-300 text-sm font-medium leading-normal pb-2">
                            Full Name
                        </span>
                        <input
                            name="name"
                            required
                            className="form-input flex w-full rounded-lg border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-gray-800 h-12 px-4 text-base text-[#111318] dark:text-white placeholder:text-[#616f89] dark:placeholder:text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="Enter your full name"
                            type="text"
                        />
                        </label>
                        <label className="flex flex-col w-full">
                        <span className="text-[#111318] dark:text-gray-300 text-sm font-medium leading-normal pb-2">
                            Email Address
                        </span>
                        <input
                            name="email"
                            required
                            className="form-input flex w-full rounded-lg border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-gray-800 h-12 px-4 text-base text-[#111318] dark:text-white placeholder:text-[#616f89] dark:placeholder:text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="you@example.com"
                            type="email"
                        />
                        </label>
                    </div>
                    <label className="flex flex-col w-full">
                    <span className="text-[#111318] dark:text-gray-300 text-sm font-medium leading-normal pb-2">
                        Course Interest
                    </span>
                    <div className="relative">
                        <select 
                            name="course"
                            defaultValue=""
                            className="form-select flex w-full appearance-none rounded-lg border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-gray-800 h-12 px-4 pr-10 text-base text-[#111318] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        >
                        <option disabled={true} value="">
                            Select a course
                        </option>
                        <option value="web-dev">Web Development</option>
                        <option value="data-science">Data Science</option>
                        <option value="cyber-security">Cyber Security</option>
                        <option value="ui-ux">UI/UX Design</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <span className="material-symbols-outlined text-xl">
                            expand_more
                        </span>
                        </div>
                    </div>
                    </label>
                    <label className="flex flex-col w-full">
                    <span className="text-[#111318] dark:text-gray-300 text-sm font-medium leading-normal pb-2">
                        Message
                    </span>
                    <textarea
                        name="message"
                        required
                        className="form-textarea flex w-full resize-none rounded-lg border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-gray-800 min-h-[120px] p-4 text-base text-[#111318] dark:text-white placeholder:text-[#616f89] dark:placeholder:text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="How can we help you?"
                    ></textarea>
                    </label>
                    <button
                    disabled={loading}
                    className="mt-2 flex w-full items-center justify-center rounded-lg bg-primary py-3 px-4 text-base font-bold text-white shadow-md hover:bg-blue-700 active:scale-[0.98] transition-all md:w-auto md:self-end md:px-8 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    >
                    {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
