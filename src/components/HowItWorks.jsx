import {
  FileText,
  Brain,
  Sparkles,
  Calendar
} from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="bg-[#faf7ff] border border-purple-100 rounded-3xl p-8 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-purple-600 flex items-center justify-center text-white">
          <Brain />
        </div>
        <h2 className="text-2xl font-bold text-purple-700">
          How It Works
        </h2>
      </div>

      {/* Steps */}
      <div className="space-y-5">
        {/* Step 1 */}
        <Step
          number="1"
          color="bg-blue-500"
          text="Describe your symptoms in detail"
          icon={<FileText size={18} />}
        />

        {/* Step 2 */}
        <Step
          number="2"
          color="bg-pink-500"
          text="AI analyzes using medical knowledge"
          icon={<Brain size={18} />}
        />

        {/* Step 3 */}
        <Step
          number="3"
          color="bg-green-500"
          text="Get personalized health insights"
          icon={<Sparkles size={18} />}
        />

        {/* Step 4 */}
        <Step
          number="4"
          color="bg-orange-500"
          text="Book appointment with specialists"
          icon={<Calendar size={18} />}
        />
      </div>
    </section>
  );
}

function Step({ number, color, text, icon }) {
  return (
    <div className="flex items-center gap-4">
      {/* Number Circle */}
      <div
        className={`w-12 h-12 rounded-full ${color} text-white flex items-center justify-center font-bold`}
      >
        {number}
      </div>

      {/* Text */}
      <div className="flex items-center gap-2 text-gray-700 font-medium">
        <span>{text}</span>
        <span className="text-purple-500">{icon}</span>
      </div>
    </div>
  );
}
