import { Link } from "react-router-dom";
import "../styles/boton.css"
export function Home () {
    return (
        <>
        <div>
            <h1>Bienvenido al preguntas y respuestas!</h1>
        </div>
        <div>
            <Link to="/quiz">
                <button>Ingresar</button>
            </Link>
        </div>
        </>
    )
}