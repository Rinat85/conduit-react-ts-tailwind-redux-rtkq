import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from 'core/axios-base-query';
import { IGlobalFeedIn } from 'modules/feed/api/dto/global-feed.in';

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api',
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<IGlobalFeedIn, string>({
      query: () => ({
        url: '/arcticles',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery } = feedApi;
