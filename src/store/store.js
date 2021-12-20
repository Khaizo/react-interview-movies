import { createStore } from "redux";

import rootReducer from "../reducers/root_reducer";

import { movies$ } from '../datas/movies'

const store = createStore(
  rootReducer
);

// Récupération des données présentes dans fichier movies.js
movies$.then(data => {
  data.forEach(el =>
    store.dispatch({
      type: "GET_MOVIES",
      movie: {
        id: el.id,
        title: el.title,
        category: el.category,
        likes: el.likes,
        dislikes: el.dislikes,
        image: el.image
      },
    }))
    data.forEach(el =>
      store.dispatch({
        type: "GET_CATEGORIES",
        category: [el.category],
      }))
}
);

export default store;
