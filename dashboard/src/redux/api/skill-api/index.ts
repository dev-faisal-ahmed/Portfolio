import { TServerResponse, TSkill } from '@/utils/types';
import { baseApi } from '..';
import { TAddSkillPayload, TUpdateSKillPayload } from './types';

const skillUrl = 'skill';
const skillsUrl = 'skills';

export const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // **** Skill **** \\

    // add skill
    addSkill: builder.mutation<TServerResponse<null>, TAddSkillPayload>({
      query: (payload) => ({
        url: `${skillUrl}`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['skills'],
    }),

    // update skill
    updateSkill: builder.mutation<TServerResponse<null>, TUpdateSKillPayload>({
      query: ({ skillId, data }) => ({
        url: `${skillUrl}/${skillId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['skills'],
    }),

    deleteSkill: builder.mutation<TServerResponse<null>, string>({
      query: (skillId) => ({
        url: `${skillUrl}/${skillId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['skills'],
    }),

    // **** Skills **** \\

    // get skills
    getSkills: builder.query<TServerResponse<TSkill[]>, null>({
      query: () => `${skillsUrl}`,
      providesTags: ['skills'],
    }),
  }),
});

export const {
  // skill
  useAddSkillMutation,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
  // skills
  useGetSkillsQuery,
} = skillApi;
