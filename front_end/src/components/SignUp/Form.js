import React,{useState} from 'react'
import './Form.css'
import SignUp from './index'
import FormSuccess from './FormSuccess'
import Video from '../../videos/signup.mp4'
import userService from '../../services/users'
import useForm from './useForm'
const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const submitForm = async()=>{
        setIsSubmitted(true);
        
    }
    return (
        <div className='containerForm'>
        <div className='form-container'>
        <span className='close-btn'><a id='close-btn' href='http://localhost:3000'>×</a></span>
        <div className='form-content-left'>
          {/*<img className='form-img' src='img/img-2.svg' alt='spaceship' />*/}
          <video id='videoSignForm' autoPlay loop muted src={Video}></video>
        </div>
        {!isSubmitted ? (
          <SignUp submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
      </div>
    )
}

export default Form
