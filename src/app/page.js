'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

import Navbar from '@/components/Navbar';
import Container from '@/components/Container';

import { getUser } from '@/api/getUserGithub';

export default function Home() {
	const [user, setUser] = useState();
	
	useEffect(() => {
		const fetchData = async () => {
			try{
				const res = await getUser();
				const data = await res.data;
				setUser(data);
			}
			catch(error){
				console.error(error);
			}
		}
		fetchData();
	}, []);

    return (
		<div>
			<Navbar />
			{user && (
				<Container>
					<div className='container-header'>
						<Image
							src={user.avatar_url}
							width={128}
							height={128}
							alt='Profile Image'
							style={{borderRadius: 100}}
						/>
						<div style={{marginTop: 20}}>
							<h3>{user.name}</h3>
							<h3 className='text-gray'>@{user.login}</h3>
						</div>
					</div>
					<div className='sub-container'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in lectus id metus molestie pharetra. Praesent tempus vitae augue quis imperdiet. Ut dui nulla, mattis et pellentesque nec, iaculis a enim. Phasellus posuere, diam sed congue commodo, dolor purus tempus eros, bibendum feugiat nisl urna sed turpis. Pellentesque erat quam, cursus ac tempus ac, iaculis vitae libero. Maecenas maximus sit amet lorem a gravida. Vestibulum cursus tortor id neque rhoncus, maximus egestas libero convallis. Duis rutrum turpis vitae accumsan consequat. Nulla commodo nec ex eget convallis. Phasellus tempus sapien interdum orci sagittis, ac scelerisque ligula fermentum. Ut risus eros, auctor eget nisl vel, aliquet vulputate elit. Nam auctor in enim sed molestie. Nullam finibus, eros eu euismod sodales, ante arcu mollis nunc, at molestie nunc orci in quam. Ut pretium imperdiet neque non finibus. Quisque eget augue tristique, ultricies nulla in, vulputate tellus. Etiam tempor viverra nulla, sit amet dignissim leo aliquam eu.</p>
					</div>
				</Container>
			)}
		</div>
    );
}
