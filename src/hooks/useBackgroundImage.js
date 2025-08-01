const useBackgroundImage = (conditionText) => {
  if (!conditionText) return "url('/assets/default-bg.jpg')"; // Default image

  const lower = conditionText.toLowerCase();

  if (lower.includes("rain")) return "url('/assets/rain.jpg')";
  if (lower.includes("cloud")) return "url('/assets/cloud.jpg')";
  if (lower.includes("clear") || lower.includes("sun"))
    return "url('/assets/clear.jpg')";
  if (lower.includes("snow")) return "url('/assets/snow.jpg')";

  return "url('/assets/default-bg.jpg')";
};

export default useBackgroundImage;
