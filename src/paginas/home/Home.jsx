import './home.css'
const Boton = ({text}) => {
    return (
        <article>
            <button>{text}</button>
        </article>
    )
}
export function Home () {
    return(
        <>
        <div>
            <img src="/src/paginas/home/mundo.png" alt="mundo" className="esquina top-left"/>
            <img src="/src/paginas/home/futbol.png" alt="futbol" className="esquina top-right"/>
            <img src="/src/paginas/home/pelicula.png" alt="pelicula" className="esquina bottom-left"/>
        </div>
        <Boton text="Preguntas Sobre Futbol"/>
        <Boton text="Preguntas Sobre Historia"/>
        <Boton text="Preguntas Sobre Cine"/>
        <Boton text="Preguntas Sobre Argentina"/>
        </>

    )
}