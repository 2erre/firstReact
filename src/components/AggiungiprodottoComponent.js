import React  from 'react'
import './HelloComponent.css'
 

export const AggiungiprodottoComponent = ({titolo,prezzo,aggiungiProdotto,onChange}) => {
    return (

<div class="container">
<div class="form-group">
        <label for="formGroupExampleInput">Titolo:</label>
        <input class="form-control"
        type="text"
        name="titolo"
        value={titolo}  
        onChange={(e)=>onChange(e)}
        />

        <label for="formGroupExampleInput">Prezzo:</label>
        <input class="form-control"
        type="text"
        name="prezzo"
        value={prezzo}
        onChange={(e)=>onChange(e)}  
        />
</div>
       <button class="btn btn-dark" onClick={()=>aggiungiProdotto()}>Aggiungi Prodotto</button> 

        
        </div>
    );
}