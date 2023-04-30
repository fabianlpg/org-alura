import "./MiHeader.css";

const MiHeader = (props) => {
    return <section className="headerSection">
        <h3 className="titulo">Header</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarHeader} />
    </section>
}

export default MiHeader;