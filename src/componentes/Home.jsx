import { useNavigate } from "react-router-dom";
import "../styles/home.css"
export function Home () {
    const navigate = useNavigate();

    const handleQuizSelection = (route) =>{
        navigate('/quiz/'+route)
    }



    return (
        <>
        <div className="home-container">
            <div className="home-wrapper">
                <div className="home-text">
                <h1>Seleccione el tema</h1>
                </div>
                <div className="home-options">
                    <button className="option-button" onClick={()=> handleQuizSelection('futbol')}>Futbol</button>
                    <button className="option-button" onClick={()=> handleQuizSelection('historia')}>Historia Argentina</button>
                    <button className="option-button" onClick={()=> handleQuizSelection('geografia')}>Geografia</button>
                    <button className="option-button" onClick={()=> handleQuizSelection('cine')}>cine</button>
                </div>
            </div>
        </div>
        </>
    )
}