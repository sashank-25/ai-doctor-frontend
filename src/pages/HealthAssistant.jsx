import React, { useState } from "react";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import MainTabs from "../components/MainTabs";
// import FooterDisclaimer from "../components/FooterDisclaimer";
import { commonSymptoms } from "../data/commonSymptoms";
import { getSeverityColor } from "../utils/severityColor";

export default function HealthAssistant() {
  const [symptoms, setSymptoms] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("symptoms");

  const analyzeSymptoms = async () => {
    if (!symptoms.trim()) return;
    setLoading(true);

    setTimeout(() => {
      setAnalysis({
        severity: "moderate",
        conditions: [
          { name: "Common Cold", probability: "High", description: "Viral infection affecting upper respiratory tract" },
          { name: "Seasonal Allergies", probability: "Medium", description: "Allergic reaction to environmental factors" }
        ],
        precautions: [
          "Stay hydrated - drink at least 8 glasses of water daily",
          "Get adequate rest - 7-9 hours of sleep",
          "Monitor temperature regularly",
          "Avoid crowded places to prevent spread",
          "Maintain good hand hygiene"
        ],
        advice:
          "Your symptoms suggest a common viral infection. Most symptoms should improve within 7-10 days with proper rest and hydration.",
        urgency: "monitor",
        recommendConsultation: true
      });
      setLoading(false);
      setActiveTab("results");
    }, 2000);
  };

  const addQuickSymptom = (symptom) => {
    setSymptoms((prev) => (prev ? `${prev}, ${symptom}` : symptom));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-6">
        <LeftSidebar
          commonSymptoms={commonSymptoms}
          addQuickSymptom={addQuickSymptom}
        />

        <MainTabs
          symptoms={symptoms}
          setSymptoms={setSymptoms}
          analysis={analysis}
          loading={loading}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          analyzeSymptoms={analyzeSymptoms}
          getSeverityColor={getSeverityColor}
        />
      </main>

      {/* <FooterDisclaimer /> */}
    </div>
  );
}
