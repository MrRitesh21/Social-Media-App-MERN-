export const login = (credentials) => {
    return {
      type: 'LOGIN',
      credentials
    }
  }
  
  export const logout = () => {
    return {
      type: 'LOGOUT'
    }
  }
  
  export const register = (user) => {
    return {
      type: 'REGISTER',
      user
    }
  }