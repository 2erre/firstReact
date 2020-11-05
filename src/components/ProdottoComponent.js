import React  from 'react'
import { Card } from 'react-bootstrap';
import './HelloComponent.css'
 
export const ProdottoComponent = ({prodotto,eliminaProdotto,addCart,removeCart,showAddCartButton,showRemoveCartButton}) => {
    return (

<div className="containerProdottoComponent">
<Card  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={prodotto.urlimg} />
  <Card.Body >
    <h1> <Card.Title>ID: {prodotto.id}</Card.Title> 
         <Card.Subtitle>Nome prodotto: {prodotto.titolo}</Card.Subtitle> 
         <Card.Text>Prezzo:{prodotto.prezzo}</Card.Text> </h1>
         <Card.Text>Quantita:{prodotto.quantita}</Card.Text> 

    {showAddCartButton&&<button id="btnElimina" onClick={()=>eliminaProdotto(prodotto.id)}> Elimina Prodotto</button>}
    {showAddCartButton&&<button id="btnAddCart" onClick={()=>addCart(prodotto)}> Aggiungi al carrello</button>}
    {showRemoveCartButton&&<button id="btnElimina" onClick={()=>removeCart(prodotto.id)}> Rimuovi dal carrello</button>}
  </Card.Body>
</Card>
</div>
    );
}
