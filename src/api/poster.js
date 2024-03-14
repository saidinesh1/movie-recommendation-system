export const posterFetch = async (movieName) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_POSTER_FETCH_API}&query=${movieName}`;
  const response = await fetch(url, {
    mode: 'cors',
  });
  return response;
};
