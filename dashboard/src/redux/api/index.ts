// Need to use the React-specific entry point to import createApi
import { serverAddress } from '@/data';
import { getToken } from '@/utils/helper';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuey = fetchBaseQuery({
  baseUrl: `${serverAddress}`,
  prepareHeaders: (headers) => {
    const token = getToken();
    if (token) {
      headers.set('authorization', `${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQuey,
  endpoints: () => ({}),
  tagTypes: ['skills', 'projects', 'project-details'],
});
