import { searchImages } from '../services/unsplashService';

export const fetchImages = (query, page) => async (dispatch) => {
  if (!query.trim()) {
    dispatch({
      type: 'FETCH_IMAGES_FAILURE',
      payload: { error: 'Query cannot be empty' },
    });
    return;
  }

  dispatch({ type: 'FETCH_IMAGES_REQUEST' });
  try {
    const data = await searchImages(query, page);
    console.log('Fetched data:', data); 
    dispatch({
      type: 'FETCH_IMAGES_SUCCESS',
      payload: { images: data.data.results, totalPages: data.data.total_pages },
    });
  } catch (error) {
    console.error('API Error:', error); 
    dispatch({
      type: 'FETCH_IMAGES_FAILURE',
      payload: { error: 'Failed to fetch images' },
    });
  }
};
