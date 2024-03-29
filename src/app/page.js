import Image from 'next/image';

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
                            width={90}
                            height={70}
                            alt='Next.js logo'
                        />
                        <div>
                            <h2>Next.js</h2>
                            <p>
                                Desenvolvimento web utilizando ReactJS e Next.js
                            </p>
                        </div>
                    </div>
                    <div className='stackCard'>
                        <Image
                            src={FirebaseLogo}
                            width={90}
                            height={70}
                            alt='Firebase logo'
                        />
                        <div>
                            <h2>Firebase</h2>
                            <p>
                                Autenticação de usuários e armazenamento de
                                dados com Firestore
                            </p>
                        </div>
                    </div>
                    <div className='stackCard'>
                        <Image
                            src={TailwindLogo}
                            width={90}
                            height={70}
                            alt='Tailwind logo'
                        />
                        <div>
                            <h2>Tailwind</h2>
                            <p>
                                Framework CSS para desenvolvimento de sites e
                                apps baseados em HTML
                            </p>
                        </div>
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
            </div>
        </div>
    );
}
