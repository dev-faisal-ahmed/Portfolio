import { z } from 'zod';

const CreateBlog = z.object({
  title: z.string({ required_error: 'Title is required' }),
  image: z.string({ required_error: 'Image is required' }),
  content: z.string({ required_error: 'Content is required' }),
  tags: z.string({ required_error: 'Tags is required' }).array(),
});

const UpdateBlog = z.object({
  title: z.string({ required_error: 'Title is required' }).optional(),
  image: z.string({ required_error: 'Image is required' }).optional(),
  content: z.string({ required_error: 'Content is required' }).optional(),
  tags: z.string({ required_error: 'Tags is required' }).array().optional(),
});

export const BlogValidation = { CreateBlog, UpdateBlog };

export type TCreateBlogPayload = z.infer<typeof CreateBlog>;
export type TUpdateBlogPayload = z.infer<typeof UpdateBlog>;
