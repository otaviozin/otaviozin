'use client';

import { useState, useEffect } from 'react';

import { getRepos } from '@/api/getRepos';

export default function Projects() {
    const [repos, setRepos] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getRepos();
                const data = await res.data;
                setRepos(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='repoList'>
            {repos &&
                repos.map((repo) => {
                    return (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='repoCard'>
                                <h2>{repo.name}</h2>
                                <p>{repo.description}</p>
                            </div>
                        </a>
                    );
                })}
        </div>
    );
}
