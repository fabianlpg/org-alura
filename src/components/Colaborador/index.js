import "./Colaborador.css";
import { AiFillDelete } from "react-icons/ai"
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";

const Colaborador = (props) => {

    const { nombre, puesto, foto, url, id, fav } = props.datos
    const { eliminarColaborador, likeColaborador } = props
    const colorPrimario = { backgroundColor: props.colorPrimario }

    return <div className="colaborador" >
        <AiFillDelete
            onClick={() => eliminarColaborador(id)}
            className="elimnar"
        />
        <div className="encabezado" style={colorPrimario}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={foto} alt={nombre} />
            </a>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ?
                <BsBookmarkHeartFill
                    onClick={() => likeColaborador(id)}
                    className="fav"
                /> :
                <BsBookmarkHeart
                    onClick={() => likeColaborador(id)}
                    className="no-fav"
                />
            }
        </div>
    </div>
}

export default Colaborador;