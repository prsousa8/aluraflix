import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <img src='./LogoMain.svg' alt='logo' />
                <div className='botoes'>
                    <button>HOME</button>
                    <button>NOVO VÍDEO</button>
                </div>
            </nav>
        </header>
    )
}
export default Header;