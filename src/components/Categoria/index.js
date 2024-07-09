import Titulo from '../Titulo'
import Card from '../Card'
import './Categoria.css'
import videos from './db.json';

function Categoria() {

    return (
        <section className='categoria'>
            <div className='categoria-content'>
                <Titulo background='#6BD1FF'>FRONT END</Titulo>
                <div className='categoria-cards'>
                    {videos.map((video) => (<Card imagem={video.imagem} titulo={video.Titulo} cor='#6BD1FF'></Card>))}
                </div>
            </div>
        </section>
    )
}

export default Categoria