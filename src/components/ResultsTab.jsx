export default function ResultsTab({ analysis }) {
  if (!analysis) {
    return (
      <p className="text-gray-500 text-center">
        No analysis yet. Please enter symptoms.
      </p>
    );
  }

  return (
    <div className="space-y-4 animate-fadeIn">

      <h2 className="text-xl font-bold text-purple-700">AI Analysis</h2>

      <p className="text-gray-700 font-medium">
        Severity: <span className="capitalize">{analysis.severity}</span>
      </p>

      <h3 className="font-semibold">Possible Conditions</h3>
      <ul className="list-disc ml-5 space-y-2">
        {analysis.conditions.map((c, i) => (
          <li key={i}>
            <strong>{c.name}</strong> ({c.probability}) – {c.description}
          </li>
        ))}
      </ul>

      <h3 className="font-semibold">Precautions</h3>
      <ul className="list-disc ml-5">
        {analysis.precautions.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <p className="text-gray-700">
        <strong>Advice:</strong> {analysis.advice}
      </p>

      {analysis.recommendConsultation && (
        <p className="text-red-600 font-semibold">
          ⚠️ Doctor consultation recommended
        </p>
      )}
    </div>
  );
}
