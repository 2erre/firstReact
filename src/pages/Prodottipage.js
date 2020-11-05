import React, { useEffect, useLayoutEffect, useState } from 'react'
import { prodottiServices } from '../services/prodotti.service';
import { ProdottoComponent } from '../components/ProdottoComponent';
import { LayoutPage } from '../layout/Layoutpage';
import { history } from '../utils/history';
import { carrelloServices } from '../services/carrello.service';
import { useCarrello } from '../context/carrello.context';
import { carrelloActions } from '../actions/carrello.action';
import { Alert } from 'react-bootstrap';

 const Prodottipage=()=>{

    const {carrelloState,dispatchCart}=useCarrello();
    const [showAlert,sertshowAlert]=useState(false);

    useLayoutEffect(()=>{
        if(!JSON.parse(localStorage.getItem('utenteloggato'))?.success)
     
          history.push('/login')
    
        }, []);

        
    
    const [listaProdotti, setListaProdotti] = useState();

    useEffect(()=>{
        prodottiServices.getAllProdotti().then((response) => {
            console.log(response)
            setListaProdotti(response)
        });
    }, []);

    const eliminaProdotto=(id)=>{
        prodottiServices.eliminaProdotto(id).then((response) => {

            setListaProdotti(response);
        })
    }

    const addCart=(prodotto)=>{
        carrelloServices.addCart(prodotto).then((response) => {

            carrelloServices.getAllProdotti().then((response) => {
                dispatchCart(carrelloActions.setCartAction(response))
                sertshowAlert(true)
             
             }); 

            
        })
    }

    



    //le quadre prevengono un loop, dicono all'istruzione che deve aggiornare lo stato solo la prima volta
return <> {listaProdotti ?
         listaProdotti.map(prodotto => 
            <ProdottoComponent 
            showAddCartButton={true}
            showRemoveCartButton={false}
            
            prodotto={prodotto} eliminaProdotto={eliminaProdotto} addCart={addCart}/>)  :
              <h1>NON ESISTE</h1> }
              
             {showAlert && <Alert key={'alert'} variant={'success'} onClose={() => sertshowAlert(false)} dismissible>
                                  Prodotto aggiunto al carrello!
                           </Alert>}
              </>
};



const LayoutProdotti = LayoutPage(Prodottipage);
export {LayoutProdotti as Prodottipage}