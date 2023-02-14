import {Link} from "react-router-dom";


export function Header(){
    return(
        <header>
            <Link to="/">Home</Link>
            <Link to="/Contato">Contato</Link>
            <Link to="/Sobre">Sobre</Link>
            <Link to="/Perfil/1">Perfil</Link>
        </header>
    )
}