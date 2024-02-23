import axios from 'axios';

const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const githubURL = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
        'Authorization': `Bearer ${githubToken}`
    }
});

export const getUser = async () => {
    const res = await githubURL.get('/users/otaviozin');
    return res;
}