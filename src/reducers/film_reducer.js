export const filmReducer = (state = [], action) => {
    if (action.type === "GET_MOVIES") {
      return state.concat(action.movie);
    }
    if (action.type === "MOVIE_SUPPR") {
      return state.filter(m => {
        if (m.id === action.id) {
          return false;
        }
        return true;
      });
    }
    return state;
  };
