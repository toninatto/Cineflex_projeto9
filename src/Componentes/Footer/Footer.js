import "./estilos.css"

export default function Footer ({poster, title}) {

    
        return (
         <footer>
            <div className="foot-frame"><img src={poster} alt={title} /></div>
            <span>{title}</span>
            
            </footer> ) 
    
    
} 