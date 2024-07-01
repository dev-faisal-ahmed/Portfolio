import { ServerResponseType, TSkill } from '@/utils/types';
import { baseApi } from '..';
import { TAddSkillPayload, TUpdateSKillPayload } from './types';

const skillUrl = 'skill';
const skillsUrl = 'skills';

export const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // **** Skill **** \\

    // add skill
    addSkill: builder.mutation<ServerResponseType<null>, TAddSkillPayload>({
      query: (payload) => ({
        url: `${skillUrl}`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['skills'],
    }),

    // update skill
    updateSkill: builder.mutation<
      ServerResponseType<null>,
      TUpdateSKillPayload
    >({
      query: ({ skillId, data }) => ({
        url: `${skillUrl}/${skillId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['skills'],
    }),

    // **** Skills **** \\

    // get skills
    getSkills: builder.query<ServerResponseType<TSkill[]>, null>({
      query: () => `${skillsUrl}`,
      providesTags: ['skills'],
    }),
  }),
});

export const {
  // skill
  useAddSkillMutation,
  useUpdateSkillMutation,
  // skills
  useGetSkillsQuery,
} = skillApi;
