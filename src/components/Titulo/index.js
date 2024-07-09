import './Titulo.css'

const Titulo = ({ background,children }) => {
    return (
        <div className='titulo' style={{backgroundColor:background}}>
            {children}
        </div>
    )
}

export default Titulo