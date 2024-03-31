import Image from 'next/image';

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';

import NextLogo from '../../public/stackImages/nextjs-logo.png';
import FirebaseLogo from '../../public/stackImages/Firebase-logo.png';
import TailwindLogo from '../../public/stackImages/tailwind-logo.png';

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <section id='profileSection' className='profileSection'>
                    <Image
                        src='https://avatars.githubusercontent.com/u/60949367?v=4'
                        height={128}
                        width={128}
                        alt='Profile image from GitHub'
                        style={{ borderRadius: 70 }}
                        priority='true'
                    />
                    <div className='profileName'>
                        <h2>Otávio</h2>
                        <h2>Pereira</h2>
                    </div>
                </section>
                <section className='bioSection'>
                    <div className='bioHeader'>
                        <h1>Desenvolvedor Front-End</h1>
                        <p>Atualmente estudando na FATEC Jundiaí</p>
                    </div>
                    <p>
                        Técnico em Desenvolvimento de Sistemas formado na ETEC
                        Vasco Antônio Venchiarutti, desenvolvendo sites e outros
                        projetos front-end desde 2021.
                    </p>
                </section>
                <section className='stackSection'>
                    <h1>Stack</h1>
                    <div className='stackCard'>
                        <Image
                            src={NextLogo}
                            width={70}
                            height={70}
                            alt='Next.js logo'
                        />
                        <h2>Next.js</h2>
                    </div>
                    <div className='stackCard'>
                        <Image
                            src={FirebaseLogo}
                            width={70}
                            height={70}
                            alt='Firebase logo'
                        />
                        <h2>Firebase</h2>
                    </div>
                    <div className='stackCard'>
                        <Image
                            src={TailwindLogo}
                            width={70}
                            height={70}
                            alt='Tailwind logo'
                        />
                        <h2>Tailwind</h2>
                    </div>
                    <div className='stackCard'>
                        <h1 style={{ fontSize: 70 }}>?</h1>
                        <div>
                            <h2>Em breve...</h2>
                            <p>
                                Volte aqui em outro momento, quem sabe a stack
                                tenha recebido uma tecnologia nova :D
                            </p>
                        </div>
                    </div>
                </section>
                <Projects />
                <section id='contactSection' className='contactSection'>
                    <h1>Contato</h1>
                    <p>
                        Atualmente estou em busca de estágio. Caso queira entrar
                        em contato comigo entre em contato pelo email ou redes
                        sociais
                    </p>
                    <div className='contactIcons'>
                        <a href='https://github.com/otaviozin' target='__blank'>
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
                </section>
            </div>
        </div>
    );
}
