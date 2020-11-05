import { carrelloConstant } from "../constants/carrello.constant";

export const carrelloActions= {

    setCartAction
    
};

function setCartAction(listaCarrello){
    return{
        type: carrelloConstant.SET_CARRELLO, listaCarrello
    };
}



    
