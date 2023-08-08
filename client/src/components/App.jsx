import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import CrearPractica from './CrearPractica'
import MostrarPracticas from './MostrarPracticas';

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/crearPractica' element={ <CrearPractica /> } />
        <Route path='/' element={ <MostrarPracticas /> } />
      </Routes>
    </>
  )
}

export default Main