import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import ImageList from '../components/ImageList';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import { fetchImages } from '../store/actions';
import { toast } from 'react-toastify';

const Home = () => {
  const [query, setQuery] = useState('nature'); 
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { images, totalPages, loading, error } = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(fetchImages(query, page));
  }, [query, page, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Container>
      <Typography variant="h1" className='app-title'>Image Search Application</Typography>
      <SearchBar value={query} onChange={setQuery} />
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          <ImageList images={images} />
          <Pagination page={page} onChange={setPage} totalPages={totalPages} />
        </>
      )}
    </Container>
  );
};

export default Home;
