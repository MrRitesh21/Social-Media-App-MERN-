import User from "./User";

interface Post {
    _id: string;
    content: string;
    author: User;
    createdAt: Date;
  }
  
  export default Post;