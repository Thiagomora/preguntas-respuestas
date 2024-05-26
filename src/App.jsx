import { BrowserRouter, Route, Routes} from "react-router-dom"
import { Home } from "./componentes/Home"
import { QuizFutbol } from "./componentes/QuizFutbol"
import { Results } from "./componentes/Results"
export function App () {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/quiz" element={<QuizFutbol/>}/>
                <Route path="/result" element={<Results/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}