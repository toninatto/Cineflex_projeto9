import "./estilos.css";

export default function Info (props) {

    return (
        <div className="info">
            <p>{props.children}</p>
        </div>
    )
}