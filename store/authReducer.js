const CHANGE_AUTH = "CHANGE_AUTH";

const defaultState = {
  isAuth: false,
};
export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};

export const changeAuthAction = (payload) => {
  return { type: CHANGE_AUTH, payload };
};
