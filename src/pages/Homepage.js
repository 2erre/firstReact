
import { useEffect, useState } from 'react';
import { NavbarComponent } from '../components/Navbar';
import { HelloComponent } from '../components/HelloComponent';
import { InserisciPersonaForm } from '../components/InserisciPersonaForm';
import { LayoutPage } from '../layout/Layoutpage';
import { history } from '../utils/history';
import { useUtente } from '../context/utente.context';
import { useCarrello } from '../context/carrello.context';

function Homepage() {

  const {carrelloState}= useCarrello();
  useEffect(()=>{
    

    if(!JSON.parse(localStorage.getItem('utenteloggato'))?.success)
 
      history.push('/login')
      

    }, []);

// utilizzo per il context
   const {utenteState, dispatch}= useUtente();


  /* lista JSON */ 
  const [listaNome,setListaNome]=useState([
    {id:"1",nome: "Raffaele", cognome: "Raggi"},
    {id:"2",nome: "Simone", cognome: "Colangeli"},
    {id:"3",nome: "Mattia", cognome: "Tarquini"}

  ])

  // const [listaAnimale,setListaAnimale]=useState([
  //   {nome: "Pippo", razza: "Cane"},
  //   {nome: "Cresta", razza: "Gatto"},
  //   {nome: "Bubi", razza: "Tartaruga"}

  // ])


/* variabili di stato*/ 



  const [edit,setEdit]=useState("");
  const [id,setId]=useState("");
  const [nome,setNome]=useState("");
  const [cognome,setCognome]=useState(""); 

  const onChange=(e)=>{
    

    if(e.target.name==="nome")
    setNome(e.target.value)
    else if(e.target.name==="cognome")
    setCognome(e.target.value)

  }

  const pulisciInput=()=>{
    setNome("")
    setCognome("")
  }
/* stampa lista persone e genera id per persona creata*/ 
  const mostraPersona=()=>{
    console.log(nome)
    console.log(cognome)
    var id=Math.floor(Math.random()*1000)
    var nuovaPersona={id:id, nome:nome , cognome:cognome}
    setListaNome([...listaNome,nuovaPersona])
    pulisciInput()

  }
  
/*elimina persona da lista, ristampando solo le persone con id diverso da quello da eliminare*/ 
  const eliminaPersona=(id)=>{

    setListaNome(
    listaNome.filter(persona=>persona.id!==id)

    )

  }
/*implementazione pulsante modifica per visualizzare nome su campi di testo e impostare pulsante su modifica */ 
  const modificaPersona=(id)=>{
    
    var persona=listaNome.filter(persona=>persona.id==id)[0];
    setNome(persona.nome)
    setCognome(persona.cognome)
    setId(persona.id)
    setEdit(true)
   

  }
/* modifica persona selezionata sostituendo completamente l'oggetto persona */ 
  const updatePersona=(id)=>{
  
    var nuovaPersona={id:id, nome:nome , cognome:cognome}
    setListaNome(listaNome.map(persona=>{
      
      if(persona.id===id)
      {
  
          persona=nuovaPersona   
      }

      return persona

    }));

  }

  return (

    <>
      
     <h1>Benvenuto {utenteState?.utente?.username??"Nessuno"}</h1>
     

    {/* {listaNome.map(persona=>
      
      <HelloComponent id={persona.id} nome={persona.nome} cognome={persona.cognome} 
                  modificaPersona={modificaPersona} eliminaPersona={eliminaPersona}/>

      )} */}

    {/* {listaAnimale.map(animale=>
  
      <AnimaleComponent nome={animale.nome} razza={animale.razza} />

    )}  */}

      <InserisciPersonaForm edit ={edit} id={id} nome={nome} cognome={cognome} 
                    onChange={onChange} mostraPersona={mostraPersona} updatePersona={updatePersona}/>

    </>

  );

}

const LayoutHomepage = LayoutPage(Homepage);
export {LayoutHomepage as Homepage}