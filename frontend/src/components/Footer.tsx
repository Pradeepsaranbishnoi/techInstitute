import Link from "next/link";

export default function Footer() {
  return (
    <footer className="hidden md:block bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-[20px]">
                  code
                </span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                TechInstitute
              </span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of tech leaders with industry-ready
              skills and mentorship.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">
              Programs
            </h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  href="/courses?category=web-dev"
                  className="hover:text-primary transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=data-science"
                  className="hover:text-primary transition-colors"
                >
                  Data Science
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=ui-ux"
                  className="hover:text-primary transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=cyber-security"
                  className="hover:text-primary transition-colors"
                >
                  Cyber Security
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">
              Institute
            </h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="hover:text-primary transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="size-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">
                  alternate_email
                </span>
              </a>
              <a
                href="#"
                className="size-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">
                  call
                </span>
              </a>
              <a
                href="#"
                className="size-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">
                  map
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} TechInstitute. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-900 dark:hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
