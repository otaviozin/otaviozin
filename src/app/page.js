import Image from 'next/image';

import Navbar from '@/components/Navbar';

import NextLogo from '../../public/stackImages/nextjs-logo.png';
import FirebaseLogo from '../../public/stackImages/Firebase-logo.png';

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <Image
                    src='https://avatars.githubusercontent.com/u/60949367?v=4'
                    height={128}
                    width={128}
                    placeholder='empty'
                    alt='placeholder'
                />
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
                        <Image src={NextLogo} width={70} height={70} />
                        <div>
                            <h2>Next.js</h2>
                            <p>
                                Desenvolvimento web utilizando ReactJS e Next.js
                            </p>
                        </div>
                    </div>
                    <div className='stackCard'>
                        <Image src={FirebaseLogo} width={70} height={70} />
                        <div>
                            <h2>Firebase</h2>
                            <p>
                                Autenticação de usuários e armazenamento de
                                dados com Firestore
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
