import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_API_TOKEN,
});

export const GetUser = async () => {
  return await octokit.request('GET /users/{username}', {
    username: process.env.NEXT_PUBLIC_GITHUB_USERNAME as string,
  });
};

// export const GetUserRepos = async () => {
//   return await octokit.request('GET /users/{username}/repos', {
//     username: process.env.NEXT_PUBLIC_GITHUB_USERNAME as string,
//   });
// };
