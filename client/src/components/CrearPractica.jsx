import { Formik, Form, Field } from "formik"
import axios from "axios"
import mongoose from "mongoose"

const CrearPractica = () => {
  const handleSubmit = async (values) => {
    console.log(values)

    try {
      const response = await axios.post(
        "http://localhost:3000/api/diego",
        values
      )

      if (response.status === 201) {
        console.log("Solicitud Post exitosa")
        alert('Practica creada!')
        // Realiza acciones adicionales en caso de éxito
      } else {
        console.error("Error en la solicitud Post", response.statusText)
        alert('Error!!!')
      }
    } catch (error) {
      console.error("Error al realizar la solicitud Post:", error)
      alert('Error!!!')
    }
  }

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='col-lg-6 my-form-container'>
        <h1>Crea una práctica</h1> {/* Aplica el estilo personalizado */}
        <Formik
          initialValues={{
            _idRecursos: new mongoose.Types.ObjectId(),
            _idComuna: new mongoose.Types.ObjectId(),
            _idTipoPract: new mongoose.Types.ObjectId(),
            _idRetroaliment: new mongoose.Types.ObjectId(),
            nombre: "",
            numCuadrilla: "",
            descripcion: "",
            ejercicios: "",
            estado: "",
            fecha: "",
            hora: "",
            fechaHoraCreac: "22-06-2021 12:00:00",
          }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className='form-group'>
                <label htmlFor='nombre'>Nombre</label>
                <Field type='text' name='nombre' className='form-control' />
              </div>
              <div className='form-group'>
                <label htmlFor='numCuadrilla'>Número de Cuadrilla</label>
                <Field
                  type='text'
                  name='numCuadrilla'
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='descripcion'>Descripción</label>
                <Field
                  type='text'
                  name='descripcion'
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='ejercicios'>Ejercicios</label>
                <Field type='text' name='ejercicios' className='form-control' />
              </div>
              <div className='form-group'>
                <label htmlFor='estado'>Estado</label>
                <Field type='text' name='estado' className='form-control' />
              </div>
              <div className='form-group'>
                <label htmlFor='fecha'>Fecha</label>
                <Field type='date' name='fecha' className='form-control' />
              </div>
              <div className='form-group'>
                <label htmlFor='hora'>Hora</label>
                <Field type='text' name='hora' className='form-control' />
              </div>
              <button type='submit' className='btn btn-primary mt-3'>
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default CrearPractica
