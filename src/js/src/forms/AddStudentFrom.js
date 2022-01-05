
import React, { Component } from "react";
import { Formik } from "formik";
import { Input, Button, tag, Tag } from 'antd';
const InputBottomMargin = { marginBottom: '5px' };
const tagStyle = { backgroundColor: '#f50', 'color': 'white', ...InputBottomMargin };
class AddStudentForm extends Component {

    render() {
        return (


            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', gender: '' }}
                validate={values => {
                    const errors = {};

                    if (!values.firstName) {
                        errors.firstName = 'First Name Required';
                    }
                    if (!values.lastName) {
                        errors.lastName = 'Last Name Required';
                    }


                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.gender) {
                        errors.gender = 'Gender Required';
                    } else if (!['MALE', 'male', 'FEMALE', 'female'].includes(values.gender)) {
                        errors.gender = 'Gender must be (MALE,male,FEMALE,female';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Input
                            style={InputBottomMargin}
                            name="firstName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            placeholder="First Name. E.g John"
                        />
                        {errors.firstName && touched.firstName && <Tag style={tagStyle}>{errors.firstName}</Tag>}
                        <Input
                            style={InputBottomMargin}
                            name="lastName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            placeholder="Last Name. E.g Carter"
                        />
                        {errors.lastName && touched.lastName && <Tag style={tagStyle}>{errors.lastName}</Tag>}
                        <Input
                            style={InputBottomMargin}
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="E.g john@email.com"
                        />
                        {errors.email && touched.email && <Tag style={tagStyle}>{errors.email}</Tag>}
                        <Input
                            style={InputBottomMargin}
                            name="gender"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.gender}
                            placeholder="E.g Male or Female"
                        />
                        {errors.gender && touched.gender && <Tag style={tagStyle}>{errors.gender}</Tag>}

                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </form>
                )}
            </Formik>



        )

    }

}

export default AddStudentForm;