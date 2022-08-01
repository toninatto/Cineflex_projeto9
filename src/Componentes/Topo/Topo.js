import { Link } from 'react-router-dom';
import "./estilos.css";

export default function Topo () {

    return (
        <div className="topo">
            <Link to={"/"}>
            <h1>CINEFLEX</h1>
            </Link>
        </div>
    )
}