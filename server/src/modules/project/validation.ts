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

export const ProjectValidation = { AddProject };

export type TAddProjectPayload = z.infer<typeof AddProject>;
