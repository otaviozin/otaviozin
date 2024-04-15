import Image from 'next/image';

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import Projects from '@/components/Projects';

export default function Home() {
    return (
        <div>
            <div className='container'>
                <section id='profileSection' className='profileSection'>
                    <div>
                        <Image
                            src='https://avatars.githubusercontent.com/u/60949367?v=4'
                            height={128}
                            width={128}
                            alt='Profile image from GitHub'
                            style={{ borderRadius: 20, marginTop: 30 }}
                            priority='true'
                        />
                        <div className='contactIcons'>
                            <a
                                href='https://github.com/otaviozin'
                                target='__blank'
                            >
                                <FaGithub />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/otavio-opereira/'
                                target='__blank'
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href='https://twitter.com/otaviozinn'
                                target='__blank'
                            >
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                    <div className='profileName'>
                        <p className='textSecondary'>Oi,</p>
                        <p className='fontLarge'>meu nome é Otávio,</p>
                        <p className='fontLarge'>sou desenvolvedor front-end</p>
                        <p
                            className='fontSmall textMuted'
                            style={{ marginTop: 8 }}
                        >
                            Atualmente estudante da FATEC Dep. Ary Fossen (FATEC
                            JUNDIAÍ)
                        </p>
                    </div>
                </section>
                <section id='about' className='aboutSection'>
                    <p className='textSecondary' style={{ marginBottom: 5 }}>
                        Sobre
                    </p>
                    <h1>Como comecei na carreira de programação...</h1>
                    <p className='fontSmall textMuted' style={{ marginTop: 8 }}>
                        Desde pequeno tenho contato com a tecnologia e
                        principalmente computadores, então desenvolvi o
                        interesse por programação. Em 2020 ingressei na ETEC
                        Vasco Antônio Venchiarutti, onde me formei Técnico em
                        Desenvolvimento de Sistemas. Atualmente curso Análise e
                        Desenvolvimento de Sistemas na FATEC Dep. Ary Fossen
                        (FATEC Jundiaí).
                    </p>
                </section>
                <section id='career' className='careerSection'>
                    <p className='textSecondary' style={{ marginBottom: 5 }}>
                        Carreira
                    </p>
                    <h1>Formações</h1>
                    <div className='careerItems'>
                        <div>
                            <p className='fontSmall textMuted'>
                                Fev. 2020 - Dez. 2022
                            </p>
                            <p>Técnico em Desenvolvimento de Sistemas</p>
                        </div>
                        <div>
                            <p className='fontSmall textMuted'>
                                Ago. 2023 - Presente
                            </p>
                            <p>
                                Tecnólogo em Análise e Desenvolvimento de
                                Sistemas
                            </p>
                        </div>
                    </div>
                </section>
                <section id='projects' className='repoSection'>
                    <p className='textSecondary' style={{ marginBottom: 5 }}>
                        Projetos
                    </p>
                    <h1>Projetos e estudos</h1>
                    <Projects />
                </section>
                <section className='stackSection'>
                    <p className='textSecondary' style={{ marginBottom: 5 }}>
                        Skills
                    </p>
                    <h1>Tecnologias que utilizo</h1>
                    <div className='stackImages'>
                        <Image
                            src='/assets/nextjs-logo.png'
                            width={48}
                            height={48}
                            alt='Next.js logo'
                        />
                        <Image
                            src='/assets/Firebase-logo.png'
                            width={48}
                            height={48}
                            alt='Google Firebase logo'
                        />
                        <Image
                            src='/assets/tailwind-logo.png'
                            width={48}
                            height={48}
                            alt='Tailwind logo'
                        />
                        <Image
                            src='/assets/react-logo.png'
                            width={48}
                            height={48}
                            alt='React logo'
                        />
                        <Image
                            src='/assets/sass-logo.png'
                            width={48}
                            height={48}
                            alt='Sass logo'
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
