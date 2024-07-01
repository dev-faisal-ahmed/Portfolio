import { ServerResponseType } from '@/utils/types';
import { baseApi } from '..';
import { TAddSkillPayload } from './types';

const skillUrl = 'skill';

export const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add skill
    addSkill: builder.mutation<ServerResponseType<null>, TAddSkillPayload>({
      query: (payload) => ({
        url: `${skillUrl}`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['skills'],
    }),
  }),
});

export const { useAddSkillMutation } = skillApi;
