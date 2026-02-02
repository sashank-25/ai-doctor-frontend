import { AlertCircle, Zap } from "lucide-react";

export default function LeftSidebar({ commonSymptoms, addQuickSymptom }) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-3xl">
        <h3 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
          <Zap /> Quick Add
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {commonSymptoms.map((s, i) => (
            <button
              key={i}
              onClick={() => addQuickSymptom(s.value)}
              className="h-24 rounded-2xl text-white font-semibold text-lg flex flex-col items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-500 hover:scale-[1.02] transition"
            >
              <span className="text-2xl">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-red-500 text-white p-6 rounded-3xl">
        <div className="flex items-center gap-3 mb-2">
          <AlertCircle />
          <h4 className="text-lg font-bold">Emergency?</h4>
        </div>
        <p className="text-sm">
          Life-threatening emergency? Get immediate medical help now!
        </p>
        <button className="mt-4 w-full bg-white text-red-600 py-3 rounded-xl font-bold">
          Call 911
        </button>
      </div>
    </div>
  );
}
