const initialState = {
  images: [],
  totalPages: 1,
  loading: false,
  error: null,
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IMAGES_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_IMAGES_SUCCESS':
      console.log('Reducer data:', action.payload.images); 
      return {
        ...state,
        loading: false,
        images: action.payload.images,
        totalPages: action.payload.totalPages,
      };
    case 'FETCH_IMAGES_FAILURE':
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default imagesReducer;
