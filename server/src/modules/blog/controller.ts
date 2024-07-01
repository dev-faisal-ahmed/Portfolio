import { SendSuccessResponse } from '../../helpers';
import { TryCatch } from '../../utils/try-catch';
import { BlogService } from './services';

const CreateBlog = TryCatch(async (req, res) => {
  const blog = await BlogService.CreateBlog(req.body);

  SendSuccessResponse(res, {
    status: 200,
    message: 'Blog Created Successfully!',
    data: blog,
  });
});

const UpdateBlog = TryCatch(async (req, res) => {
  const message = await BlogService.UpdateBlog(req.params.blogId, req.body);

  SendSuccessResponse(res, {
    status: 200,
    message,
    data: null,
  });
});

const GetBlogDetails = TryCatch(async (req, res) => {
  const blog = await BlogService.GetBlogDetails(req.params.blogId);

  SendSuccessResponse(res, {
    status: 200,
    message: 'Blog Details Retrieved Successfully',
    data: blog,
  });
});

const GetBlogs = TryCatch(async (req, res) => {
  const blogs = await BlogService.GetBlogs();

  SendSuccessResponse(res, {
    status: 200,
    message: 'Blogs Retrieved Successfully',
    data: blogs,
  });
});

export const BlogController = {
  CreateBlog,
  UpdateBlog,
  GetBlogDetails,
  GetBlogs,
};
