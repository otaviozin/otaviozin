'use client'

import { useState, useEffect } from 'react';

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
					<p>{user.login}</p>
				</Container>
			)}
		</div>
    );
}
