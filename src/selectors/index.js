/* eslint-disable import/prefer-default-export */
// Named export
// Selector = pour gérer le state ou une partie du state
export const getPostsByCategory = (posts, category) => {
  const filteredPosts = posts.filter((post) => {
    if (category === 'Accueil') { // for the Home page we display all the posts
      return true;
    }
    return post.category === category;
  });
  return filteredPosts;
};

// or
/* export default {
    getPostsByCategory,
} */
