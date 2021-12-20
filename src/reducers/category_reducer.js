export const categoryReducer = (state = [], action) => {
    if (action.type === "GET_CATEGORIES") {
      return state.concat(action.category);
    }
    return state;
  };
