import { useNavigate } from "react-router-dom";
import "../styles/boton.css"
export function Home () {
    const navigate = useNavigate();

    const handleQuizSelection = (route) =>{
        navigate('/quiz/'+route)
    }



    return (
        <>
        <div className="home-container">
            <h1>Seleccione el tema</h1>
            <button onClick={()=> handleQuizSelection('futbol')}>Futbol</button>
            <button onClick={()=> handleQuizSelection('historia')}>Historia Argentina</button>
            <button onClick={()=> handleQuizSelection('geografia')}>Geografia</button>
            <button onClick={()=> handleQuizSelection('cine')}>cine</button>
        </div>
        </>
    )
}