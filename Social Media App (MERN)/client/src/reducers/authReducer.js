const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          user: action.credentials,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
      case 'REGISTER':
        return {
          ...state,
          user: action.user,
        };
      default:
        return state;
    }
  }