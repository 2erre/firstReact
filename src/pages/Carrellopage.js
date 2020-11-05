import { useEffect, useState } from 'react';
import { carrelloActions } from '../actions/carrello.action';
import { CarrelloComponent } from '../components/CarrelloComponent';
import { ProdottoComponent } from '../components/ProdottoComponent';
import { useCarrello } from '../context/carrello.context';
import { LayoutPage } from '../layout/Layoutpage';
import { carrelloServices } from '../services/carrello.service';
import { history } from '../utils/history';



const Carrellopage =()=> {

const {carrelloState,dispatchCart}=useCarrello();

    useEffect(()=>{
        if(!JSON.parse(localStorage.getItem('utenteloggato'))?.success){
            history.push('/login')

        }
 
      
        carrelloServices.getAllProdotti().then((response) => {
           dispatchCart(carrelloActions.setCartAction(response))
        
        }); 
    

    }, []);

     const removeCart=(id)=>{
        carrelloServices.removeCart(id).then((response) => {
            dispatchCart(carrelloActions.setCartAction(response))
        })
    }


    return <> {carrelloState?.listaCarrello ?
        
        
        carrelloState.listaCarrello.map(prodotto => <>
           <ProdottoComponent
            showRemoveCartButton={true}
            showAddCartButton={false} 
            prodotto={prodotto}  removeCart={removeCart}   /> </>)  :
             <h1>NON ESISTE</h1> }
             </>
        
    
};

const LayoutCarrellopage = LayoutPage(Carrellopage);
export {LayoutCarrellopage as Carrellopage}