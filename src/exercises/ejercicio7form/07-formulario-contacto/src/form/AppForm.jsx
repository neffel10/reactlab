import { Field, Form, Formik, ErrorMessage } from "formik";

function AppForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "Hello, I'm contacting you because..." }}
      validate={values => {
        let errors = {};

        // Validación del Nombre
        if (!values.name) {
          errors.name = 'This field is required';
        }

        // Validación del Correo
        if (!values.email) {
          errors.email = 'This field is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'The email address is invalid';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        
        // Simulación de petición asíncrona (ej. API) antes de apagar el estado de carga
        setTimeout(() => {
          setSubmitting(false);
        }, 2000);
      }}
    >
      {({ isSubmitting }) => (
        // CAMBIO: Usamos <Form> de Formik en lugar de <form> nativo de HTML
        <Form>
          <div>
            <label htmlFor="name">Name: </label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="p" />
          </div>

          <div>
            <label htmlFor="email">Email: </label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="p" />
          </div>

          <div>
            <label htmlFor="message">Message: </label>
            {/* REMOVIDO: Quité el 'value={values.message}' ya que Field se encarga de eso internamente */}
            <Field component="textarea" name="message" />
          </div>

          {/* FIX: El condicional ahora vive DENTRO del botón reemplazando el texto estático */}
          <button className="btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default AppForm;