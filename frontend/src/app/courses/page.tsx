"use client";

import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const COURSES = [
  {
    id: 1,
    title: "Full-Stack Web Development Bootcamp",
    category: "Web Dev",
    rating: 4.8,
    duration: "12 Weeks",
    level: "Beginner",
    price: 499,
    originalPrice: 899,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCK0pB_0W_sXK380qn5FW6vJ9hgRFxLH7wCtclCdiRn6vFdselQEBFLGJe0jOPq4Hl_VM_mxPGnzLp3UhHeZM2_5lfmjlfEpzqo_85r5It52cXmTe6hFe7L3ea62KL-9roUEuGdq4ZICACoUVnuM09xyqku76okXJL0THkS2CpDCRW3dZulQg7XAZ7UfzViiUxX0U2jUnkKfqzM9vM0yFk63LEADqLKNWnkOaeQbxtmd7B4HWA47_FduW7QqzYTeQdnjLDKc7KtHyiK",
    bestseller: true,
  },
  {
    id: 2,
    title: "Advanced UI/UX Design Masterclass",
    category: "UI/UX Design",
    rating: 4.9,
    duration: "8 Weeks",
    level: "Intermediate",
    price: 399,
    originalPrice: 699,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLggNlHznJkDW6cuvL7ewG8iO6BF0_aMypMdSI2MnJ1e_xzkrPmm0AejrqLjdHhTDHFt2ZDaPUP8-kCyj_I4rcAufBCpS8QiXUPDWUqHordlaqueeIRmX8Bxy4-62r6cfzWSDyZiXGKyIVOiXkKpYpjeGqDNF6bcaS4jEiObrf78Trst_N7lJwtV4XaaoyTp799Mohsc7TdzI8G7hKeuPWXu_P1ihajBGC47h43nAuHXx7WYJQ4hkfO_Y4QTFjb0iPfOFdarWLd0xe",
    bestseller: false,
  },
  {
    id: 3,
    title: "Data Science with Python",
    category: "Data Science",
    rating: 4.7,
    duration: "16 Weeks",
    level: "Advanced",
    price: 899,
    originalPrice: 1299,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMXKFmE2YDfwXksLYipQXpYI7dSoHr4sbxsaesy0StE3vAZN58Bexd-Avs1z8CPohAzP04LYSBrtCjyMEs1RCRvLakQtAmoVTk1lle8VXHeKKjl6jCeoS9gkVqQIxTtaqVuSPCK9RqCBjR3SwPJAn7nFsfzDKZ5mnYaGxo8McUuj-WKO7HBG0C_KBzjgsiFmSuKYGrSrtt9RBYiuJlYQQc8Ttalnf94gpzG9kQjreFPKXlf7PE31uj3XoOD9k5dWVlqo5aAbJf4Ta3",
    bestseller: false,
  },
   {
    id: 4,
    title: "Cybersecurity Fundamentals",
    category: "Cybersecurity",
    rating: 4.6,
    duration: "10 Weeks",
    level: "Beginner",
    price: 599,
    originalPrice: 999,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxc-AyCXv-RTq5_e9CPoJGiEjnyHCKjqoqGX7WtYkIFt6MuFwcL4fkEozYrAj9Tb_lekKWDiiA2ry8_xsEg0wO_wZ6d4H2B6ylilfkfhbNTD0gdYG9xOT09qSVYtSHSrbEPbaJsrbCH25DfYfddGtnzeE2UpNDctJlKqQJIQ5Qn1IbtEMdgkzGDjus2dwYUrV6vubRTU9bSC1I29pVkDnGBFP5PLLzmXUPGG-_sW7uX5CQ91fBiwJlCP_nD3-t7wlu9BxS2jabZxj1", // Placeholder reuse
    bestseller: false,
  },
];

