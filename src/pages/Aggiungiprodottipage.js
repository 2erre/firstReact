import { LayoutPage } from "../layout/Layoutpage";

const { useState, useEffect } = require("react");
const { AggiungiprodottoComponent } = require("../components/AggiungiprodottoComponent");
const { prodottiServices } = require("../services/prodotti.service");
const { history } = require("../utils/history");

function Aggiungiprodottipage() {

    
    useEffect(()=>{
      
  
      if(!JSON.parse(localStorage.getItem('utenteloggato'))?.success)
   
        history.push('/login')
        
  
      }, []);

  //const [edit,setEdit]=useState("");
  const [id,setId]=useState("");
  const [titolo,setTitolo]=useState("");
  const [prezzo,setPrezzo]=useState(""); 
  const [listaProdotti,setListaProdotti]=useState("");
  const [state, setState]= useState({titolo:"", prezzo:""})
    
    const onChange=(e)=>{

      setState({...state, [e.target.name]:e.target.value})
    }

    const pulisciInput=()=>{
        setTitolo("")
        setPrezzo("")
    }

    const aggiungiProdotto=()=>{
        var id=Math.floor(Math.random()*1000)
        var nuovoProdotto={id:id, titolo:titolo , prezzo:prezzo}
        setListaProdotti([...listaProdotti,nuovoProdotto])
        pulisciInput()
    
      }


    return(

        <>
        <AggiungiprodottoComponent state={state} onChange={onChange} aggiungiProdotto={aggiungiProdotto}> </AggiungiprodottoComponent>
        </>
    
    )

    

    }

    const LayoutLogin = LayoutPage(Aggiungiprodottipage);
    export {LayoutLogin as Aggiungiprodottipage}