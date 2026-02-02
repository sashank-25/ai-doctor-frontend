import { useState } from "react";

import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import LeftSidebar from "./components/LeftSidebar";
import MainTabs from "./components/MainTabs";
import FooterDisclaimer from "./components/FooterDisclaimer";

import { commonSymptoms } from "./data/commonSymptoms";
import { analyzeSymptomsAPI } from "./services/analysisApi";

export default function App() {
  // 🔒 STATE
  const [symptoms, setSymptoms] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("symptoms");

  // ✅ UPDATED FUNCTION (IMPORTANT FIX)
  const analyzeSymptoms = async () => {
  if (!symptoms.trim()) return;

  setLoading(true);
  try {
    const res = await analyzeSymptomsAPI(symptoms);
    setAnalysis(res.data);
    setActiveTab("results");
  } catch (err) {
    console.error("Frontend API Error:", err?.response?.data || err.message);
    alert(
      err?.response?.data?.message ||
      "Backend unreachable. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  const addQuickSymptom = (symptom) => {
    setSymptoms((prev) => (prev ? `${prev}, ${symptom}` : symptom));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-10">

        {/* STATS STRIP */}
        <section className="rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          <Stat title="50K+" subtitle="Consultations" />
          <Stat title="98%" subtitle="Success Rate" />
          <Stat title="200+" subtitle="Doctors" />
          <Stat title="<5min" subtitle="Response Time" />
        </section>

        {/* HOW IT WORKS */}
        <HowItWorks />

        {/* QUICK SYMPTOMS */}
        <LeftSidebar
          commonSymptoms={commonSymptoms}
          addQuickSymptom={addQuickSymptom}
        />

        {/* SECURITY STRIP */}
        <section className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center">
          <p className="font-semibold text-green-700">HIPAA Compliant</p>
          <p className="text-sm text-gray-600">
            Your data is encrypted and secure
          </p>
          <p className="mt-2 font-bold">⭐ 4.9 / 5</p>
        </section>

        {/* MAIN TABS */}
        <MainTabs
          symptoms={symptoms}
          setSymptoms={setSymptoms}
          analysis={analysis}
          loading={loading}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          analyzeSymptoms={analyzeSymptoms}
        />

        {/* FOOTER */}
        <FooterDisclaimer />
      </main>
    </div>
  );
}

function Stat({ title, subtitle }) {
  return (
    <div className="bg-white/20 rounded-xl px-3 py-2 text-center">
      <div className="text-xl font-bold leading-tight">{title}</div>
      <div className="text-xs opacity-90">{subtitle}</div>
    </div>
  );
}
