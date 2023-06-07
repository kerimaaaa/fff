import { useFormik } from "formik";
import { basicSchema } from "../../schemas/schema";
import smile from '../../smile.svg';
import '../../style.css';

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

// const onSubmit = async (values) => {
//   try {
//     // Send request to the server to create a new account with the specified data
//     await axios.post('/api/create-account', values);
//     alert('Account created successfully!');
//     // Redirect to authorization page
//     // replace '/login' with the appropriate route
//     // history.push('/login');
//   } catch (error) {
//     console.log(error);
//   }
// };

const AdditionalInfo = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="Signin">
      <div className='Signin_container' >
        <img src={smile} alt="smile" />
        <h2>Регистрация</h2>
        <div>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Имя"
            className={errors.firstName? 'Signin_input_error' : 'Signin_input'}
          />
          {touched.firstName && errors.firstName && <div className='Signin_input_error_text'>{errors.firstName}</div>}
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Фамилия"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.lastName ? 'Signin_input_error' : 'Signin_input'}
          />
          {touched.lastName && errors.lastName && <div className='Signin_input_error_text'>{errors.lastName}</div>}
        </div>

        <div>
          <input
            type="text"
            id="dateOfBirth"
            name="dateOfBirth"
            placeholder="Дата рождения"
            value={values.dateOfBirth}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.dateOfBirth ? 'Signin_input_error' : 'Signin_input'}
          />
          {touched.dateOfBirth && errors.dateOfBirth && <div className='Signin_input_error_text'>{errors.dateOfBirth}</div>}
        </div>

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
        className="Signin_btn">
          Зарегестрироваться
        </button>
      </div>
    </form>
  );
};
export default AdditionalInfo;