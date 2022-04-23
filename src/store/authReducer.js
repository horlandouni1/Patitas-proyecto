const initialState = {
  auth: false,
  userData: [],
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOGIN":
      return { ...state, auth: action.payload };
    case "SET_USER":
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
export { authReducer };
