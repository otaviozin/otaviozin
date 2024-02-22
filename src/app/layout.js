import { Inter } from 'next/font/google';
import '../stylesheets/styles.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  	title: 'Otávio Dev',
  	description: 'Portfólio do Otávio',
};

export default function RootLayout({ children }) {
	return (
    	<html lang='pt-br'>
        	<body className={inter.className}>{children}</body>
      	</html>
  	);
}
