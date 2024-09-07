export const createStory = (story) => {
    return {
      type: 'CREATE_STORY',
      story
    }
  }
  
  export const getStories = () => {
    return {
      type: 'GET_STORIES'
    }
  }
  
  export const updateStory = (story) => {
    return {
      type: 'UPDATE_STORY',
      story
    }
  }
  
  export const deleteStory = (storyId) => {
    return {
      type: 'DELETE_STORY',
      storyId
    }
  }