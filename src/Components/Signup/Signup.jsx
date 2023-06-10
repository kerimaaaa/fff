import React, {useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { SignupSchema } from '../../schemas/schema';
import styles from './Signup.module.css';
import '../../style.css';
import smile from '../../smile.svg';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';
import { getApi } from '../API/api';





const Signup = () => {
    const [openModal, setOpenModal] = useState(false)
    
    const onSubmit = (data) => {
        getApi.registerEmail(data.email).then(() => {
        console.log(data.email)})
    }
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: SignupSchema,
        onSubmit,
    });
    
    
  

    return (
        <div className={styles.Signup}>

            <form onSubmit={handleSubmit} className='Signin_container '>
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
                    className='Signin_btn'
                    onClick={() => {setOpenModal(true)}}
                    >Далее</button>
                 
            </form>
            {openModal && <ConfirmationPage closeModal={setOpenModal} />}   
        </div >
    );
};

export default Signup;

