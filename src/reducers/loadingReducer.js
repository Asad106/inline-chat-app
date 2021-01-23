const initState = { status: false };

const loadingReducer = (state = initState, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return {
        status: true,
      };
    case "CLEAR":
      return {
        status: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
