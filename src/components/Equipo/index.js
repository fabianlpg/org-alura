import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    const { colorPrimario, titulo, id } = props.datos

    const { colaboradores, eliminarColaborador, actualizarColor, likeColaborador } = props

    const colorBorder = { borderColor: colorPrimario }
    const color = { backgroundColor: hexToRgba(colorPrimario, 0.6) }

    return <>
        {colaboradores.length > 0 &&
            <section className="equipo" style={color}>
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(e) => {
                        actualizarColor(e.target.value, id)
                    }}

                />
                <h3 style={colorBorder}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            key={index}
                            datos={colaborador}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            likeColaborador={likeColaborador}
                        />)

                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;