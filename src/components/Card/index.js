import './Card.css'

const Card = ({imagem,titulo,cor}) => {
    return (
        <div className='card' style={{borderColor:cor}}>
            <img src={imagem} alt={titulo} />
            <div className='btnCard'>
                <button>
                    <img src='./deletar.svg' alt='deletar' />
                    DELETAR
                </button>
                <button>
                    <img src='./editar.svg' alt='editar' />
                    EDITAR
                </button>
            </div>
        </div>
    )
}

export default Card