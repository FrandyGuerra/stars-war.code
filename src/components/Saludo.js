import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Saludo=()=>{
    const {store, actions}= useContext(Context)
    return(
        <>
        <div>Hola {store.name}</div>
        <div>tu nombre completo es {actions.getFullname()}</div>
        </>
    )
}

export default Saludo;