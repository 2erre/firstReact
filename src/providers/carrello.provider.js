import React, {useReducer} from 'react'
import { CarrelloContext } from '../context/carrello.context'
import { carrelloReducer } from '../reducers/carrello.reducer'



export const CarrelloProvider = ({children}) =>{

    const [carrelloState, dispatchCart] = useReducer(carrelloReducer,{})

    return(
        <CarrelloContext.Provider value = {{carrelloState,dispatchCart}}>
            {children}
        </CarrelloContext.Provider>
    )

}