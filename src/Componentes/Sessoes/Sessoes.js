import { useParams } from "react-router-dom"
import axios from 'axios';
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react';
import Info from "../Info/Info";
import "./estilos.css"

export default function Sessoes (props) {
   const {filmeId} = useParams()    
   console.log(props);
   const [sessoes, setSessoes] = useState ([]);
   
   useEffect( ()=> {
       const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`);
       promise.then(resposta => {
           setSessoes(resposta.data.days);
           console.log(resposta.data.days)}
       
       );}, [])
       
   return (
       <>
       <Info>Selecione a sessão</Info>

       <div className="sessoes">
       {sessoes.map(item =>          
       <div className="secao"> 
       <p className="dois">{item.weekday} - {item.date}</p>        
       <div className="horarios">
           {item.showtimes.map(aux => 
           <Link to={`/sessao/${aux.id}`}>
           <div className="horario">
           <p className="tres">{aux.name}</p>
           </div> </Link> )}
           </div>
           </div> )} 
       </div>
       
       </>

      
   )
}