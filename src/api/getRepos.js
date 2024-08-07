import { githubURL } from '.';

export const getRepos = async () => {
    const response = await githubURL.get('/users/otaviozin/repos');
    return response;
};
