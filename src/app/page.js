import Image from 'next/image';

import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';

//Icons imports
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';

//Image imports
import nextLogo from '../../public/stackImages/nextjs-logo.png'
import sassLogo from '../../public/stackImages/sass-logo.png'

export default function Home() {
	return (
		<div>
			<Navbar />
			<section className='aboutSection'>
				<Image
					src='https://avatars.githubusercontent.com/u/60949367?v=4'
					alt='GitHub profile image'
					width={200}
					height={200}
					priority={true}
					className='profileImage'
				/>
				<div>
					<h4>Front-end | JavaScript</h4>
					<h1>Otávio Pereira</h1>
					<p>Estudante de Análise e Desenvolvimento de Sistemas na FATEC Jundiaí</p>
				</div>
			</section>
			<section id='about' className='stackSection'>
				<Image
					src={nextLogo}
					alt='Next.js logo'
					priority={true}
					width={150}
					height={150}
				/>
				<h3>Next.js</h3>
				<p>Desenvolvimento utilizando Next.js em aplicações web baseados em React</p>
				<Image
					src={sassLogo}
					alt='Sass logo'
					priority={true}
					width={150}
					height={150}
				/>
				<h3>Sass</h3>
				<p>Desenvolvimento prático adicionando recursos de variáveis, funções e operações dentro do CSS.</p>
			</section>
			<Projects />
			<section id='contact' className='contactSection'>
				<h1>Me segue nas redes :D</h1>
				<p>No GitHub você consegue acompanhar o progresso dos meus projetos e ver meu progresso de perto</p>
				<div className='contactLinks'>
					<a href='https://github.com/otaviozin'>
						<FiGithub />
					</a>
					<a href='https://www.linkedin.com/in/otavio-opereira'>
						<FiLinkedin />
					</a>
				</div>
			</section>
		</div>
	);
}
