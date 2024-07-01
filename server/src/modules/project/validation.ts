import { z } from 'zod';

const AddProject = z.object({
  name: z.string({ required_error: 'Project Name is required' }),
  coverUrl: z.string({ required_error: 'Project Name is required' }),
  description: z.string({ required_error: 'Project Name is required' }),
  links: z.object({
    client: z.string({ required_error: 'Client Url is required' }),
    server: z.string({ required_error: 'Client Url is required' }),
    live: z.string({ required_error: 'Client Url is required' }),
  }),
  technologies: z
    .string({ required_error: 'Technologies is required' })
    .array(),
  priority: z.number({ required_error: 'Project Priority is required' }),
});

const UpdateProject = z.object({
  name: z.string({ required_error: 'Project Name is required' }).optional(),
  coverUrl: z.string({ required_error: 'Project Name is required' }).optional(),

  description: z
    .string({ required_error: 'Project Name is required' })
    .optional(),

  links: z
    .object({
      client: z.string({ required_error: 'Client Url is required' }).optional(),
      server: z.string({ required_error: 'Client Url is required' }).optional(),
      live: z.string({ required_error: 'Client Url is required' }).optional(),
    })
    .optional(),

  technologies: z
    .string({ required_error: 'Technologies is required' })
    .array()
    .optional(),

  priority: z
    .number({ required_error: 'Project Priority is required' })
    .optional(),
});

export const ProjectValidation = { AddProject, UpdateProject };

export type TAddProjectPayload = z.infer<typeof AddProject>;
export type TUpdateProjectPayload = z.infer<typeof UpdateProject>;
