import "./Boton.css";

const Boton = (props) => {
    return <button className="boton" type="submit">{props.children}</button>
}

export default Boton;