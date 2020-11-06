
import { LayoutPage } from "../layout/Layoutpage";
import { prodottiServices } from "../services/prodotti.service";
const { useState, useEffect } = require("react");
const { AggiungiprodottoComponent } = require("../components/AggiungiprodottoComponent");
const { history } = require("../utils/history");

function Aggiungiprodottipage() {
   
    useEffect(()=>{
        
      if(!JSON.parse(localStorage.getItem('utenteloggato'))?.success)
   
        history.push('/login')
        
      }, []);

  const [prodottoState, setprodottoState]= useState({id:"",titolo:"", prezzo:""})
  const [listaProdotti, setlistaProdotti]= useState("")
    
  const onChange=(e)=>{

    setprodottoState({...prodottoState, [e.target.name]:e.target.value})
  }

    const pulisciInput=()=>{
        setprodottoState({titolo:" ", prezzo:" "})
        
    }

     

    const aggiungiProdotto=()=>{
       
      prodottiServices.aggiungiProdotto({titolo:prodottoState.titolo, prezzo:prodottoState.prezzo}).then((response) => {
      setlistaProdotti(response)      
      pulisciInput()
     
     }); 
      
    }

    return(

        <>
        <AggiungiprodottoComponent prodottoState={prodottoState} onChange={onChange} aggiungiProdotto={aggiungiProdotto}> </AggiungiprodottoComponent>
        </>    
    )

    }
    const LayoutLogin = LayoutPage(Aggiungiprodottipage);
    export {LayoutLogin as Aggiungiprodottipage}