const initialState = {
    chats: [],
    loading: false,
  };
  
  export default function chatReducer(state = initialState, action) {
    switch (action.type) {
      case 'CREATE_CHAT':
        return {
          ...state,
          chats: [...state.chats, action.chat],
        };
      case 'GET_CHATS':
        return {
          ...state,
          chats: action.chats,
          loading: false,
        };
      case 'UPDATE_CHAT':
        return {
          ...state,
          chats: state.chats.map((chat) =>
            chat._id === action.chat._id ? action.chat : chat
          ),
        };
      case 'DELETE_CHAT':
        return {
          ...state,
          chats: state.chats.filter((chat) => chat._id !== action.chatId),
        };
      default:
        return state;
    }
  }