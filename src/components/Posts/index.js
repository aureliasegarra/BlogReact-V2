import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

import './style.scss';

const Posts = ({ posts }) => (
  <div className="posts">
    <h1 className="posts__title">Dev of Thrones</h1>
    <div className="posts__list">
      {posts.map((post) => <Post key={post.id} {...post} />)}
    </div>
  </div>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default Posts;
