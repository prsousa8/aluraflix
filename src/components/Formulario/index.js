import CampoInput from "../CampoInput"
import './Formulario.css'
const Formulario = () => {
    return (
        <section className="formulario">
            <form action="" method="POST">
                <CampoInput label="Titulo" placeholder="Informe o título" />
                <CampoInput label="Imagem" placeholder="Informe o link da imagem"/>
                <CampoInput label="Vídeo" placeholder="Informe o link do vídeo"/>
            </form>
        </section>
    )
}

export default Formulario