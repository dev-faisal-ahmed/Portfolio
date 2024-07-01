import { Router } from 'express';
import { AuthGuard } from '../../middleware/auth-guard';
import { ValidationHandler } from '../../middleware/validation.handler';
import { BlogValidation } from './validation';
import { BlogController } from './controller';

// blog
export const BlogRouter = Router();

BlogRouter.post(
  '/',
  AuthGuard,
  ValidationHandler(BlogValidation.CreateBlog),
  BlogController.CreateBlog
);

BlogRouter.patch(
  '/:blogId',
  AuthGuard,
  ValidationHandler(BlogValidation.UpdateBlog),
  BlogController.UpdateBlog
);

BlogRouter.get('/:blogId', BlogController.GetBlogDetails);

//  blogs
export const BlogsRouter = Router();

BlogsRouter.get('/', BlogController.GetBlogs);
