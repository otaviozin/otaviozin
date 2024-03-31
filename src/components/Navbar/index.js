import './index.css';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <a href='/'>Icon</a>
            <div className='navLinks'>
                <a href='/'>Início</a>
                <a href='#projects'>Projetos</a>
            </div>
        </nav>
    );
}
