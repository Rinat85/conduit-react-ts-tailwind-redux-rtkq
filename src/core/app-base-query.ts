import { axiosBaseQuery } from 'core/axios-base-query';

const appBaseUrl: string = process.env.REACT_APP_BASE_URL as string;

export const appBaseQuery = axiosBaseQuery({ baseUrl: appBaseUrl });
