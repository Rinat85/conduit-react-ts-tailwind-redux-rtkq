import { FC } from 'react';
import { Container } from 'common/components/container/container.component';
import { useGetGlobalFeedQuery } from 'modules/feed/api/repository';
import { ArticleList } from 'modules/feed/components/article-list/article-list.component';
import { FeedToggle } from 'modules/feed/components/feed-toggle/feed-toggle.component';
// interface IFeedProps {};

export const Feed: FC = () => {
  const { data, isLoading, error } = useGetGlobalFeedQuery('');

  if (isLoading) {
    return <Container>Feed Loading...</Container>;
  }

  if (error) {
    return <Container>Error while loading feed</Container>;
  }

  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <ArticleList list={data?.articles || []} />
        <div className="w-1/4">tags</div>
      </div>
    </Container>
  );
};
