import useForm from '../SignUp/useForm';
import React, {useState} from 'react'
import '../SignUp/Form.css'
import validate from "../SignUp/validateInfo";
import Video from '../../videos/signup.mp4'
const SignInForm = ({submitForm}) => {
    const {errors,values,handleChange,handleSubmit} =useForm(submitForm,validate)
    return (
        <div className='form-content-right'>
          <form onSubmit={handleSubmit} className='form' noValidate>
            <h1>
              Enter your email and password to login banking system!
            </h1>
            <div className='form-inputs'>
              <label className='form-label'>Email</label>
              <input
                className='form-input'
                type='email'
                name='email'
                placeholder='Enter your email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Password</label>
              <input
                className='form-input'
                type='password'
                name='password'
                placeholder='Enter your password'
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <button className='form-input-btn' type='submit'>
              Login
            </button>
            <span className='form-input-login'>
               <a href='http://localhost:3000/signup'>Create a new account</a>
            </span>
          </form>
        </div>
      );
}
const SignIn = () => {
    const [submitted, setSubmitted] = useState(false)
    function submitForm(){
        setSubmitted(true);
    }
    return (
        <div className='containerForm'>
        <div className='form-container'>
        <span className='close-btn'><a id='close-btn' href='http://localhost:3000'>×</a></span>
        <div className='form-content-left'>
          {/*<img className='form-img' src='img/img-2.svg' alt='spaceship' />*/}
          <video id='videoSignForm' autoPlay loop muted src={Video}></video>
        </div>
           <SignInForm submitForm={submitForm}></SignInForm>
        </div>
        </div>
    )
}

export default SignIn
