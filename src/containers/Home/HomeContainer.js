import React, { useEffect, useState } from 'react'
import { connectAutoDispatch } from '@utils/connectAutoDispatch';
import { homeGetNowPlayingMoviesRequest, homeGetTopRatedMoviesRequest, homeSearchMoviesRequest } from './actions';
import { Tabs, Modal, Typography } from 'antd';
import MovieList from '@components/MovieList';
import MovieDetailModal from '@components/MovieDetailModal';
import { getMovieDetail } from '@containers/Home/api';

const { Title } = Typography;

const HomeContainer = ({
                         nowPlayingMovies,
                         topRatedMovies,
                         searchMovies,
                         homeGetNowPlayingMoviesRequest,
                         homeGetTopRatedMoviesRequest,
                         homeSearchMoviesRequest,
                       }) => {
  const [openDetail, setOpenDetail] = useState(false)
  const [movieDetail, setMovieDetail] = useState(null)

  useEffect(() => {
    homeGetNowPlayingMoviesRequest({ page: 1 });
    homeGetTopRatedMoviesRequest({ page: 1 });
  }, [])

  const loadMoreNowPlaying = () => {
    homeGetNowPlayingMoviesRequest({ page: nowPlayingMovies.page + 1 });
  }

  const loadMoreTopRated = () => {
    homeGetTopRatedMoviesRequest({ page: topRatedMovies.page + 1 });
  }

  const openDetailModal = (id) => {
    setOpenDetail(true);
    getMovieDetail(id)
      .then((data) => {
        setMovieDetail(data)
      })
      .catch(() => setMovieDetail('error'));
  }

  const closeDetailModal = () => {
    setOpenDetail(false);
    setMovieDetail(null);
  }

  const loadMoreSearch = () => {
    homeSearchMoviesRequest({ query: searchMovies.query, page: searchMovies.page + 1 });
  }

  const tabs = [
    {
      key: 'now_playing',
      label: 'Now Playing',
      children: <MovieList openDetailModal={openDetailModal} loadMoreData={loadMoreNowPlaying} movies={nowPlayingMovies} id="scrollableNowPlaying" />,
    },
    {
      key: 'top_rated',
      label: 'Top Rated',
      children: <MovieList openDetailModal={openDetailModal} loadMoreData={loadMoreTopRated} movies={topRatedMovies} id="scrollableTopRated" />,
    },
  ];

  return (
    <>
      {(searchMovies.query) &&
        <div className="search-wrapper">
          <Title level={2}>Search: </Title>
          <MovieList
            openDetailModal={openDetailModal}
            loadMoreData={loadMoreSearch}
            movies={searchMovies}
            id="scrollableNowPlaying"
          />
        </div>
      }
      <Tabs
        defaultActiveKey="now_playing"
        type="card"
        size="large"
        items={tabs}
      />
      <Modal
        className="detail-modal"
        title={null}
        open={openDetail}
        centered
        footer={null}
        closable={true}
        onCancel={closeDetailModal}
      >
        <MovieDetailModal movie={movieDetail}/>
      </Modal>
    </>
  )
};

export default connectAutoDispatch(({ homeState }) => ({
    nowPlayingMovies: homeState.nowPlaying,
    topRatedMovies: homeState.topRated,
    searchMovies: homeState.search
  }),
  {
    homeGetNowPlayingMoviesRequest,
    homeGetTopRatedMoviesRequest,
    homeSearchMoviesRequest,
  })
(HomeContainer);
