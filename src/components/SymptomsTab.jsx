export default function SymptomsTab({
  symptoms,
  setSymptoms,
  analyzeSymptoms,
  loading
}) {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold text-purple-700">
        Describe Your Symptoms
      </h2>

      <textarea
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        placeholder="Example: I have had fever for 2 days, sore throat, cough, and body pain..."
        className="w-full h-40 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <button
        onClick={analyzeSymptoms}
        disabled={loading}
       className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-lg tracking-wide
      hover:scale-[1.02] hover:shadow-xl transition-all duration-300
      disabled:opacity-50 disabled:cursor-not-allowed"

      >
       {loading ? (
  <div className="flex items-center justify-center gap-2">
    <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
    <span>Analyzing…</span>
  </div>
) : (
  "Analyze with AI"
)}

      </button>
     

    </div>
  );   
}
