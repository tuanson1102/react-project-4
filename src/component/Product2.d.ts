type Product2 = {
  id: number;
  title: string;
  image: string;
  body: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};
