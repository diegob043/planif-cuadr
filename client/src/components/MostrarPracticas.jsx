import React, { useState, useEffect } from "react"
import axios from "axios"

const Practica = ({ practica, onDelete }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='card mb-3'>
            <div className='card-body'>
              <h5 className='card-title'>{practica.nombre}</h5>
              <p className='card-text'>{practica.descripcion}</p>
              <button
                className='btn btn-danger'
                onClick={() => onDelete(practica._id)}
              >
                Eliminar
              </button>
              <button
                className='btn btn-primary ml-2'
                onClick={() => onEdit(practica)}
              >
                Editar
              </button>
              {/* Agregar aquí más detalles de la práctica si es necesario */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MostrarPracticas = () => {
  const [practicas, setPracticas] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/diego")
      .then((response) => {
        setPracticas(response.data)
      })
      .catch((error) => {
        console.error("Error al obtener las prácticas:", error)
      })
  }, [])

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/diego/${id}`)
      .then((response) => {
        setPracticas(practicas.filter((practica) => practica._id !== id))
      })
      .catch((error) => {
        console.error("Error al eliminar la práctica:", error)
      })
  }

  return (
    <div
      className='container justify-content-center align-items-center overflow-auto mt-5 border'
      style={{ zIndex: 0 , height: 1200}}
    >
      <div className='row'>
        <div className='col'>
          <h1 className='text-center mb-4 mt-2'>Prácticas Creadas</h1>
          {practicas.map((practica) => (
            <Practica
              key={practica._id}
              practica={practica}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MostrarPracticas
