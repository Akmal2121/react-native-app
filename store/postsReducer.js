const GET_POSTS = "GET_POSTS";
const ADD_POST = "ADD_POST";
const DELETE_POSTS = "DELETE_POSTS";
const SEARCH_INPUT = "SEARCH_INPUT";

const defaultState = {
  posts: [],
};

export const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_POSTS:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };
    case SEARCH_INPUT:
      if (action.payload === " " || action.payload === undefined) {
        return state;
      }
      return {
        ...state,
        posts: state.posts.filter((post) =>
          post.first_name.includes(action.payload)
        ),
      };
    default:
      return state;
  }
};

export const getPostsAction = (payload) => {
  return { type: GET_POSTS, payload };
};

export const addPostAction = (payload) => {
  return { type: ADD_POST, payload };
};

export const deletePostAction = (payload) => {
  return { type: DELETE_POSTS, payload };
};
export const searchUserRedux = (payload) => {
  return { type: SEARCH_INPUT, payload };
};
