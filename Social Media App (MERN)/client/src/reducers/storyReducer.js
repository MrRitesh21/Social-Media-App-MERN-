const initialState = {
    stories: [],
    loading: false,
  };
  
  export default function storyReducer(state = initialState, action) {
    switch (action.type) {
      case 'CREATE_STORY':
        return {
          ...state,
          stories: [...state.stories, action.story],
        };
      case 'GET_STORIES':
        return {
          ...state,
          stories: action.stories,
          loading: false,
        };
      case 'UPDATE_STORY':
        return {
          ...state,
          stories: state.stories.map((story) =>
            story._id === action.story._id ? action.story : story
          ),
        };
      case 'DELETE_STORY':
        return {
          ...state,
          stories: state.stories.filter((story) => story._id !== action.storyId),
        };
      default:
        return state;
    }
  }