export interface IGlobalFeedIn {
  articles: IFeedArticle[];
  articlesCount: number;
}

export interface IFeedArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: IAuthor;
}

export interface IAuthor {
  username: string;
  bio?: string | null;
  image: string;
  following: boolean;
}
