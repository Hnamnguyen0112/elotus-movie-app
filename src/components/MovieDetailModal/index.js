import React from 'react';
import { Card, Spin, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './index.less';

const { Title, Paragraph } = Typography;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const MovieDetailModal = ({ movie }) => {
  return (
    <>
      {movie ?
        <Card className="detail-card">
          <LazyLoadImage
            className="detail-image"
            loading="lazy"
            alt=""
            src={`${process.env.REACT_APP_IMAGE_URL}/w500${movie.poster_path}`}
            effect="blur"
          />
          <div className="detail-info">
            <Title level={2}>{movie.original_title} ({Math.round(movie.vote_average)} / 10)</Title>
            <Title level={5}>{movie.vote_count} votes</Title>
            <Title level={5}>Release date: {movie.release_date}</Title>
            <Title level={5}>Genres: {movie.genres.map(i => i.name).join(', ')}</Title>
            <Title level={5}>Languages: {movie.spoken_languages.map(i => i.english_name).join(', ')}</Title>
            <Paragraph>{movie.overview}</Paragraph>
          </div>
        </Card> :
        <div style={{ height: 500, display: 'flex' }}>
          <Spin style={{ margin: 'auto' }} indicator={antIcon} />
        </div>
      }
    </>
  )
}

export default MovieDetailModal
