export const createProject = project => {
  return (dispatch, getState) => {
    // make Async call to database
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
