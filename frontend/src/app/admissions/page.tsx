"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";

export default function Admissions() {
  const handleApply = () => {
    alert("Application portal opening soon!");
  };

  const handleEnquire = () => {
    alert("Thank you for your interest! We will contact you.");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100 antialiased selection:bg-primary/20 min-h-screen pb-24 md:pb-0">
      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden md:max-w-7xl md:mx-auto md:px-6 md:pt-8 md:pb-16">
        {/* Top App Bar (Mobile Only) */}
        <div className="sticky top-0 z-50 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 border-b border-gray-200 dark:border-gray-800 md:hidden">
          <Link href="/">
            <div className="text-gray-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full active:bg-gray-200 dark:active:bg-gray-800 transition-colors cursor-pointer">
              <span className="material-symbols-outlined">arrow_back</span>
            </div>
          </Link>
          <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
            Admissions
          </h2>
        </div>

        <div className="md:grid md:grid-cols-12 md:gap-12">
           {/* Left Column */}
           <div className="md:col-span-7 lg:col-span-8">
             {/* Hero Section */}
            <div className="px-4 pt-6 pb-2 md:px-0 md:pt-0">
              <h1 className="text-primary dark:text-blue-400 text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-2 md:mb-4">
                Admissions 2026
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-xl font-normal leading-relaxed">
                Start your tech career today. Browse requirements and apply online.
              </p>
            </div>

            {/* Admission Process Timeline */}
            <div className="px-4 py-2 md:px-0 md:py-8">
              <h3 className="text-gray-900 dark:text-white text-lg md:text-2xl font-bold mb-4 md:mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">
                  timeline
                </span>
                How to Apply
              </h3>
              <div className="relative pl-2 md:pl-4">
                {/* Vertical Line */}
                <div className="absolute top-2 bottom-6 left-[19px] md:left-[27px] w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                {/* Step 1 */}
                <div className="relative flex gap-4 md:gap-6 mb-6 md:mb-12 group">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-md z-10 border-4 border-background-light dark:border-background-dark">
                    <span className="material-symbols-outlined text-sm md:text-xl">
                      app_registration
                    </span>
                  </div>
                  <div className="flex-1 pt-1 md:pt-2">
                    <h4 className="text-gray-900 dark:text-white font-semibold text-base md:text-xl">
                      Submit Application
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mt-1">
                      Fill out the online form with your personal details and academic
                      history.
                    </p>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="relative flex gap-4 md:gap-6 mb-6 md:mb-12 group">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 flex items-center justify-center shrink-0 z-10 shadow-sm">
                    <span className="material-symbols-outlined text-sm md:text-xl">quiz</span>
                  </div>
                  <div className="flex-1 pt-1 md:pt-2">
                    <h4 className="text-gray-900 dark:text-white font-semibold text-base md:text-xl">
                      Entrance Assessment
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mt-1">
                      Take a 45-minute logic and aptitude test online.
                    </p>
                  </div>
                </div>
                 {/* Step 3 (Added for completeness on desktop) */}
                <div className="relative flex gap-4 md:gap-6 mb-6 md:mb-12 group">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 flex items-center justify-center shrink-0 z-10 shadow-sm">
                    <span className="material-symbols-outlined text-sm md:text-xl">person_check</span>
                  </div>
                  <div className="flex-1 pt-1 md:pt-2">
                    <h4 className="text-gray-900 dark:text-white font-semibold text-base md:text-xl">
                      Interview & Offer
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mt-1">
                      Final interview with faculty followed by admission offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
           </div>

           {/* Right Column / Sidebar */}
           <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
              {/* Program Selector */}
            <div className="px-4 py-4 md:p-6 md:bg-white md:dark:bg-surface-dark md:rounded-2xl md:shadow-sm md:border md:border-gray-100 md:dark:border-gray-800">
              <label className="block">
                <span className="text-gray-900 dark:text-gray-200 text-sm font-semibold mb-2 block md:text-base">
                  Select Program
                </span>
                <div className="relative">
                  <select className="form-select block w-full rounded-xl border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary focus:ring-primary py-3 pl-4 pr-10 shadow-sm appearance-none">
                    <option>Full Stack Development</option>
                    <option>Data Science & AI</option>
                    <option>Cyber Security</option>
                    <option>UI/UX Design</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <span className="material-symbols-outlined text-lg">
                      expand_more
                    </span>
                  </div>
                </div>
              </label>
            </div>

            {/* Deadline Alert Card */}
            <div className="px-4 pb-6 md:px-0 md:pb-0">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-blue-600 p-5 shadow-lg text-white">
                <div className="flex items-start justify-between gap-4 relative z-10">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wider">
                        Upcoming
                      </span>
                    </div>
                    <h3 className="text-lg font-bold">Fall Batch Deadline</h3>
                    <p className="text-blue-100 text-sm font-medium opacity-90">
                      Applications close on October 15th
                    </p>
                  </div>
                  <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm shrink-0">
                    <span className="material-symbols-outlined text-2xl">
                      calendar_clock
                    </span>
                  </div>
                </div>
                {/* Decorative Circle */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              </div>
            </div>

             {/* Desktop Enquire/Apply Buttons (Hidden on Mobile) */}
             <div className="hidden md:flex flex-col gap-3">
                 <button 
                  onClick={handleApply}
                  className="w-full px-4 py-4 rounded-xl bg-primary hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] text-lg cursor-pointer">
                  Apply Now
                </button>
                <button 
                  onClick={handleEnquire}
                  className="w-full px-4 py-4 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white font-semibold bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                  Enquire
                </button>
             </div>
           </div>
        </div>

        {/* Sticky Bottom Bar (Mobile Only) */}
        <div className="fixed bottom-0 left-0 w-full bg-white/90 dark:bg-[#101622]/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 p-4 pb-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-40 md:hidden">
          <div className="flex gap-3 max-w-lg mx-auto">
            <button 
              onClick={handleEnquire}
              className="flex-1 px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white font-semibold bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              Enquire
            </button>
            <button 
              onClick={handleApply}
              className="flex-[2] px-4 py-3.5 rounded-xl bg-primary hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] cursor-pointer">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
