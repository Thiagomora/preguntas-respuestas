import { BrowserRouter, Route, Routes} from "react-router-dom"
import { Home } from "./componentes/Home"
import { Quiz } from "./componentes/Quiz"
import { Results } from "./componentes/Results"
import  QuestionFutbol from "/src/componentes/questions/QuestionFutbol"
import QuestionHistoria from "/src/componentes/questions/QuestionHistoria"
import QuestionGeografia from "/src/componentes/questions/QuestionGeografia"
import QuestionCine from "/src/componentes/questions/QuestionCine"


export function App () {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/quiz/futbol" element={<Quiz questions={QuestionFutbol}/>}/>
                <Route path="/quiz/historia" element={<Quiz questions={QuestionHistoria}/>}/>
                <Route path="/quiz/geografia" element={<Quiz questions={QuestionGeografia}/>}/>
                <Route path="/quiz/historia" element={<Quiz questions={QuestionCine}/>}/>
                <Route path="/result" element={<Results/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}