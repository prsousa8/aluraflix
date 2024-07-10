import Formulario from "../../components/Formulario"
import './NovoVideo.css'
const NovoVideo = () => {
    return (
        <main className="principal">
            <div>
                <h1>NOVO VÍDEO</h1>
                <h4>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</h4>
            </div>
            <Formulario />
        </main>
    )
}
export default NovoVideo