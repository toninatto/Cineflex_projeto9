import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from "./Topo/Topo";
import Filmes from "./Filme/Filmes";
import Sessoes from "./Sessoes/Sessoes";

export default function App () {
    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<Filmes/>}/>
                <Route path="/filme/:filmeId" element={<Sessoes/>}/>

            </Routes>

        
        </BrowserRouter>
    )
}
