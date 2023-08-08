import { Formik, Form, Field } from "formik"
import { useEffect } from "react"

const CrearPractica = () => {
  const handleSubmit = (values) => {

    console.log(values)

    fetch('http://localhost:3000/api/diego', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: values
    })
  }

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='col-lg-6 my-form-container'>
        <h1>Crea una práctica</h1>
        {" "}
        {/* Aplica el estilo personalizado */}
        <Formik
          initialValues={{
            nombre: "",
            numCuadrilla: "",
            descripcion: "",
            ejercicios: "",
            estado: "",
            fecha: "",
            hora: ""
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
