import React, { useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Button, Card, Divider, List, Skeleton, Space, Typography } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';

import './index.less';

const { Paragraph } = Typography;

const MovieList = ({ movies, loadMoreData, id, openDetailModal }) => {
  const [isGrid, setIsGrid] = useState(true);

  const MovieList = useMemo(() => (
    <List
      grid={isGrid ? {
        gutter: 5,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
        xxl: 4,
      } : false}
      dataSource={movies.results}
      renderItem={(item) => (
        <List.Item
          className={!isGrid && 'hover-effect'}
          onClick={() => openDetailModal(item.id)}
          extra={isGrid ||
          <LazyLoadImage
            width="272px"
            height="auto"
            alt=""
            src={`${process.env.REACT_APP_IMAGE_URL}/w500${item.backdrop_path}`}
            effect="blur"
          />
          }
        >
          {isGrid ?
            <Card className="movie-item" title={item.title}>
              <LazyLoadImage
                loading="lazy"
                width="100%"
                height="auto"
                alt=""
                src={`${process.env.REACT_APP_IMAGE_URL}/w500${item.backdrop_path}`}
                effect="blur"
              />
              <Paragraph ellipsis={{ rows: 4 }}>{item.overview}</Paragraph>
            </Card>:
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={<Paragraph ellipsis={{ rows: 4 }}>{item.overview}</Paragraph>}
            />
          }
        </List.Item>
      )}
    />
  ), [isGrid, movies]);


  return (
    <>
      <Space className="button-wrapper">
        <Button size="large" icon={<UnorderedListOutlined />} onClick={() => setIsGrid(false)}/>
        <Button size="large" icon={<AppstoreOutlined />} onClick={() => setIsGrid(true)}/>
      </Space>
      <div
        className="now-playing-list"
        id={id}
      >
        <InfiniteScroll
          dataLength={movies.results.length}
          next={loadMoreData}
          hasMore={movies.results.length < movies.total_results}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget={id}
        >
          {MovieList}
        </InfiniteScroll>
      </div>
    </>

  )
}

export default MovieList;
