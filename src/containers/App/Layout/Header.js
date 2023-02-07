import React from 'react';
import { connectAutoDispatch } from '@utils/connectAutoDispatch';
import { Input, Layout, Typography } from 'antd';
import { homeSearchMoviesRequest } from '@containers/Home/actions';

const { Search } = Input;
const { Header: AntdHeader } = Layout;
const { Title } = Typography;

const Header = ({ search, homeSearchMoviesRequest }) => {
  const handleSearchMovie = (value) => {
    if (value !== search.query) {
      homeSearchMoviesRequest({ query: value, page: 1 })
    }
  }

  return (
    <AntdHeader className="header-wrapper">
      <div style={{ width: 500, display: 'flex' }}>
        <Search
          onSearch={handleSearchMovie}
          className="search-input"
          placeholder="Search movies"
          enterButton="Search"
          size="large"
          loading={search.loading}
        />
      </div>
      <Title
        className="header-title"
        level={3}
      >
        Elotus Movie
      </Title>
    </AntdHeader>
  )
}

export default connectAutoDispatch(({ homeState }) => ({
  search: homeState.search
}), { homeSearchMoviesRequest })(Header)
