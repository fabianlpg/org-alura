import "./BotonReset.css";

const BotonReset2 = (props) => {
    return <button className="boton_Reset" type="reset" onClick={props.clearInputs2}>{props.children}</button>
}

export default BotonReset2;