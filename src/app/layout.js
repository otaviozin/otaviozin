import { Inter } from 'next/font/google';
import '../styles/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Dev Otávio',
    description: 'Portfólio do Otávio',
};

export default function RootLayout({ children }) {
    return (
        <html lang='pt-br'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
