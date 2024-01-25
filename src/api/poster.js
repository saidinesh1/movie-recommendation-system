export const posterFetch = async (movieName) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${movieName}`;
  const response = await fetch(url);
  return response;
};
