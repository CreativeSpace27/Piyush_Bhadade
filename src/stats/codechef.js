export const fetchCodeChefStats = async () => {
  try {
    const target = encodeURIComponent('https://codechef-api.vercel.app/handle/piyush_bhadade');
    const response = await fetch(`https://api.allorigins.win/get?url=${target}`);
    const wrapper = await response.json();

    // allorigins /get wraps content in { contents: "..." }
    const data = JSON.parse(wrapper.contents);
    console.log('CodeChef raw:', data);

    return (
      data.totalProblemsSolved ??
      data.fullySolved?.count ??
      data.problemsSolved ??
      54
    );
  } catch (error) {
    console.error('CodeChef Fetch Error:', error);
    return 54;
  }
};