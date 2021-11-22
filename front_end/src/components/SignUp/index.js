import React  from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import './Form.css'
const SignUp = ({submitForm}) => {
    const {handleChange, values,handleSubmit,errors} =useForm(submitForm,validate)
    return (
        <div className='form-content-right'>
          <form onSubmit={handleSubmit} className='form' noValidate>
            <h1>
              Get started with us today! Create your account by filling out the
              information below.
            </h1>
            <div className='form-inputs'>
              <label className='form-label'>Name</label>
              <input
                className='form-input'
                type='text'
                name='name'
                placeholder='Enter your name'
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
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
            <div className='form-inputs'>
              <label className='form-label'>Confirm Password</label>
              <input
                className='form-input'
                type='password'
                name='password2'
                placeholder='Confirm your password'
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className='form-input-btn' type='submit'>
              Sign up
            </button>
            <span className='form-input-login'>
               <a href='http://localhost:3000/signin'>Already have an account?</a>
            </span>
          </form>
        </div>
      );
}

export default SignUp