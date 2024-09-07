import User from "./User";

interface Story {
    _id: string;
    content: string;
    author: User;
    createdAt: Date;
  }
  
  export default Story;