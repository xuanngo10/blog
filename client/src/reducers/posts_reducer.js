import {
  RECEIVE_POSTS,
  RECEIVE_USER_POSTS,
  RECEIVE_NEW_POST,
  RECEIVE_POST,
  RECEIVE_NEW_COMMENT,
} from "../actions/post_actions";

const initialState = {
  all: [],
  user: {},
  new: undefined,
  post: {},
  comment: {},
};

// state = { all: {}, user: {}, new: undefined, post: {}, comment: {} }
// Object.freeze(state);
// let newState = Object.assign({}, state);

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        all: action.payload,
      };
    case RECEIVE_USER_POSTS:
      return {
        ...state,
        user: action.payload,
      };
    case RECEIVE_NEW_POST:
      return {
        ...state,
        new: [action.payload, ...state.all],
      };
    case RECEIVE_POST:
      return {
        ...state,
        post: action.payload,
      };
    case RECEIVE_NEW_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: action.payload },
      };
    default:
      return state;
  }
};

export default PostsReducer;
