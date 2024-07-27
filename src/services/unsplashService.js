import axios from 'axios';

const apiKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const unsplashService = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${apiKey}`,
  },
});

export const searchImages = (query, page = 1, perPage = 6) => {
  return unsplashService.get('/search/photos', {
    params: {
      query,
      page,
      per_page: perPage,
    },
  });
};
