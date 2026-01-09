"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-40 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center p-4 md:px-8 justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3 z-50 relative">
          <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-[28px]">code</span>
          </div>
          <h2 className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
            TechInstitute
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/courses"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/admissions"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Admissions
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/admissions" className="hidden md:block">
            <button className="px-5 py-2 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-colors cursor-pointer">
              Apply Now
            </button>
          </Link>
          <button
            onClick={toggleMenu}
            className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-transparent text-[#111318] dark:text-white md:hidden z-50 relative"
          >
            <span className="material-symbols-outlined text-[28px]">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

       {/* Mobile Menu Overlay */}
       <div
        className={`fixed inset-0 bg-white dark:bg-background-dark z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link
          href="/"
          onClick={toggleMenu}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Home
        </Link>
        <Link
          href="/about"
           onClick={toggleMenu}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          About
        </Link>
        <Link
          href="/courses"
           onClick={toggleMenu}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Courses
        </Link>
        <Link
          href="/admissions"
           onClick={toggleMenu}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Admissions
        </Link>
        <Link
          href="/contact"
           onClick={toggleMenu}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Contact
        </Link>
        <Link href="/admissions" onClick={toggleMenu}>
          <button className="px-8 py-3 rounded-xl bg-primary text-white text-lg font-bold shadow-lg cursor-pointer">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
}
