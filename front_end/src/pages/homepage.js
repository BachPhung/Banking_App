import React from 'react'
import NavHome from '../components/NavHome'
import PaymentForm from '../components/Payment'
import HistoryForm from '../components/History'
import DetailForm from '../components/Detail'
import LoanForm from '../components/Loan'
import { stateStorage } from '../App'
const HomePage = () => {
    switch(stateStorage.getState()){
        case 1:{
            return (
                <div>
                    <NavHome></NavHome>
                    <PaymentForm></PaymentForm>
                </div>
            )
        }
        case 2:{
            return(
                <div>
                    <NavHome></NavHome>
                    <HistoryForm></HistoryForm>
                </div>
            )
        }
        case 3:{
            return(
                <div>
                    <NavHome></NavHome>
                    <DetailForm></DetailForm>
                </div>
            )
        }
        case 4:{
            return(
                <div>
                    <NavHome></NavHome>
                    <LoanForm></LoanForm>
                </div>
            )
        }
        default:{
            return(
                <h1>Fail to render page</h1>
            )
        }
    }
    
}

export default HomePage
