import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IFeedArticle } from 'modules/feed/api/dto/global-feed.in';
import { FavoriteButton } from 'modules/feed/components/favorite-button/favorite-button.component';
import { TagList } from 'modules/feed/components/tag-list/tag-list.component';

interface IArticleProps extends IFeedArticle {}

export const Article: FC<IArticleProps> = ({
  author,
  createdAt,
  favoritesCount,
  title,
  description,
  tagList,
}) => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex justify-between">
          <div className="flex">
            <Link to={`/@${author.username}`}>
              <img
                src={author.image}
                alt="avatar"
                className="inline-block h-8 w-8 rounded-full"
              />
            </Link>
            <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
              <Link to={`/@${author.username}`} className="font-medium">
                {author.username}
              </Link>
              <span className="text-conduit-grey text-date">{createdAt}</span>
            </div>
          </div>
          <FavoriteButton count={favoritesCount} />
        </div>
        <Link to="/article/qwerty" className="hover:no-underline">
          <h1 className="mb-1 font-semibold text-2xl text-conduit-darkestGray">
            s{title}
          </h1>
          <p className="text-conduit-darkenGrey font-light mb-1">
            {description}
          </p>
          <div className="flex justify-between">
            <span className="text-conduit-grey text-date font-light">
              Read more...
            </span>
            <TagList list={tagList} />
          </div>
        </Link>
      </div>
    </article>
  );
};
