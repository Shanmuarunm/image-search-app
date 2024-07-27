import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ImageCard = ({ image }) => {
  return (
    <Card>
      <Link to={`/details/${image.id}`}>
        <CardMedia
          component="img"
          height="140"
          image={image.urls.thumb}
          alt={image.description}
        />
      </Link>
      <CardContent className='card-content'>
      <Typography variant="h2">{image.user.name}</Typography>
        <Typography variant="body1" className='image-desc'>{image.description || 'No description'}</Typography>
       
      </CardContent>
    </Card>
  );
};

export default ImageCard;


