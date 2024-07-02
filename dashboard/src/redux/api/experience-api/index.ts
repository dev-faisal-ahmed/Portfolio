import { TExperience, TServerResponse } from '@/utils/types';
import { baseApi } from '..';
import { TAddExperiencePayload, TUpdateExperiencePayload } from './types';

const experienceUrl = 'experience';
const experiencesUrl = 'experiences';

const experienceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add experience
    addExperience: builder.mutation<
      TServerResponse<null>,
      TAddExperiencePayload
    >({
      query: (payload) => ({
        url: `${experienceUrl}`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['experiences'],
    }),

    // update experience
    updateExperience: builder.mutation<
      TServerResponse<null>,
      TUpdateExperiencePayload
    >({
      query: ({ experienceId, payload }) => ({
        url: `${experienceUrl}/${experienceId}`,
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: ['experiences'],
    }),

    // delete experience
    deleteExperience: builder.mutation<TServerResponse<null>, string>({
      query: (experienceId) => ({
        url: `${experienceUrl}/${experienceId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['experiences'],
    }),

    getExperiences: builder.query<TServerResponse<TExperience[]>, null>({
      query: () => `${experiencesUrl}`,
      providesTags: ['experiences'],
    }),
  }),
});

export const {
  useAddExperienceMutation,
  useUpdateExperienceMutation,
  useDeleteExperienceMutation,
  useGetExperiencesQuery,
} = experienceApi;
