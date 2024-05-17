export type MediumArticle = {
  author: string;
  categories: string[];
  content: string;
  description: string;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
};

export type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  createdAt: string;
};
