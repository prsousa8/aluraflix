import Titulo from '../Titulo';
import './Banner.css';

const Banner = () => {
    return (
        <section className='banner'>
            <div className='banner-content'>
                <div className='banner-description'>
                    <Titulo background={'#6BD1FF'}>FRONT END</Titulo>
                    <h1>SEO com React</h1>
                    <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
                </div>
                <img src='./player.png' />
            </div>
        </section>
    )
}

export default Banner