const CATEGORIES = ["All", "Web Dev", "UI/UX Design", "Data Science", "Cybersecurity"];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory =
      activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased flex flex-col min-h-screen">
       <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Sticky Header Section (Mobile Only) */}
      <header className="flex-shrink-0 z-20 bg-white dark:bg-[#1A2230] shadow-sm md:hidden">
        {/* Top App Bar */}
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/">
            <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-slate-900 dark:text-white transition-colors cursor-pointer">
              <span className="material-symbols-outlined">
                arrow_back_ios_new
              </span>
            </button>
          </Link>
          <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Our Courses
          </h1>
          <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-slate-900 dark:text-white transition-colors relative cursor-pointer">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#1A2230]"></span>
          </button>
        </div>
        {/* Search Bar */}
        <div className="px-4 pb-2">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500">
                search
              </span>
            </div>
            <input
              className="block w-full p-3 pl-10 text-sm text-gray-900 border-none rounded-xl bg-gray-100 dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-800 transition-all placeholder:text-gray-500"
              placeholder="Find your next skill..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        {/* Filter Chips (Horizontal Scroll) */}
        <div className="px-4 pb-4 pt-2">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide py-1">
            {CATEGORIES.map((cat) => (
                <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 h-9 px-5 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
                >
                {cat}
                </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto scrollbar-hide pb-24 md:pb-8 max-w-7xl mx-auto w-full md:px-6 md:pt-8">
        
        {/* Desktop Header & Filters */}
        <div className="hidden md:flex flex-col gap-6 mb-8">
           <div className="flex items-center justify-between">
              <div>
                 <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Explore Courses</h1>
                 <p className="text-gray-500 dark:text-gray-400 mt-2">Discover the perfect course to upgrade your skills.</p>
              </div>
              
              {/* Desktop Search */}
              <div className="relative group w-96">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 dark:text-gray-500">
                    search
                  </span>
                </div>
                <input
                  className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-500"
                  placeholder="Search courses..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
           </div>

           {/* Desktop Filter Tabs */}
           <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700 pb-1">
              {CATEGORIES.map((cat) => (
                  <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 font-medium text-sm transition-colors border-b-2 cursor-pointer ${
                      activeCategory === cat
                      ? "text-primary border-primary font-bold"
                      : "text-gray-600 dark:text-gray-400 hover:text-primary border-transparent"
                  }`}
                  >
                  {cat=== "All" ? "All Courses" : cat}
                  </button>
              ))}
           </div>
        </div>


        {/* Featured Headline (Mobile) */}
        <div className="px-4 pt-6 pb-2 md:hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {activeCategory === "All" ? "Popular Courses" : `${activeCategory} Courses`}
            </h2>
            {activeCategory === "All" && (
                <Link
                href="#"
                className="text-sm font-medium text-primary hover:text-blue-600 dark:hover:text-blue-400"
                >
                View All
                </Link>
            )}
          </div>
        </div>

        {/* Course List Grid */}
        <div className="p-4 space-y-4 md:space-y-0 md:p-0 md:grid md:grid-cols-3 md:gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
            <div key={course.id} className="bg-white dark:bg-[#1A2230] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative h-44 md:h-52 w-full bg-gray-200 dark:bg-gray-700 group-hover:scale-105 transition-transform duration-500 shrink-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                    backgroundImage: `url('${course.image}')`,
                    }}
                ></div>
                 {course.bestseller && (
                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md z-10">
                        <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-orange-500">
                            local_fire_department
                        </span>
                        Bestseller
                        </span>
                    </div>
                 )}
                </div>
                <div className="p-4 md:p-5 relative bg-white dark:bg-[#1A2230] flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {course.category}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500">
                    <span className="material-symbols-outlined text-[16px] fill-current">
                        star
                    </span>
                    <span className="text-xs font-bold text-slate-700 dark:text-gray-300">
                        {course.rating}
                    </span>
                    </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-tight mb-2">
                    {course.title}
                </h3>
                <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm mb-4 mt-auto pt-2">
                    <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">
                        schedule
                    </span>
                    <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">
                        signal_cellular_alt
                    </span>
                    <span>{course.level}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 block line-through">
                        ${course.originalPrice}
                    </span>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">
                        ${course.price}
                    </span>
                    </div>
                    <button className="h-10 px-6 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 active:scale-95 cursor-pointer">
                    View Details
                    </button>
                </div>
                </div>
            </div>
            ))
          ) : (
             <div className="col-span-3 text-center py-12 text-gray-500">
                <p className="text-xl font-bold">No courses found matching your criteria.</p>
                <button onClick={() => { setActiveCategory("All"); setSearchQuery(""); }} className="mt-4 text-primary underline cursor-pointer">Clear filters</button>
             </div>
          )}
        </div>


        <div className="mt-6 md:mt-12 p-6 md:p-12 bg-gradient-to-br from-[#135bec] to-[#4F46E5] rounded-xl text-center text-white shadow-lg mx-4 md:mx-0">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
            <span className="material-symbols-outlined text-white text-2xl md:text-3xl">
              download
            </span>
          </div>
          <h4 className="text-lg md:text-3xl font-bold mb-2">Need more info?</h4>
          <p className="text-blue-100 text-sm md:text-lg mb-4 md:mb-8">
            Download our full course brochure to see detailed curriculums.
          </p>
          <button className="w-full md:w-auto md:px-8 py-3 bg-white text-primary font-bold rounded-lg shadow-sm active:scale-95 transition-transform cursor-pointer">
            Download Brochure
          </button>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
