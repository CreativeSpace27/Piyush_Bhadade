export const fetchLeetCodeStats = async () => {
  try {
    const response = await fetch(
      "https://alfa-leetcode-api.onrender.com/piiyush_bhadade/solved"
    );

    const data = await response.json();

    return data.solvedProblem || 0;
  } catch (error) {
    console.error("LeetCode Fetch Error:", error);
    return 0;
  }
};