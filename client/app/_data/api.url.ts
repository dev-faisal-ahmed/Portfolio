const serverAddress = 'http://localhost:5000/api/v1';

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
