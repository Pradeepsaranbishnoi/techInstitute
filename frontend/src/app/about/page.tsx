import Link from "next/link";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";

export default function About() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-gray-100 antialiased selection:bg-primary/30 min-h-screen pb-24 md:pb-0">
      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        {/* TopAppBar (Mobile Only) */}
        <div className="sticky top-0 z-50 flex items-center bg-surface-light dark:bg-surface-dark px-4 py-3 justify-between border-b border-gray-200 dark:border-gray-800 shadow-sm md:hidden">
          <Link href="/">
            <div className="text-[#111318] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full active:bg-gray-100 dark:active:bg-gray-800 cursor-pointer">
              <span className="material-symbols-outlined text-2xl">
                arrow_back_ios_new
              </span>
            </div>
          </Link>
          <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
            About Us
          </h2>
        </div>

        {/* Desktop Content Container */}
        <main className="max-w-7xl mx-auto w-full md:px-6 md:pt-8 md:pb-16 text-center md:text-left">
        
        {/* HeaderImage */}
        <div className="@container w-full rounded-2xl overflow-hidden mt-4 md:mt-0">
          <div className="w-full">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-gray-200 min-h-[260px] md:min-h-[400px] relative"
              style={{
                backgroundImage:
                  'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTxZpC10DIM49n23ZcGzEXzb2uQak_bUCUJJeEGXZ5gJCNPy4Sa-GJ1bKJUYh7V6SuMnyn1vgVsu4NG9cNAOdud4cCxXBF5yuddrmjK2oXJPtA_80Aup-fzQeqcIBgNuiJ2gl0SSz54mCy0pyvkHXxKOwCRuj2qnhUxR2Uj8cEC640AXlF-XgZNUonHeF5xiFOO86Tpwp9jMy48cNsXJ3KMNCaR4KtwqmNNrSDxhmr7I3DDsihydI4f0wWblSSKMTN2U6psmT1PByQ")',
              }}
            >
              <div className="flex flex-col p-6 md:p-12 z-10 items-start">
                <span className="text-primary font-semibold tracking-wider text-xs md:text-sm uppercase mb-2 bg-white/90 px-2 py-1 rounded w-fit">
                  Since 2008
                </span>
                <p className="text-white tracking-tight text-3xl md:text-5xl font-bold leading-tight max-w-2xl text-left">
                  Empowering the next generation of developers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="px-5 pt-8 pb-4 md:px-0 md:py-12 max-w-4xl">
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-xl leading-relaxed text-left">
            We are a premier institute dedicated to bridging the gap between
            academic learning and industry demands. Our hands-on approach ensures
            every student is job-ready from day one.
          </p>
        </div>

        {/* Stats */}
        <div className="w-full overflow-x-auto no-scrollbar pb-2 md:overflow-visible md:pb-8">
          <div className="flex px-4 gap-3 min-w-max md:px-0 md:grid md:grid-cols-3 md:gap-6 md:w-full">
            <div className="flex min-w-[140px] flex-col gap-1 rounded-xl p-5 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm md:items-center md:justify-center text-center">
              <div className="size-8 md:size-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-primary text-xl md:text-2xl">
                  school
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium">
                Alumni
              </p>
              <p className="text-[#111318] dark:text-white text-2xl md:text-4xl font-bold">
                5000+
              </p>
            </div>
            <div className="flex min-w-[140px] flex-col gap-1 rounded-xl p-5 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm md:items-center md:justify-center text-center">
              <div className="size-8 md:size-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-primary text-xl md:text-2xl">
                  work
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium">
                Placement
              </p>
              <p className="text-[#111318] dark:text-white text-2xl md:text-4xl font-bold">
                98%
              </p>
            </div>
            <div className="flex min-w-[140px] flex-col gap-1 rounded-xl p-5 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm md:items-center md:justify-center text-center">
              <div className="size-8 md:size-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-primary text-xl md:text-2xl">
                  calendar_month
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium">
                Years Active
              </p>
              <p className="text-[#111318] dark:text-white text-2xl md:text-4xl font-bold">
                15
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="flex flex-col gap-4 px-4 py-8 md:px-0 md:py-12 md:grid md:grid-cols-2 md:gap-8">
          <div className="col-span-2 md:col-span-2">
             <h2 className="text-[#111318] dark:text-white text-xl md:text-3xl font-bold px-1 mb-4 text-left">
                Our Mission & Vision
             </h2>
          </div>
          <div className="flex gap-4 rounded-xl bg-white dark:bg-surface-dark p-5 border border-gray-100 dark:border-gray-800 shadow-sm md:p-8">
            <div className="shrink-0 size-12 md:size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl md:text-3xl">target</span>
            </div>
            <div className="flex flex-col gap-1 text-left">
              <h3 className="text-[#111318] dark:text-white text-base md:text-xl font-bold">
                Mission
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-normal">
                To provide accessible, world-class tech education to everyone,
                everywhere.
              </p>
            </div>
          </div>
          <div className="flex gap-4 rounded-xl bg-white dark:bg-surface-dark p-5 border border-gray-100 dark:border-gray-800 shadow-sm md:p-8">
            <div className="shrink-0 size-12 md:size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl md:text-3xl">visibility</span>
            </div>
            <div className="flex flex-col gap-1 text-left">
              <h3 className="text-[#111318] dark:text-white text-base md:text-xl font-bold">
                Vision
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-normal">
                A world where anyone can code their future and build meaningful
                technology.
              </p>
            </div>
          </div>
        </div>

        {/* History Timeline */}
        <div className="px-4 py-4 md:px-0 md:py-12">
          <h2 className="text-[#111318] dark:text-white text-xl md:text-3xl font-bold mb-6 px-1 text-left">
            Our Journey
          </h2>
          <div className="relative ml-3 border-l-2 border-dashed border-gray-200 dark:border-gray-700 pl-8 space-y-8 py-2 md:ml-12 md:space-y-16">
            {/* Timeline Item 1 */}
            <div className="relative group text-left">
              <div className="absolute -left-[41px] top-1 size-5 rounded-full border-4 border-white dark:border-surface-dark bg-primary shadow-sm md:size-7 md:-left-[53px]"></div>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded mb-1 inline-block md:text-sm md:px-3 md:py-1">
                2008
              </span>
              <h3 className="text-base md:text-2xl font-bold text-[#111318] dark:text-white">
                Institute Founded
              </h3>
              <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 mt-1 max-w-2xl">
                Started in a small garage with just 5 computers and a dream.
              </p>
            </div>
            {/* Timeline Item 2 */}
            <div className="relative group text-left">
              <div className="absolute -left-[41px] top-1 size-5 rounded-full border-4 border-white dark:border-surface-dark bg-gray-300 dark:bg-gray-600 md:size-7 md:-left-[53px]"></div>
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded mb-1 inline-block md:text-sm md:px-3 md:py-1">
                2015
              </span>
              <h3 className="text-base md:text-2xl font-bold text-[#111318] dark:text-white">
                Expansion to New Campus
              </h3>
              <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 mt-1 max-w-2xl">
                Moved to a state-of-the-art facility to accommodate 500+
                students.
              </p>
            </div>
            {/* Timeline Item 3 */}
            <div className="relative group text-left">
              <div className="absolute -left-[41px] top-1 size-5 rounded-full border-4 border-white dark:border-surface-dark bg-gray-300 dark:bg-gray-600 md:size-7 md:-left-[53px]"></div>
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded mb-1 inline-block md:text-sm md:px-3 md:py-1">
                2023
              </span>
              <h3 className="text-base md:text-2xl font-bold text-[#111318] dark:text-white">
                Global Online Launch
              </h3>
              <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 mt-1 max-w-2xl">
                Launched our online platform reaching students in 20+ countries.
              </p>
            </div>
          </div>
        </div>

        {/* Key Faculty Carousel */}
        <div className="py-8 bg-white dark:bg-surface-dark my-4 md:bg-transparent md:my-12">
          <div className="flex items-center justify-between px-5 mb-4 md:px-0">
            <h2 className="text-[#111318] dark:text-white text-xl md:text-3xl font-bold">
              Expert Faculty
            </h2>
            <span className="text-primary text-sm md:text-base font-medium">View all</span>
          </div>
          <div className="flex overflow-x-auto gap-4 px-5 pb-4 no-scrollbar snap-x snap-mandatory md:grid md:grid-cols-4 md:px-0 md:overflow-visible">
            {/* Faculty 1 */}
            <div className="flex-none w-[160px] md:w-auto snap-center group">
              <div className="h-[200px] md:h-[280px] w-full rounded-xl overflow-hidden mb-3 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div
                  className="h-full w-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbPgTxy5V4MFYOlMfOCze-gTPRFxi_V57hsQxWbeulYnhC6GMgZmN2PcC71Z2V_CX6dqkm8mA2VnYZ-1L1DRSlitQqhKSfRr8bfyIIkeKKl4LfqOEm8kduTd3oSh6fKOCoFw4m22WcXlL3ma7X3tF0b3tz-60BESCWPVKVTvBZCQ7IVh0MyjLwMEls6c62pJggTwvJkacTI9g3Z9zyKZWzFPLkdSEDvxCCPeHCO104rEvZtnxyv10lX6y6uhIJ3Vll9XaSSjjUHgE_")',
                  }}
                ></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <span className="block text-xs md:text-sm font-light opacity-90">
                    PhD, CS
                  </span>
                </div>
              </div>
              <h3 className="text-[#111318] dark:text-white font-bold text-base md:text-xl leading-tight">
                Sarah Jenkins
              </h3>
              <p className="text-primary text-sm md:text-base font-medium">
                Head of Data Science
              </p>
            </div>
            {/* Faculty 2 */}
            <div className="flex-none w-[160px] md:w-auto snap-center group">
              <div className="h-[200px] md:h-[280px] w-full rounded-xl overflow-hidden mb-3 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div
                  className="h-full w-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgiQMNB2DAUfzqn6_-vSbEZiyTp0cpkrS0OW90IiYVT2e27l4vqCyMtN0pGMwt8hxnbRKUrvyr2h5hiJ8yyH9Xzpyhi51D12eYx7AQDjUmtTFlr-nQ9QfFmXFeNLL8P2eeKJ2SF5ndZkFENFblbKnLy9cmb1YR7KWro4vSyfsynuW-FBTGIl9J1OWay_CulIjFDqFFsWBa6UqA4Ap54gbDDe5LkLxL0SdGqRtSTzN5D2e6Grhxs-uj2bJ8FtgP8h-sqbUPjqt2ksJy")',
                  }}
                ></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <span className="block text-xs md:text-sm font-light opacity-90">
                    ex-Google
                  </span>
                </div>
              </div>
              <h3 className="text-[#111318] dark:text-white font-bold text-base md:text-xl leading-tight">
                David Chen
              </h3>
              <p className="text-primary text-sm md:text-base font-medium">
                Full Stack Lead
              </p>
            </div>
             {/* Faculty 3 (Duplicate for demo) */}
            <div className="flex-none w-[160px] md:w-auto snap-center group">
              <div className="h-[200px] md:h-[280px] w-full rounded-xl overflow-hidden mb-3 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div
                  className="h-full w-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                     backgroundColor: '#1f2937' // Fallback
                  }}
                >
                    <span className="flex items-center justify-center h-full text-gray-500">Image</span>
                </div>
                <div className="absolute bottom-2 left-2 text-white">
                  <span className="block text-xs md:text-sm font-light opacity-90">
                    MSc, AI
                  </span>
                </div>
              </div>
              <h3 className="text-[#111318] dark:text-white font-bold text-base md:text-xl leading-tight">
                Emily Zhang
              </h3>
              <p className="text-primary text-sm md:text-base font-medium">
                AI Research
              </p>
            </div>
             {/* Faculty 4 (Duplicate for demo) */}
             <div className="flex-none w-[160px] md:w-auto snap-center group">
              <div className="h-[200px] md:h-[280px] w-full rounded-xl overflow-hidden mb-3 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div
                  className="h-full w-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                   style={{
                     backgroundColor: '#1f2937' // Fallback
                  }}
                >
                     <span className="flex items-center justify-center h-full text-gray-500">Image</span>
                </div>
                <div className="absolute bottom-2 left-2 text-white">
                  <span className="block text-xs md:text-sm font-light opacity-90">
                    Senior Dev
                  </span>
                </div>
              </div>
              <h3 className="text-[#111318] dark:text-white font-bold text-base md:text-xl leading-tight">
                James Wilson
              </h3>
              <p className="text-primary text-sm md:text-base font-medium">
                Backend Systems
              </p>
            </div>
          </div>
        </div>

        </main>

        {/* Bottom CTA (Mobile Fixed, Desktop Hidden) */}
        <div className="fixed bottom-0 left-0 w-full p-4 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 z-40 md:hidden">
          <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer">
            <span>Start Your Journey</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
