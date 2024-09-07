const initialState = {
    posts: [],
    loading: false,
  };
  
  export default function postReducer(state = initialState, action) {
    switch (action.type) {
      case 'CREATE_POST':
        return {
          ...state,
          posts: [...state.posts, action.post],
        };
      case 'GET_POSTS':
        return {
          ...state,
          posts: action.posts,
          loading: false,
        };
      case 'UPDATE_POST':
        return {
          ...state,
          posts: state.posts.map((post) =>
            post._id === action.post._id ? action.post : post
          ),
        };
      case 'DELETE_POST':
        return {
          ...state,
          posts: state.posts.filter((post) => post._id !== action.postId),
        };
      default:
        return state;
    }
  }