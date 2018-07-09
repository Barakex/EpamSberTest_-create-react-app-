export const fetchData = async (responseData) => {
  try {
    const response = await fetch(`http://api.tvmaze.com/search/shows?q=${responseData}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchEpisodes = async (responseData) => {
  try {
    const response = await fetch(`http://api.tvmaze.com/shows/${responseData}/episodes`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
