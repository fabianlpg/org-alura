import "./BotonReset.css";

const BotonReset = (props) => {
    return <button className="boton_Reset" type="reset" onClick={props.clearInputs}>{props.children}</button>
}

export default BotonReset;