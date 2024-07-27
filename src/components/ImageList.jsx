import React from 'react';
import ImageCard from './ImageCard';
import { Grid } from '@mui/material';


const ImageList = ({ images }) => {
  return (
    <Grid container spacing={3} className="image-list">
      {images?.map((image) => (
        <Grid item xs={12} sm={6} md={4} key={image.id}>
          <ImageCard image={image} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageList;
