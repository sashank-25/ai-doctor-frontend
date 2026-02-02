export const getSeverityColor = (severity) => {
  switch (severity) {
    case "mild":
      return "from-emerald-500 to-teal-500";
    case "moderate":
      return "from-amber-500 to-orange-500";
    case "severe":
      return "from-red-500 to-rose-500";
    default:
      return "from-blue-500 to-indigo-500";
  }
};
