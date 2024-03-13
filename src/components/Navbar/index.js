export default function Navbar() {
    return (
        <header className='navbar'>
            <nav className='navLogo'>
                <a href='/'>Dev Otávio</a>
            </nav>
            <nav className='navLinks'>
                <a href='#about'>Sobre</a>
                <a href='#projects'>Projetos</a>
                <a href='#contact'>Contato</a>
            </nav>
        </header>
    );
}