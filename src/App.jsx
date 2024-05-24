import { Boton } from "./componentes/Boton"

export function App () {
    const ButtonsText =  ["Peliculas", "Mundo", "Futbol","Historia Argentina"]

    return (
        <>
        <div className="app-container">
            <h1>Juego de preguntas </h1>
        </div>
        <div>
            <Boton texts={ButtonsText}/>
        </div>
        </>
    )
}