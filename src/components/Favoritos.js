import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Favoritos = () => {
    const {store, actions}= useContext(Context);

    return (
        <>
        <span className="nav-item dropdown btn btn-dark">
            <Link className="nav-link dropdown-toggle text-white" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites  <span style={{ display: "inline-block", width: "15px", background: "yellow", color: "black", borderRadius: "4px" }}>{store.contadorFavoritos>0 &&
                store.contadorFavoritos
                }</span>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {
                  !!store.favoritos &&
                  store.favoritos.map(el=>{
                      return(
                        <li><Link className="dropdown-item" to="">{el.name}</Link></li>
                      )
                  })
                  
                }
                
            </ul>
        </span>
        </>
    )

}

export default Favoritos;