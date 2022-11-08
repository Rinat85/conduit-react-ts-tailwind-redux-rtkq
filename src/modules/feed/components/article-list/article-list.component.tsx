import { FC } from 'react';
import { IFeedArticle } from 'modules/feed/api/dto/global-feed.in';
import { Article } from 'modules/feed/components/article/article.component';

interface IArticleListProps {
  list: IFeedArticle[];
}

export const ArticleList: FC<IArticleListProps> = ({ list }) => {
  return (
    <div className="w-3/4">
      {list.map((article) => (
        <Article key={article.slug} {...article} />
      ))}
    </div>
  );
};
