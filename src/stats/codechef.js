export const fetchCodeChefStats = async () => {
  try {
    const response = await fetch(
      "https://api.allorigins.win/raw?url=https://codechef-api.vercel.app/handle/piyush_bhadade"
    );

    const data = await response.json();

    console.log("CodeChef Data:", data);

    return (
      data.totalProblemsSolved ||
      data.fullySolved?.count ||
      54
    );
  } catch (error) {
    console.error("CodeChef Fetch Error:", error);

    return 54;
  }
};