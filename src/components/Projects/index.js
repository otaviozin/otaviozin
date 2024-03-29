'use client';
import './index.css';

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
        <section id='projects' className='repoSection'>
            <h1>Projetos</h1>
            {repos &&
                repos.map((repo) => {
                    return (
                        <div key={repo.id} className='repoCard'>
                            <div>
                                <h1>{repo.name}</h1>
                                <p>{repo.description}</p>
                            </div>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href={repo.html_url}
                            >
                                Ver no GitHub
                            </a>
                        </div>
                    );
                })}
        </section>
    );
}
