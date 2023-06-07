import React from 'react';
import { Link,Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { SignupSchema } from '../../schemas/schema';
import styles from './Signup.module.css';
import '../../style.css';
import smile from '../../smile.svg';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';


const onSubmit = async (values) => {
    try {
        // Send request to the server to validate email address uniqueness
        const response = await axios.post('http://35.242.202.126/api/register/email/', { email: values.email });

        if (response.data.exists) {
            // Show modal/error message if email address is already registered
            <p>Email address is already registered. Please enter another email.</p>;
        } else {
            // Send confirmation email and redirect to additional information page
            await axios.post('/api/send-confirmation-email', { email: values.email });
            <p>На вашу почту " {values.email}" было отправлено письмо</p>;
            // Redirect to additional information page
            // replace '/additional-info' with the appropriate route
            // history.push('/additional-info');
        }
    } catch (error) {
        console.log(error);
    }
};

const Signup = () => {
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: SignupSchema,
        onSubmit,
    });

    return (
        <div className={styles.Signup}>

            <form onSubmit={handleSubmit} className='Signin_container'>
                <Link to="/" >
                    <button className={styles.arrow_left}>
                        <ArrowLongLeftIcon
                            width={24}
                            height={24}
                        />
                    </button>
                </Link>

                <img className={styles.Signup_logo} src={smile} alt="smile" />
                <h1 className={styles.Signup_header}>Регистрация</h1>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email ? 'Signin_input_error' : 'Signin_input'}
                        placeholder='Электронная почта'
                    />
                    {touched.email && errors.email && <div className='Signin_input_error_text'>{errors.email}</div>}
                </div>
                <button
                    disabled={isSubmitting}
                    type="submit"
                    className='Signin_btn'>Далее</button>
            </form>
        </div >
    );
};

export default Signup;
