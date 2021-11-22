import React, {useState} from 'react'
import './index.css'
import {toast} from 'react-toastify'
import { BsFillQuestionCircleFill } from "react-icons/bs";
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
const PaymentForm = () => {
    const [name,setName] = useState('')
    const [account,setAccount] = useState('')
    const [amount,setAmount] = useState(0)
    const notify=()=>{
        toast.info('Hello Human!',{position:toast.POSITION.BOTTOM_CENTER,autoClose:10000})
    }
    return (
        <div id ='Container'>
        <h1 id='h'>Fund transfer</h1>
        <form id='paymentForm' onSubmit="#">  
            <div>
                <table>
            <tr>
            <div>
                <td><h4>Name of receiver</h4></td>
                <td><input type='text' value={name} name='Name' onChange={({target})=>
                setName(target.value)
            }></input></td>
            </div>
            </tr>
            <tr>
            <div>
                <td><h4>Account number</h4></td>
                <td><input type='text' value={account} name='Account' onChange={({target})=>
                setAccount(target.value)
            }></input></td>
            </div>
            </tr>
            <tr>
            <div>
                <td><h4>Name of receiver</h4></td>
                <td><input type='text' value={amount} name='Number' onChange={({target})=>
                setAmount(target.value)
            }></input></td>
            </div>
            </tr>
            </table>
            </div>
            <div className='clickServ'>
            <i className='icon'><BsFillQuestionCircleFill onClick={notify}></BsFillQuestionCircleFill></i>
            <button id='btn' type="submit">Send</button>
            </div>
        </form>
        
        </div>
    )
}

export default PaymentForm
