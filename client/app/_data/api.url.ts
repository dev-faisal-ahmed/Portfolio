const serverAddress = 'https://portfolio-server-faisal.vercel.app/api/v1';

export const apiUrl = {
  // skill
  getGroupedSkills: `${serverAddress}/skills/grouped`,

  // project
  getProjects: `${serverAddress}/projects`,
  getProjectDetails: (projectId: string) =>
    `${serverAddress}/project/${projectId}`,

  // blog
  getBlogs: `${serverAddress}/blogs`,
  getBlogDetails: (blogId: string) => `${serverAddress}/blog/${blogId}`,

  // experience
  getExperiences: `${serverAddress}/experiences`,
};
