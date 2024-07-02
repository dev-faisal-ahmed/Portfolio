import { TServerResponse } from '@/utils/types';
import { baseApi } from '..';
import { TCreateBlogPayload, TUpdateBlogPayload } from './types';
import { TBlog } from '@/utils/types';

const blogUrl = 'blog';
const blogsUrl = 'blogs';

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // create blog
    createBlog: builder.mutation<TServerResponse<null>, TCreateBlogPayload>({
      query: (payload) => ({
        url: `${blogUrl}`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['blogs'],
    }),

    // get blogs
    getBlogs: builder.query<TServerResponse<TBlog[]>, null>({
      query: () => `${blogsUrl}`,
      providesTags: ['blogs'],
    }),

    // get blog details
    getBlogDetails: builder.query<TServerResponse<TBlog>, string>({
      query: (blogId) => `${blogUrl}/${blogId}`,
      providesTags: ['blog-details'],
    }),

    updateBlog: builder.mutation<TServerResponse<null>, TUpdateBlogPayload>({
      query: ({ blogId, payload }) => ({
        url: `${blogUrl}/${blogId}`,
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: ['blog-details', 'blogs'],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetBlogsQuery,
  useGetBlogDetailsQuery,
  useUpdateBlogMutation,
} = blogApi;
