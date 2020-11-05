
import React, { useEffect, useState } from 'react'
import { carrelloActions } from '../actions/carrello.action';
import { utenteActions } from '../actions/utente.action';
import { LoginComponent } from '../components/LoginComponent';
import { useCarrello } from '../context/carrello.context';
import { useUtente } from '../context/utente.context';
import { LayoutPage } from '../layout/Layoutpage';
import { carrelloServices } from '../services/carrello.service';
import { utenteServices } from '../services/utente.service';
import { history } from '../utils/history';


function Loginpage() {
    
//utilizzo per il context
   const {utenteState, dispatch}= useUtente();
   const {carrelloState,dispatchCart}=useCarrello();

    const [state, setState]= useState({username:"", password:""})
    const [utenteLoggato, setutenteLoggato]=useState({});
    const onChange=(e)=>{

      setState({...state, [e.target.name]:e.target.value})
    }

    const loginUtente=() =>
    {

        var utente = {username:state.username, password:state.password};
        
        utenteServices.loginUtente(utente).then((response) => {

            setutenteLoggato(response);
            if(response.success){
                localStorage.setItem('utenteloggato', JSON.stringify(response))
                dispatch(utenteActions.loginAction(response));
                history.push('/')
            }else{

                setState({username:"", password:""});
                alert('Credenziali errate!!')
            }
        })

        carrelloServices.getAllProdotti().then((response) => {
            dispatchCart(carrelloActions.setCartAction(response))
         
         }); 

         


    }

return(

    <>
    <LoginComponent state={state} loginUtente={loginUtente} onChange={onChange}> </LoginComponent>
    </>

)
}

const LayoutLogin = LayoutPage(Loginpage);
export {LayoutLogin as Loginpage}
