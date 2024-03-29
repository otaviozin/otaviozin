import axios from 'axios';

const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export const githubURL = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer ${githubToken}`,
  },
});
