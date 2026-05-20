export const fetchLeetCodeStats = async () => {
  try {
    const query = JSON.stringify({
      query: `{
        matchedUser(username: "piiyush_bhadade") {
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }`
    });

    const encoded = encodeURIComponent('https://leetcode.com/graphql');
    const response = await fetch(`https://api.allorigins.win/raw?url=${encoded}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: query,
    });

    const data = await response.json();
    const submissions = data?.data?.matchedUser?.submitStats?.acSubmissionNum;
    const all = submissions?.find(x => x.difficulty === 'All');
    return all?.count ?? 0;
  } catch (error) {
    console.error('LeetCode Fetch Error:', error);
    return 63;
  }
};