import Image from 'next/image';

import Navbar from '@/components/Navbar';

export default function Home() {
	return (
		<div>
			<Navbar />
			<div className='container'>
				<Image
					height={128}
					width={128}
					placeholder='empty'
				/>
				<section className='bioSection'>
					<h1>Dev Front-End</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu risus sed velit ullamcorper bibendum id non sapien.</p>
				</section>
			</div>
		</div>
	);
}
