// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Composants
import Blog from 'src/components/Blog';

const rootReactElement = <Router><Blog /></Router>;
const target = document.getElementById('root');
render(rootReactElement, target);// I specify what I want to return and where I want to return it
