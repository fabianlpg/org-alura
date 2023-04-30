import "./MisEquipos.css";

const MisEquipos = (props) => {
    return <section className="teamSection">
        <h3 className="titulo">Equipos</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarEquipos} />
    </section>
}

export default MisEquipos;