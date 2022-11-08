import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from 'core/axios-base-query';
import { IGlobalFeedIn } from 'modules/feed/api/dto/global-feed.in';

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery(),
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
