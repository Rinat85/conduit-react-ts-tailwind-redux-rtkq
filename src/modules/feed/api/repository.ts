import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { appBaseQuery } from 'core/app-base-query';
import { IGlobalFeedIn } from 'modules/feed/api/dto/global-feed.in';

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: appBaseQuery,
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<IGlobalFeedIn, void>({
      query: () => ({
        url: '/articles',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery } = feedApi;
