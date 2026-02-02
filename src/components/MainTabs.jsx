import SymptomsTab from "./SymptomsTab";
import ResultsTab from "./ResultsTab";
import BookingTab from "./BookingTab";

export default function MainTabs({
  symptoms,
  setSymptoms,
  analysis,
  loading,
  activeTab,
  setActiveTab,
  analyzeSymptoms
}) {
  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden border border-white/40">

      {/* TAB HEADER */}
      <div className="grid grid-cols-3 text-center text-sm font-semibold">
        {/* ENTER SYMPTOMS */}
        <button
          onClick={() => setActiveTab("symptoms")}
       className={`py-4 transition-all duration-300 ${
  activeTab === "symptoms"
    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
    : "bg-blue-50 text-blue-700 hover:bg-blue-100"
}`}

        >
          Enter Symptoms
        </button>

        {/* AI ANALYSIS */}
        <button
          onClick={() => analysis && setActiveTab("results")}
          disabled={!analysis}
          className={`py-3 transition ${
            activeTab === "results"
              ? "bg-blue-600 text-white"
              : "bg-blue-50 text-blue-600"
          } ${!analysis && "opacity-50 cursor-not-allowed"}`}
        >
          AI Analysis
        </button>

        {/* BOOK DOCTOR */}
        <button
          onClick={() => setActiveTab("booking")}
          className={`py-3 transition ${
            activeTab === "booking"
              ? "bg-blue-600 text-white"
              : "bg-blue-50 text-blue-600"
          }`}
        >
          Book Doctor
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="p-6 transition-all duration-300 ease-in-out animate-fadeIn">
        {activeTab === "symptoms" && (
          <SymptomsTab
            symptoms={symptoms}
            setSymptoms={setSymptoms}
            analyzeSymptoms={analyzeSymptoms}
            loading={loading}
          />
        )}

       {activeTab === "results" && (
  <ResultsTab analysis={analysis} />
)}


        {activeTab === "booking" && <BookingTab />}
      </div>
    </div>
  );
}
