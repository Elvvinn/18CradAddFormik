import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


function AddPage() {
    return (
        <>

            <Formik
                initialValues={{ description: '', }}
                validationSchema={Yup.object({
                    description: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),

                })}
                onSubmit={(values) => {
                    console.log(values)

                    axios.post("https://northwind.vercel.app/api/categories", values)
                }}
            >
                <Form>
                    <label htmlFor="description">First Name</label>
                    <Field name="description" type="text" />
                    <ErrorMessage name="description" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

        </>
    )
}

export default AddPage