import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";
import { v4 as uuid } from 'uuid';
import { NotificationManager } from 'react-notifications';

const Formulario = (props) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [url, setUrl] = useState("")
    const [equipo, setEquipo] = useState("")
    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("#6278F7")

    const { registrarColaborador, newTeam, equipos } = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        let colaborador = {
            //se puede dejar como -> nombre: nombre, ó solo nombre, puesto, foto
            nombre,
            puesto,
            foto,
            url,
            equipo,
            id: uuid(),
            fav: true
        }
        registrarColaborador(colaborador)
        NotificationManager.success('Colaborador registrado con éxito.', '¡Success!', 3000);
        setEquipo("");
    }

    const manejarNUevoEnvio2 = (e) => {
        e.preventDefault();
        if (equipos.includes(titulo)) {
            NotificationManager.error('Nombre de equipo no disponible, intenta con uno nuevo.', '¡Error!', 4000);
        } else {
            newTeam({ titulo, colorPrimario: color })
            NotificationManager.success('Equipo creado con éxito.', '¡Success!', 3000);
            setTitulo("")
            setColor(color)
        }
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio} >
            <h2>Rellena el formulario para registrar el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                value={nombre}
                updateValue={setNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                value={puesto}
                updateValue={setPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                value={foto}
                updateValue={setFoto}
            />
            <Campo
                titulo="Enlace GitHub"
                placeholder="Ingresar enlace de tu github"
                required
                value={url}
                updateValue={setUrl}
            />
            <ListaOpciones
                required
                value={equipo}
                updateEquipo={setEquipo}
                equipos={props.equipos}
            />
            <div className="botones">
                <Boton>
                    Registrar
                </Boton>
            </div>
        </form>
        <form onSubmit={manejarNUevoEnvio2}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                value={titulo}
                updateValue={setTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color en HEX"
                value={color}
                updateValue={setColor}
                type="color"
            />
            <div className="botones">
                <Boton>
                    Crear
                </Boton>
            </div>
        </form>
    </section>
};

export default Formulario;