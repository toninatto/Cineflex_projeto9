import { useParams } from "react-router-dom"
import axios from 'axios';
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react';
import Info from "../Info/Info";
import Footer from "../Footer/Footer";
import "./estilos.css"

export default function Sessoes () {
   const {filmeId} = useParams()
   
   const [sessoes, setSessoes] = useState ([]);
   const [filme, setFilme] =useState ([])
   
   useEffect( ()=> {
       const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${filmeId}/showtimes`);
       promise.then(resposta => { setSessoes(resposta.data.days) } );
       promise.catch(erro => { alert("Deu ruim!") } );
       }, [])

    useEffect( ()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${filmeId}/showtimes`);
        promise.then(resposta => { setFilme(resposta.data) } );
        promise.catch(erro => { alert("Deu ruim!") } );
        }, [])

       console.log(sessoes);
       console.log(filme);

       const listaSessoes = sessoes.map(item =>          
        <div className="secao"> 
        <p className="dois">{item.weekday} - {item.date}</p>        
        <div className="horarios">
            {item.showtimes.map(aux => 
            <Link to={`/sessao/${aux.id}`}>
            <div className="horario">
            <p className="tres">{aux.name}</p>
            </div> </Link> )}
            </div>
            </div> )          
   return (
       <>
       <Info>Selecione a sessão</Info>

       <div className="sessoes">
       {listaSessoes} 
       </div>   

       <Footer poster={filme.posterURL} title={filme.title}/>                  
       </>      
   )
}