import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import CrearPractica from './CrearPractica'

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/crearPractica' element={ <CrearPractica /> } />
      </Routes>
    </>
  )
}

export default Main