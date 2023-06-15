import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { postsReducer } from "./postsReducer";
import { authReducer } from "./authReducer";
const rootReducer = combineReducers({
  postsReducer,
  authReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
