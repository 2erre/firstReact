import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { utenteActions } from '../actions/utente.action';
import { useUtente } from '../context/utente.context';
import { useCarrello } from '../context/carrello.context';
import { Carrellopage } from '../pages/Carrellopage';
import { history } from '../utils/history';
import { CarrelloComponent } from './CarrelloComponent';

export const NavbarComponent =() =>{

   const {utenteState, dispatch}= useUtente();
  const {carrelloState}= useCarrello();

  const logout=()=>{
   localStorage.removeItem('utenteloggato');
   dispatch(utenteActions.logoutAction());
   history.push('/login');
}
    return(

        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#/">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
    
    {JSON.parse(localStorage.getItem('utenteloggato'))?.success&&(<><Link to="/">Home</Link> 
    <Link to="/prodotti">Prodotti</Link>
    <Link to="/aggiungiprodotti">Aggiungi Prodotti</Link>
    {JSON.parse(localStorage.getItem('utenteloggato'))?.ruolo=='user'&&(<Link to="/carrello">Carrello: {carrelloState?.listaCarrello?.length}</Link>)}
    <span onClick={()=>logout()}>Logout</span></>)}
  </Navbar>
</>



    );
}