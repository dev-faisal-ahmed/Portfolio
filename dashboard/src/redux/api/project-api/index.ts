import { TServerResponse } from '@/utils/types';
import { baseApi } from '..';
import { TAddProjectPayload, TUpdateProjectPayload } from './types';
import { TProject } from '@/utils/types';

const projectUrl = 'project';
const projectsUrl = 'projects';

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // **** Project **** \\

    // add project
    addProject: builder.mutation<TServerResponse<null>, TAddProjectPayload>({
      query: (payload) => ({
        url: `${projectUrl}`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['projects'],
    }),

    // update project
    updateProject: builder.mutation<
      TServerResponse<null>,
      TUpdateProjectPayload
    >({
      query: ({ projectId, data }) => ({
        url: `${projectUrl}/${projectId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['projects', 'project-details'],
    }),

    // delete project
    deleteProject: builder.mutation<TServerResponse<null>, string>({
      query: (projectId) => ({
        url: `${projectUrl}/${projectId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['projects'],
    }),

    // project details
    getProjectDetails: builder.query<TServerResponse<TProject>, string>({
      query: (projectId) => `${projectUrl}/${projectId}`,
      providesTags: ['project-details'],
    }),

    // **** Projects **** \\

    // project details
    getProjects: builder.query<TServerResponse<TProject[]>, null>({
      query: () => `${projectsUrl}`,
      providesTags: ['projects'],
    }),
  }),
});

export const {
  useAddProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useGetProjectDetailsQuery,
  useGetProjectsQuery,
} = projectApi;
