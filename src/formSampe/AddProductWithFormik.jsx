import { Field, Form, Formik } from 'formik'
import React from 'react'

function AddProductWithFormik() {



    return (<>

        <Formik
            initialValues={{
                name: '',
                unitPrice: 0,
                unitsInStock: 0
            }}
            onSubmit={(values) => {
                console.log('VALUES', values);
            }}
        >
            <Form>
                <div>
                    <label>Name: </label>
                    <Field name='name' />
                </div>

                <div>
                    <label>Unit Price: </label>
                    <Field  name='unitPrice' />
                </div>

                <div>
                    <label>Units In Stock: </label>
                    <Field  name='unitsInStock' />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </Form>


        </Formik>

    </>)
}

export default AddProductWithFormik