import { useParams } from "react-router-dom"
import axios from 'axios';
import {useState, useEffect} from 'react';
import Info from "../Info/Info";

import "./estilos.css"

export default function Assentos () {
    const {sessaoId} = useParams()    
    
    const [assentos, setAssentos] = useState ([]);
    const [info, setInfo] = useState ([]);
    
    
    useEffect( ()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessaoId}/seats`);
        promise.then(resposta => {setAssentos(resposta.data.seats)});
        promise.catch(erro => { alert("Deu ruim!") } );
        }, [])   
    
    
    const listaSeats = assentos.map(seat => 
    <div className="assento">
    <span>{seat.name}</span>
    </div>);
    
    return (
            <>            
            <Info>Selecione o(s) assento(s)</Info>
            <div className="todos-assentos">
             {listaSeats}   
            </div> 
            <div className="legenda">
                <div className="parte">
                <div className="assento selecionado"></div>
                <span>Selecionado</span>
                </div>
                <div className="parte">
                <div className="assento"></div>
                <span>Disponível</span>
                </div>
                <div className="parte">
                <div className="assento indisponivel"></div>
                <span>Indisponível</span>
                </div>
                </div>
              
            </>
        )
 }