// eslint-disable-next-line no-unused-vars
const key = "f513d81697d17118372120be8e61dc79";

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
    requestOnTheAir: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
};
export default requests;
