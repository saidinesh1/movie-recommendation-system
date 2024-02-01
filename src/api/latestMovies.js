const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODllNjJjNTFhZTk1NWEwYjRjMWU5NTNjODQ0MjU4ZSIsInN1YiI6IjY1YjIxMjYzOTI0Y2U1MDE4NDJmOTQyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NOH3Re797GIfXWOq6QditXqRKi9VMGFeROl9HUYlRwA',
  },
};

fetch(
  'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
