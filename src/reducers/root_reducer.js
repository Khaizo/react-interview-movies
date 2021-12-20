import { combineReducers } from "redux";

import { filmReducer } from './film_reducer';
import { categoryReducer } from "./category_reducer";

const rootReducer = combineReducers({
    movies: filmReducer,
    categories : categoryReducer,
  })

export default rootReducer;
