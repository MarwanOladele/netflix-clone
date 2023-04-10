const API_KEY = "ccc2e98ac79f551a68e6af45106323b4";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchÂctionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28"`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35"`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27"`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
