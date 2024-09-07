import User from "./User";

interface Chat {
    _id: string;
    message: string;
    author: User;
    createdAt: Date;
  }
  
  export default Chat;