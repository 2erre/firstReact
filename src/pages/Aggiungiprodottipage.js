import { LayoutPage } from "../layout/Layoutpage";

const { useState, useEffect } = require("react");
const { AggiungiprodottoComponent } = require("../components/AggiungiprodottoComponent");
const { history } = require("../utils/history");

function Aggiungiprodottipage() {

    
    useEffect(()=>{
      
  
      if(!JSON.parse(localStorage.getItem('utenteloggato'))?.success)
   
        history.push('/login')
        
  
      }, []);

  const [prodottoState, setprodottoState]= useState({id:"",titolo:"", prezzo:""})
  
    
  const onChange=(e)=>{

    setprodottoState({...prodottoState, [e.target.name]:e.target.value})
  }

    const pulisciInput=()=>{
        setprodottoState({id:"",titolo:"", prezzo:""})
        
    }

    

    const aggiungiProdotto=(prodotto=({titolo:prodottoState.titolo, prezzo:prodottoState.prezzo}))=>{
      
      console.log(prodotto.titolo)
      console.log(prodotto.prezzo)
      var id=Math.floor(Math.random()*1000)
      var nuovoProdotto={id:id, titolo:prodotto.titolo , prezzo:prodotto.prezzo}
      console.log(nuovoProdotto)
      
      pulisciInput()
 
    }


    return(

        <>
        <AggiungiprodottoComponent prodottoState={prodottoState} onChange={onChange} aggiungiProdotto={aggiungiProdotto}> </AggiungiprodottoComponent>
        </>
    
    )

    

    }

    const LayoutLogin = LayoutPage(Aggiungiprodottipage);
    export {LayoutLogin as Aggiungiprodottipage}