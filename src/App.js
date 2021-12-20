import React from "react";

import { Provider } from 'react-redux';
import MoviesStore from './store/store'

import Header from "./components/Layouts/Header/Header.js";
import MoviesList from "./components/MoviesList/Movies_list";


const App = () => (
  <Provider store={MoviesStore}>
    <Header />
    <MoviesList />
  </Provider>
);

export default App;
