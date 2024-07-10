import './CampoInput.css'

const CampoInput = ({label,placeholder}) => {
    return (
        <fieldset className='campoInput'>
            <label>{label}</label>
            <input type='text' placeholder={placeholder}/>
        </fieldset>
    )
}

export default CampoInput