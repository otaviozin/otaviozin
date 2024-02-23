import axios from 'axios';

const githubToken = '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'

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