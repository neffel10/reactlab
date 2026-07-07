import { Field, Form, Formik, ErrorMessage } from "formik";

function AppForm(){
    return(
        <Formik 
        initialValues={{message:"Hola, te contacto por..."}}
        // BUSCA ESTA SECCIÓN EN EL EJERCICIO 7 Y REEMPLÁZALA:
validate={values => {
  let errors = {};

  // Validación del Nombre
  if (!values.name) {
    errors.name = 'Este campo es requerido';
  }

  // Validación del Correo
  if (!values.email) {
    errors.email = 'Este campo es requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'El correo no está en el formato correcto';
  }

  return errors;
}}
            onSubmit={
                (values,{setSubmitting})=>{
                    console.log(values);
                }
            }

        >
            {
            ({ isSubmitting, values})=>(
                <form>
                    <div>
                        <label htmlFor="name">Nombre: </label>
                        <Field type="text" name="name"></Field>
                        <ErrorMessage name="name" component="p"/>
                    </div>

                     <div>
                        <label htmlFor="email">Correo: </label>
                        <Field type="email" name="email"></Field>
                        <ErrorMessage name="email" component="p"/>

                    </div>

                    <div>
                        <label htmlFor="message">Mensaje: </label>
                        <Field component="textarea" value={values.message} name="message"></Field>
                    </div>
                    <button class="btn" type="submit" disabled={isSubmitting}>Enviar Mensaje</button>
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </form>
            )
            }
        </Formik>
    )
}

export default AppForm;