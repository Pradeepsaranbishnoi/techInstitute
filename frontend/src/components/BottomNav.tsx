import Link from "next/link";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-[84px] bg-white/95 dark:bg-[#111318]/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-5 md:hidden">
      <div className="grid grid-cols-4 h-full">
        <Link
          href="/"
          className="flex flex-col items-center justify-center gap-1 group"
        >
          <div className="rounded-full px-4 py-1 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-[24px] text-primary filled">
              home
            </span>
          </div>
          <span className="text-[10px] font-medium text-primary">Home</span>
        </Link>
        <Link
          href="/courses"
          className="flex flex-col items-center justify-center gap-1 group"
        >
          <div className="rounded-full px-4 py-1 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-[24px] text-gray-400 dark:text-gray-500 group-hover:text-primary dark:group-hover:text-primary transition-colors">
              menu_book
            </span>
          </div>
          <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary transition-colors">
            Courses
          </span>
        </Link>
        <Link
          href="/admissions"
          className="flex flex-col items-center justify-center gap-1 group"
        >
          <div className="rounded-full px-4 py-1 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-[24px] text-gray-400 dark:text-gray-500 group-hover:text-primary dark:group-hover:text-primary transition-colors">
              assignment_add
            </span>
          </div>
          <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary transition-colors">
            Admissions
          </span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center justify-center gap-1 group"
        >
          <div className="rounded-full px-4 py-1 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-[24px] text-gray-400 dark:text-gray-500 group-hover:text-primary dark:group-hover:text-primary transition-colors">
              account_circle
            </span>
          </div>
          <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary transition-colors">
            Profile
          </span>
        </Link>
      </div>
    </div>
  );
}
