const useBackgroundClass = (conditionText) => {
  if (!conditionText) return "bg-gradient-to-b from-slate-900 to-slate-800";

  const lower = conditionText.toLowerCase();

  if (lower.includes("rain"))
    return "bg-gradient-to-br from-blue-800 to-gray-700";
  if (lower.includes("cloud"))
    return "bg-gradient-to-br from-gray-700 to-gray-900";
  if (lower.includes("clear") || lower.includes("sun"))
    return "bg-gradient-to-br from-yellow-400 to-orange-500";
  if (lower.includes("snow")) return "bg-gradient-to-br from-white to-blue-200";

  return "bg-gradient-to-b from-slate-900 to-slate-800";
};

export default useBackgroundClass;
