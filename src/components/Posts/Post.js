import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title, category, excerpt }) => (
  <article className="post">
    <h2 className="post__title">{title}</h2>
    <span className="post__category">{category}</span>
    <p className="post__content">{excerpt}</p>
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
