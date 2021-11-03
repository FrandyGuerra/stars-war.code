import { createContext, useEffect, useState } from "react";
import getState from "./flux";

//Definir el contexto e importarlo
export const Context = createContext(null);

// define una funcion que recibe como parametro un componente
const injectContext = PassedComponent =>{
    const StoreWrappeer= props=>{
        const [state,setState]= useState(getState({
            getStore: () => state.store,
            getActions:()=> state.actions,
            setStore: updateStore=> setState({
                store:Object.assign(state.store,updateStore),
                actions:{...state.actions}
            })
        }));

        //Apenas Arranque la aplicacion quiere que se ejecuten estas funciones
        useEffect(()=>{

        },[])
        return(
            <Context.Provider value={state}>
                <PassedComponent {...props}/>
            </Context.Provider>
        )
    }

    return StoreWrappeer;
}

export default injectContext;

