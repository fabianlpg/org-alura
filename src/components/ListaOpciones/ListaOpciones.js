import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const manejarCambio = (e) => {
        props.updateEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select
            value={props.value}
            onChange={manejarCambio}
            required={props.required}
        >
            <option value="" defaultValue="" hidden>
                Selecciona un equipo
            </option>
            {props.equipos.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones;