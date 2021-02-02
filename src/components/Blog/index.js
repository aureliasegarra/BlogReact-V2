// Import npm
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Import Components
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';

// Import Selectors
import { getPostsByCategory } from 'src/selectors';

// Import data
import categoriesData from 'src/data/categories';
import './style.scss';

const Blog = () => {
  // preparation of the posts, which will be an empty array
  const [posts, setPosts] = useState([]);
  // preparation of the state for the state loading
  const [loading, setLoading] = useState(false);

  const loadPosts = async () => {
    setLoading(true);

    try {
      const response = await axios.get('https://oblog-sarah-maau.herokuapp.com/api/posts');
      setPosts(response.data);
    }
    catch (error) {
      console.log(error);
    }
    finally {
      // Loading status off anyways
      setLoading(false);
    }
  };

  useEffect(loadPosts, []); // run loadPost on 1st render of the Blog component

  return (
    <div>
      <Header categories={categoriesData} />
      {loading && (
        <div>Loading</div>
      )}
      {!loading && (
      <Switch>
        {categoriesData.map((category) => {
          const filteredPosts = getPostsByCategory(posts, category.label);

          return (
            <Route
              exact
              key={category.label}
              path={category.route}
            >
              <Posts posts={filteredPosts} />
            </Route>
          );
        })}
        <Route><NotFound /></Route>
      </Switch>
      )}
      <Footer />
    </div>
  );
};

export default Blog;
