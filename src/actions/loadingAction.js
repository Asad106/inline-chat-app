export const isLoading = () => {
  console.log("text");
  return (dispatch) => {
    dispatch({ type: "IS_LOADING" });
  };
};

export const clearLoader = () => {
  return (dispatch) => {
    dispatch({ type: "CLEAR" });
  };
};
