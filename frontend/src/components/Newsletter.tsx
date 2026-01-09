export default function Newsletter() {
  return (
    <div className="p-4 py-8">
      <div className="rounded-2xl bg-gradient-to-br from-primary to-blue-700 p-6 text-center text-white">
        <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
        <p className="text-white/80 text-sm mb-6">
          Download our brochure to get detailed syllabus and fee structure.
        </p>
        <div className="flex flex-col gap-3">
          <input
            className="w-full rounded-lg h-10 px-4 text-gray-900 text-sm border-none focus:ring-2 focus:ring-white/50 bg-white/90 placeholder:text-gray-400"
            placeholder="Enter your email"
            type="email"
          />
          <button className="w-full rounded-lg h-10 px-4 bg-black/20 hover:bg-black/30 text-white font-bold text-sm transition-colors border border-white/20 cursor-pointer">
            Get Brochure
          </button>
        </div>
      </div>
    </div>
  );
}
