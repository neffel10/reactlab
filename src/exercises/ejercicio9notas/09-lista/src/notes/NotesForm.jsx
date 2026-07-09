import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

function NotesForm(){
    const {add} = useContext(NotesContext);
    return(
        <Formik className="items-center align-center justify-center"
        initialValues={{title:"", body:""}}
        validate={values => {
  let errors = {};
  if (!values.title) {
    errors.title = 'The title is required';
  }
  if (!values.message) {
    errors.message = 'The message is required';
  }
  return errors;
}}
    
        onSubmit={
            (values, {setSubmitting})=>{
                add(values.title, values.message);
                setSubmitting(false);
                values.title ="";
                values.message ="";
            }
        }

        >

            {
            ({isSubmitting})=>(
                <Form className="form items-center align-center justify-center">
                    <div>
                        <label htmlFor="title">Title</label>
                        <Field type="text" name="title"/>
                        <ErrorMessage className="pb-2 text-red-500" name="title" component="p"/>
                    </div>
                    <div>
                        <label htmlFor="message">What do you want to save</label>
                        <Field as="textarea" name="message"/>
                        <ErrorMessage className="pb-2 text-red-500"name="message" component="p"/>
                    </div>
                    <button className="btn" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Saving your note..." : "Save Note"}
                    </button>
                </Form>
            )   
            }

        </Formik>        
    )
}

export default NotesForm;