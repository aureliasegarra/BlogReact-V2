import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const Post = ({ title, category, excerpt }) => {
  const createMarkup = () => ({
    __html: DOMPurify.sanitize(excerpt, { ALLOWED_TAGS: ['em', 'strong'] }),
  });

  return (
    <article className="post">
      <h2 className="post__title">{title}</h2>
      <span className="post__category">{category}</span>
      <p className="post__content" dangerouslySetInnerHTML={createMarkup()} />
    </article>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
