export const ytTrailerFetch = async (movieName) => {
  const url = `http://127.0.0.1:5000/movie/${movieName}`;
  const response = await fetch(url);

  return response;
};
