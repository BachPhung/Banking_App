import React from 'react'
import './Form.css';
const FormSuccess = () => {
    return (
        <div className='form-content-right'>
            <div className='form-success'>Verify your account through link sent to your email!</div>
            <div alt='success-image' className='form-img-2' style={{backgroundImage: `url('img/image2vector.svg')`}} ></div>
            <div ><a className='link-to-login' href='http://localhost:3000/signin'>Back to login</a></div>
        </div>
    )
}

export default FormSuccess
