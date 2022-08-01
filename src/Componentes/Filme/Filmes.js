import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import Info from '../Info/Info';
import "./estilos.css";

export default function Filmes () {

    const [filmes, setFilmes] = useState ([]);
    
    useEffect( ()=> {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        promise.then(resposta => {setFilmes(resposta.data);}
        );}, [])
        
    return (
        <>
        <Info>Selecione o filme</Info>
        <div className="caixa-filmes">
            
			{filmes.map(item => 
            <Link to={`/filme/${item.id}`}>
            <div className="filme"> 
            <img src={item.posterURL} alt="" /> 
            </div>  
            </Link>)}
		</div>
        </>
    )
}