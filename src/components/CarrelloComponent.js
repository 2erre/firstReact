import React  from 'react'
import { Card } from 'react-bootstrap';
import './HelloComponent.css'
 

export const CarrelloComponent = ({id,titolo,prezzo,removeCart}) => {
    return (

<div className="containerCarrelloComponent">
<Card  style={{ width: '18rem' }}>
<Card.Body >
    <h1> 
    <Card.Text>ID: {id}</Card.Text>   
    <Card.Title>Prodotto: {titolo}</Card.Title> 
    <Card.Subtitle>Prezzo: {prezzo}</Card.Subtitle> </h1>
    <button id="btnElimina" onClick={()=>removeCart(id)}> Rimuovi dal carrello</button>
    </Card.Body>
</Card>
</div>
    );
}