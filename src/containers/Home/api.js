import instance from '@axios';

export const getNowPlayingMovies = async (page) => {
  const { data } = await instance.get('/movie/now_playing', { params: { api_key: process.env.REACT_APP_API_KEY, page }});

  return data;
};

export const getTopRatedMovies = async (page) => {
  const { data } = await instance.get('/movie/top_rated', { params: { api_key: process.env.REACT_APP_API_KEY, page }});

  return data;
};

export const getMovieDetail = async (id) => {
  const { data } = await instance.get(`/movie/${id}`, { params: { api_key: process.env.REACT_APP_API_KEY }});

  return data;
}

export const searchMovies = async (query, page) => {
  const { data } = await instance.get(`/search/movie`, { params: { api_key: process.env.REACT_APP_API_KEY, page, query }});

  return data;
}
