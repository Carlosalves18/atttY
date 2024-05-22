import { Link } from "react-router-dom"
import {Nav} from './header'

const Header = () =>{
    return(
        <Nav>
           <Link to = '/'>Home</Link>
           <span>|</span>
           <Link to = 'sobre'>Sobre</Link>
           <span>|</span>
           <Link to ='contato'>Contato</Link>
        </Nav>
    )
}
export default Header;