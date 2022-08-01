import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from "./Topo/Topo";
import Filmes from "./Filme/Filmes";
import Sessoes from "./Sessoes/Sessoes";
import Assentos from "./Assentos/Assentos";
import Sucesso from "./Sucesso/Sucesso";

export default function App () {
    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<Filmes/>}/>
                <Route path="/filme/:filmeId" element={<Sessoes/>}/>
                <Route path="/sessao/:sessaoId" element={<Assentos/>}/>
                <Route path="/sucesso" element={<Sucesso/>}/>
            </Routes>

        
        </BrowserRouter>
    )
}
