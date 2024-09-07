export const createChat = (chat) => {
    return {
      type: 'CREATE_CHAT',
      chat
    }
  }
  
  export const getChats = () => {
    return {
      type: 'GET_CHATS'
    }
  }
  
  export const updateChat = (chat) => {
    return {
      type: 'UPDATE_CHAT',
      chat
    }
  }
  
  export const deleteChat = (chatId) => {
    return {
      type: 'DELETE_CHAT',
      chatId
    }
  }