import { useState,useEffect } from "react";
import usersSerivce from '../../services/users'

const useForm = (callback,validate)=>{
    const [values,setValues] = useState({
        email:'',
        name:'',
        password:'',
        password2:'',
    })
    const [errors, setErrors] = useState({});
    const [err,setErr]=useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const setErrMess=(a)=>{setErr(a)}
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors(validate(values));
    if(Object.keys(errors).length ===0) { 
     usersSerivce.signup({email:values.email,name:values.name,passwordHash:values.password}).then(res=>{setErrMess('3')})
      .catch((error)=> { console.log("error to create account:",error.message); 
            console.log("err ",err);
            setErrMess('1')
      })
    }
  };

  const handleSubmitLogin = async e =>{
    e.preventDefault()
    setErrors(validate(values));
     const user = usersSerivce.login({email:values.email,password:values.password})
                  .catch(error=>{console.log('error: ',error);})
     window.localStorage.setItem('loggedAppUser',JSON.stringify(user))
     
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
        setValues({
        email:'',
        name:'',
        password:'',
        password2:'',
        })
      }
      if(err==3){
        setErrMess('')
        setIsSubmitting(true)
      }
    },
    [errors,err]
  );
    return {handleChange,values, handleSubmit,errors}
}

export default useForm;