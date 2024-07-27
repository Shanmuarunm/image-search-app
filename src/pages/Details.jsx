import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, CardMedia } from '@mui/material';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { images } = useSelector((state) => state.images);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const selectedImage = images.find((img) => img.id === id);
    if (selectedImage) {
      setImage(selectedImage);
    } else {
      toast.error('Image not found');
    }
  }, [id, images]);

  if (!image) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Button onClick={() => navigate('/')} variant="contained" color="primary" className='back-button'>
        Back to Home
      </Button>
      <CardMedia component="img" height="400" image={image.urls.regular} alt={image.description} className='image-detailedview'/>
      <Typography variant="h2">{image.user.name}</Typography>
      <Typography variant="body1" className='image-desc'>{image.description || 'No description'}</Typography>
      
    </Container>
  );
};

export default Details;
