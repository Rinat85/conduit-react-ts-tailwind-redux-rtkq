import { FC } from 'react';
import { Container } from 'common/components/container/container.component';
import { ArticleList } from 'modules/feed/components/article-list/article-list.component';
import { FeedToggle } from 'modules/feed/components/feed-toggle/feed-toggle.component';
// interface IFeedProps {};

export const Feed: FC = () => {
  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <ArticleList />
        <div className="w-1/4">tags</div>
      </div>
    </Container>
  );
};
