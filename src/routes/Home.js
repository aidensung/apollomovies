import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import Movie from '../components/Movie';

import styled from 'styled-components';

const GET_MOVIES = gql`
  query getMovies($limit: Int, $rating: Float) {
    movies(limit: $limit, rating: $rating) {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #137df6, #4df038);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 30px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 100px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px 25px;
  width: 90%;
  position: relative;
  top: -50px;
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES, {
    variables: { limit: 24, rating: 8.0 },
  });
  return (
    <Container>
      <Header>
        <Title>Apollo Movies</Title>
        <Subtitle>Enjoy GraphQL!</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      <Movies>
        {data?.movies?.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            isLiked={movie.isLiked}
            bg={movie.medium_cover_image}
          />
        ))}
      </Movies>
    </Container>
  );
};
