import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import Cards from "../Cards/Cards.js";
import Pagination from "./Pagination/Pagination.js";

import './Movie_list.css'

// Définition de la liste de MovieCards affichée
function Movies({ current_movies, filter }) {
  return (
    <div className="movies">
      <div className="row">
        {current_movies && current_movies

          .filter(el => {
            if (filter.size > 0 && !filter.has(el.category))
              return false;
            return true;
          })
          .map((el) => {
            return <Cards key={el.id} movie={el} />;
          })}
      </div>
    </div>)
}

const MoviesList = () => {

  // Récupération des éléments du state
  const movieList = useSelector(state => state.movies);
  const categoryList = useSelector(state => [...new Set(state.categories)]);

  // Mise en place des filtres de catégories

  const [filters, setFilters] = useState(new Set());

  const filterCheck = (value) => {
    if (filters.has(value)) {
      setFilters(activeFilter => {
        const newFilter = new Set(activeFilter);
        newFilter.delete(value);
        return newFilter;
      });
    } else {
      setFilters(activeFilter => {
        const newFilter = new Set(activeFilter);
        newFilter.add(value);
        return newFilter;
      });
    }
  }

  // Gestion des Films par page
  const [current_movies, setCurrent_movies] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [elem_displayed, setElemDisplayed] = useState(4);

  // Listing des films affichés en fonction de la range définie par le user et des filtres actifs
  useEffect(() => {
    const movies_displayed = movieList.filter(el => {
      if (filters.size > 0 && !filters.has(el.category))
        return false;
      return true;
    })
    const endOffset = itemOffset + elem_displayed;
    setCurrent_movies(movies_displayed.slice(itemOffset, endOffset));
    console.log(elem_displayed);
    setPageCount(Math.ceil(movies_displayed.length / elem_displayed));
  }, [movieList, itemOffset, elem_displayed, filters]);

  // Changement de page au click du user
  const handlePageClick = (e) => {
    const newOffset = e.selected * elem_displayed % movieList.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="movies-app">
      <div className="filters">
        <div className="form-check form-check-inline">

          {categoryList && categoryList.map((category, id) => {
            if (movieList.some(movie => (movie.category) === category))
              return (<label key={category} className="label-checkbox form-check-label">
                <input type="checkbox" className="mr-2 checkboxes form-check-input" id={category} selected={filters.has(category)} onClick={() => filterCheck(category)} />
                {category}
              </label>);
            else
              return (<></>)
          })}

        </div>
      </div>

      <label className=" label-elements form-check-label" onChange={(e) => setElemDisplayed(e.target.value)}>
        Choisissez le nombre d'éléments à afficher par page
        <select defaultValue={elem_displayed} className="form-select">
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
        </select>
      </label>

      <Movies current_movies={current_movies} filter={filters} />

      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  );
};

export default MoviesList;
