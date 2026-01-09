import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-white pb-24 md:pb-0 min-h-screen font-display">
      <Navbar />

      <main className="max-w-7xl mx-auto md:px-6">
        {/* Hero Section */}
        <div className="p-4 md:py-8">
          <div
            className="relative flex min-h-[420px] md:min-h-[560px] flex-col gap-6 overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat p-6 items-start justify-end md:justify-center md:pl-16 shadow-lg"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8JjoAeBb5l8iVBS0tE-aNj31slS8xJ_SHShIPAj0OKdiXnfaUr4I8Gih3edkUkBuXDA7Ilz2t_tRnt--ZVOnuv-1riszzNaiNXgRn7DbNahGMdmVm9ozeuPUNrlL-It3B5J2YtF9owmMt2LRzSQasJIlBT4xXqTMYrl8GW43YdHZrVu-TN7AU2VlP33D3XzCgoWbocoOqDF_Q7ca5IRLSpaPyCAUnI4gIdRo5O3fKUZ-TWWyZG7ct9RKnXN_GsoKOQj5uXBVxtnAy")',
            }}
          >
            <div className="absolute inset-0 bg-black/30 md:bg-black/40"></div>
            <div className="flex flex-col gap-3 max-w-[320px] md:max-w-xl relative z-10">
              <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs md:text-sm font-medium text-white ring-1 ring-inset ring-white/30 w-fit">
                New Cohort Starting Soon
              </div>
              <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
                Master the Future of Tech
              </h1>
              <p className="text-gray-200 text-base md:text-lg font-normal leading-normal md:max-w-lg">
                Industry-leading courses in coding, design, and data science
                designed to get you hired.
              </p>
              <div className="pt-2 md:pt-4">
                <Link href="/admissions">
                  <button className="flex w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 md:h-14 px-6 md:px-8 bg-primary hover:bg-blue-600 text-white text-base md:text-lg font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-blue-900/20 cursor-pointer">
                    <span className="truncate">Apply for Admission</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 md:grid md:grid-cols-3 md:gap-8 md:px-4 pb-2 md:pb-8">
          <div className="flex min-w-[140px] flex-1 flex-col justify-center gap-1 rounded-xl p-5 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 md:items-center md:text-center md:hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 text-primary mb-1 md:justify-center">
              <span className="material-symbols-outlined text-[20px] md:text-[32px]">
                school
              </span>
            </div>
            <p className="text-[#111318] dark:text-white tracking-tight text-2xl md:text-4xl font-bold leading-tight">
              500+
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium leading-normal">
              Graduates
            </p>
          </div>
          <div className="flex min-w-[140px] flex-1 flex-col justify-center gap-1 rounded-xl p-5 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 md:items-center md:text-center md:hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 text-primary mb-1 md:justify-center">
              <span className="material-symbols-outlined text-[20px] md:text-[32px]">
                trending_up
              </span>
            </div>
            <p className="text-[#111318] dark:text-white tracking-tight text-2xl md:text-4xl font-bold leading-tight">
              98%
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium leading-normal">
              Placement
            </p>
          </div>
          <div className="flex min-w-[140px] flex-1 flex-col justify-center gap-1 rounded-xl p-5 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 md:items-center md:text-center md:hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 text-primary mb-1 md:justify-center">
              <span className="material-symbols-outlined text-[20px] md:text-[32px]">
                handshake
              </span>
            </div>
            <p className="text-[#111318] dark:text-white tracking-tight text-2xl md:text-4xl font-bold leading-tight">
              50+
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium leading-normal">
              Partners
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="px-4 py-6 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            <div className="flex flex-col gap-3 p-4 rounded-xl bg-primary/5 dark:bg-primary/10 hover:bg-primary/10 transition-colors">
              <div className="size-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">person_apron</span>
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-lg text-gray-900 dark:text-white">
                  Expert Faculty
                </h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Learn from industry veterans
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-4 rounded-xl bg-primary/5 dark:bg-primary/10 hover:bg-primary/10 transition-colors">
              <div className="size-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">terminal</span>
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-lg text-gray-900 dark:text-white">
                  Live Projects
                </h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Real-world coding experience
                </p>
              </div>
            </div>
             <div className="flex flex-col gap-3 p-4 rounded-xl bg-primary/5 dark:bg-primary/10 hover:bg-primary/10 transition-colors">
              <div className="size-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-lg text-gray-900 dark:text-white">
                  Certified
                </h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Recognized industry certificates
                </p>
              </div>
            </div>
             <div className="flex flex-col gap-3 p-4 rounded-xl bg-primary/5 dark:bg-primary/10 hover:bg-primary/10 transition-colors">
              <div className="size-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-lg text-gray-900 dark:text-white">
                  24/7 Support
                </h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Always here to help you learn
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Courses Header */}
        <div className="flex items-center justify-between px-4 pt-4 pb-2 md:pt-12 md:pb-8">
          <h3 className="text-[#111318] dark:text-white text-lg md:text-3xl font-bold leading-tight tracking-[-0.015em]">
            Popular Courses
          </h3>
          <Link href="/courses">
            <button className="text-primary text-sm md:text-base font-bold flex items-center cursor-pointer hover:underline">
              View All{" "}
              <span className="material-symbols-outlined text-sm md:text-base ml-1">
                arrow_forward
              </span>
            </button>
          </Link>
        </div>

        {/* Courses Carousel / Grid */}
        <div className="flex overflow-x-auto no-scrollbar pb-6 px-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:pb-12 md:overflow-visible">
          <div className="flex gap-4 md:contents">
            {/* Course 1 */}
            <Link href="/courses?id=1" className="contents">
            <div className="snap-center shrink-0 w-[280px] md:w-auto flex flex-col gap-4 rounded-xl bg-white dark:bg-gray-800 shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 dark:border-gray-700 md:hover:shadow-xl md:hover:-translate-y-1 transition-all">
              <div
                className="w-full h-40 md:h-52 bg-center bg-cover relative"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDge5t95OkZPCxk56B8atJHscjagI4rNi5F2MdBNjSXhRSjaJKgkkrcmQ8ZwBxq9ZHPn7t0nYC3C8aT9769l0iA7ktwWpqnAdqQFy-ZLfWhaD6IzZuq-zlm6EFgmbC_uvdmGKH7-s4ietR07mrf5YH7GkorAQ9jKNecRhyCnV3KkjTZjHMX4l09Tecs-SdcwUp5O7nqhwgR5WtTPZ1Eqo9GDeTw-Ys0dTjkauQYhOhQGnoYoiQOIN9Oygeqn8s21_TUWdNYya3ACOO4")',
                }}
              >
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur px-2 py-1 rounded text-xs font-bold text-gray-900 dark:text-white">
                  Best Seller
                </div>
              </div>
              <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4 md:p-6 md:pt-0">
                <div>
                  <div className="flex justify-between items-start mb-1 mt-4 md:mt-6">
                    <p className="text-[#111318] dark:text-white text-lg md:text-xl font-bold leading-normal">
                      Full Stack Dev
                    </p>
                    <span className="flex items-center text-xs font-medium text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-1.5 py-0.5 rounded">
                      <span className="material-symbols-outlined text-[14px] mr-1 filled">
                        star
                      </span>{" "}
                      4.9
                    </span>
                  </div>
                  <p className="text-[#616f89] dark:text-gray-400 text-sm md:text-base font-normal leading-normal line-clamp-2">
                    Master MERN stack with 10+ live projects and placement
                    support.
                  </p>
                  <div className="flex items-center gap-3 mt-3 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        schedule
                      </span>{" "}
                      6 Months
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        workspace_premium
                      </span>{" "}
                      Certificate
                    </span>
                  </div>
                </div>
                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 md:h-12 px-4 bg-primary/10 hover:bg-primary/20 text-primary text-sm md:text-base font-bold leading-normal tracking-[0.015em] transition-colors md:mb-4 cursor-pointer">
                  <span className="truncate">View Details</span>
                </button>
              </div>
            </div>
            </Link>
            {/* Course 2 */}
            <Link href="/courses?id=2" className="contents">
            <div className="snap-center shrink-0 w-[280px] md:w-auto flex flex-col gap-4 rounded-xl bg-white dark:bg-gray-800 shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 dark:border-gray-700 md:hover:shadow-xl md:hover:-translate-y-1 transition-all">
              <div
                className="w-full h-40 md:h-52 bg-center bg-cover relative"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLggNlHznJkDW6cuvL7ewG8iO6BF0_aMypMdSI2MnJ1e_xzkrPmm0AejrqLjdHhTDHFt2ZDaPUP8-kCyj_I4rcAufBCpS8QiXUPDWUqHordlaqueeIRmX8Bxy4-62r6cfzWSDyZiXGKyIVOiXkKpYpjeGqDNF6bcaS4jEiObrf78Trst_N7lJwtV4XaaoyTp799Mohsc7TdzI8G7hKeuPWXu_P1ihajBGC47h43nAuHXx7WYJQ4hkfO_Y4QTFjb0iPfOFdarWLd0xe")',
                }}
              ></div>
              <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4 md:p-6 md:pt-0">
                <div>
                  <div className="flex justify-between items-start mb-1 mt-4 md:mt-6">
                    <p className="text-[#111318] dark:text-white text-lg md:text-xl font-bold leading-normal">
                      UI/UX Design
                    </p>
                    <span className="flex items-center text-xs font-medium text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-1.5 py-0.5 rounded">
                      <span className="material-symbols-outlined text-[14px] mr-1 filled">
                        star
                      </span>{" "}
                      4.8
                    </span>
                  </div>
                  <p className="text-[#616f89] dark:text-gray-400 text-sm md:text-base font-normal leading-normal line-clamp-2">
                    Learn Figma, Adobe XD and design principles from experts.
                  </p>
                  <div className="flex items-center gap-3 mt-3 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        schedule
                      </span>{" "}
                      3 Months
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        folder_open
                      </span>{" "}
                      Portfolio
                    </span>
                  </div>
                </div>
                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 md:h-12 px-4 bg-primary/10 hover:bg-primary/20 text-primary text-sm md:text-base font-bold leading-normal tracking-[0.015em] transition-colors md:mb-4 cursor-pointer">
                  <span className="truncate">View Details</span>
                </button>
              </div>
            </div>
            </Link>
            {/* Course 3 */}
            <Link href="/courses?id=3" className="contents">
            <div className="snap-center shrink-0 w-[280px] md:w-auto flex flex-col gap-4 rounded-xl bg-white dark:bg-gray-800 shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 dark:border-gray-700 md:hover:shadow-xl md:hover:-translate-y-1 transition-all">
              <div
                className="w-full h-40 md:h-52 bg-center bg-cover relative"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMXKFmE2YDfwXksLYipQXpYI7dSoHr4sbxsaesy0StE3vAZN58Bexd-Avs1z8CPohAzP04LYSBrtCjyMEs1RCRvLakQtAmoVTk1lle8VXHeKKjl6jCeoS9gkVqQIxTtaqVuSPCK9RqCBjR3SwPJAn7nFsfzDKZ5mnYaGxo8McUuj-WKO7HBG0C_KBzjgsiFmSuKYGrSrtt9RBYiuJlYQQc8Ttalnf94gpzG9kQjreFPKXlf7PE31uj3XoOD9k5dWVlqo5aAbJf4Ta3")',
                }}
              ></div>
              <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4 md:p-6 md:pt-0">
                <div>
                  <div className="flex justify-between items-start mb-1 mt-4 md:mt-6">
                    <p className="text-[#111318] dark:text-white text-lg md:text-xl font-bold leading-normal">
                      Data Science
                    </p>
                    <span className="flex items-center text-xs font-medium text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-1.5 py-0.5 rounded">
                      <span className="material-symbols-outlined text-[14px] mr-1 filled">
                        star
                      </span>{" "}
                      4.7
                    </span>
                  </div>
                  <p className="text-[#616f89] dark:text-gray-400 text-sm md:text-base font-normal leading-normal line-clamp-2">
                    Python, Machine Learning, and Big Data analytics mastery.
                  </p>
                  <div className="flex items-center gap-3 mt-3 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        schedule
                      </span>{" "}
                      4 Months
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        trending_up
                      </span>{" "}
                      Advanced
                    </span>
                  </div>
                </div>
                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 md:h-12 px-4 bg-primary/10 hover:bg-primary/20 text-primary text-sm md:text-base font-bold leading-normal tracking-[0.015em] transition-colors md:mb-4 cursor-pointer">
                  <span className="truncate">View Details</span>
                </button>
              </div>
            </div>
            </Link>
            {/* Spacer for end of list in mobile only */}
            <div className="w-1 shrink-0 md:hidden"></div>
          </div>
        </div>

        {/* Student Stories */}
        <div className="bg-white dark:bg-gray-900 py-6 md:py-12 mt-2 md:mt-8 md:rounded-2xl">
          <h3 className="text-[#111318] dark:text-white text-lg md:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 md:px-8 mb-4 md:mb-8 text-center">
            Student Success Stories
          </h3>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 px-4 md:px-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="rounded-xl bg-background-light dark:bg-gray-800 p-5 md:p-8 md:shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="size-12 md:size-16 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASxxa5Xpj7Vwo7XMruQhxxZoELDwMLVU98fOW8Gp8McSUQXYTlacwU0akRRQvFZkRz4K-r51saGJHKgibJBBCpnynnJLjSHyNIKcJDG-191-l3-7CZoquQMsmaT8wHjN7PIgLtF6y0N276xcIL_zGeEZvfWiWByJglKUkES3SL9AxmSKeCimMWzM0qGR3vgBIz9mi8WH9j_eYpB5VYik-H5qFTb6cOzbR1fx6lBhHtnqrP6ep2koC7-l0TBdLtyPla76vsHMIJ7pAa")',
                  }}
                ></div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-base md:text-lg">
                    Sarah Jenkins
                  </p>
                  <p className="text-xs md:text-sm text-primary font-medium">
                    Placed at Google
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base italic">
                "The curriculum is exactly what the industry demands right now.
                The mentorship I received was invaluable for my career
                transition. I highly recommend TechInstitute to anyone looking to upskill."
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="rounded-xl bg-background-light dark:bg-gray-800 p-5 md:p-8 md:shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="size-12 md:size-16 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxc-AyCXv-RTq5_e9CPoJGiEjnyHCKjqoqGX7WtYkIFt6MuFwcL4fkEozYrAj9Tb_lekKWDiiA2ry8_xsEg0wO_wZ6d4H2B6ylilfkfhbNTD0gdYG9xOT09qSVYtSHSrbEPbaJsrbCH25DfYfddGtnzeE2UpNDctJlKqQJIQ5Qn1IbtEMdgkzGDjus2dwYUrV6vubRTU9bSC1I29pVkDnGBFP5PLLzmXUPGG-_sW7uX5CQ91fBiwJlCP_nD3-t7wlu9BxS2jabZxj1")',
                  }}
                ></div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-base md:text-lg">
                    Michael Chen
                  </p>
                  <p className="text-xs md:text-sm text-primary font-medium">
                    Placed at Microsoft
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base italic">
                "Coming from a non-tech background, I was worried. But the
                structured learning path made it easy to grasp complex concepts. The projects were very challenging and rewarding."
              </p>
            </div>
          </div>
        </div>

        <Newsletter />
      </main>

      <BottomNav />
    </div>
  );
}
