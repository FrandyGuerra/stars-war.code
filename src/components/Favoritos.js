import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import { FaTrash } from 'react-icons/fa';

const Favoritos = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <span className="nav-item dropdown btn btn-dark">
                <Link className="nav-link dropdown-toggle text-white" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites  <span style={{ display: "inline-block", width: "15px", background: "yellow", color: "black", borderRadius: "4px" }}>{store.contadorFavoritos > 0 &&
                        store.contadorFavoritos
                    }</span>
                </Link>
                <ul className="dropdown-menu" style={{ width: "200px" }} aria-labelledby="navbarDropdown">
                    {
                        store.favoritos.length > 0 ?
                            store.favoritos.map((elem, index) => {

                                return <li key={index}><Link to="/" className="dropdown-item">{elem} <FaTrash onClick={() => { actions.eliminarFavorito(elem) }}/></Link></li>

                            })
                            : (
                                <li><Link to="/" className="dropdown-item" >(Empty)</Link></li>

                            )
                    }

                </ul>
            </span>
        </>
    )

}

export default Favoritos;