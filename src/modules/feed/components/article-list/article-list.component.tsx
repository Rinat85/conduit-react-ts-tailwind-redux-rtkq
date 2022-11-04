import { FC } from 'react';
import { Article } from 'modules/feed/components/article/article.component';
// interface IArticleListProps {};

export const ArticleList: FC = (props) => {
  return (
    <div className="w-3/4">
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  );
};
