import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Sobre} from './pages/Sobre';
import {Contato} from './pages/Contato';
import {Header} from './componentes/Header';
import { Perfil } from './pages/Perfil';

function App() {
  return(
 
  <div className="App">

    <Router>
      <Header />
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/contato' element={<Contato/>} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path="/perfil/:id" element = {<Perfil/>} />

      </Routes>

    </Router>

  </div>
)
 
}

export default App
