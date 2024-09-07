export const createPost = (post) => {
    return {
      type: 'CREATE_POST',
      post
    }
  }
  
  export const getPosts = () => {
    return {
      type: 'GET_POSTS'
    }
  }
  
  export const updatePost = (post) => {
    return {
      type: 'UPDATE_POST',
      post
    }
  }
  
  export const deletePost = (postId) => {
    return {
      type: 'DELETE_POST',
      postId
    }
  }