
import { BrowserRouter, Routes , Route,} from "react-router-dom"
import Home from "../Home/Home"
import Sobre from "../Sobre/Sobre"
import Header from "../Header/Header"
import Contato from "../Contato/Contato"
import Rodape from "../Rodape/Rodape"


// BroserRouter deve ser o componente pai que envolve tudo que depende do React-Router.
// Routes define a área em que vamos colocar os nossos Route.
// O Route recebe um caminho em Path, se esse caminho for o mesmo da URL ele irá renderizar o componente que estiver dentro do Element={}

const App = ()=>{
return(
    <BrowserRouter>
    <Header/>
             <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/sobre" element={<Sobre/>}/>
                  <Route path="/contato" element={<Contato/>}/>
             </Routes>
    <Rodape/>
    </BrowserRouter>

)
}
export default App;