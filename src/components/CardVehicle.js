import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import{FaRegHeart} from 'react-icons/fa'
import { Context } from '../store/appContext';

const CardVehicle = ({name,parametro}) => {
    const {store,actions}= useContext(Context);
    return(
    <div className="card mb-3" style={{position:"static"}}>
        <img style={{width:"100%", height:"280px"}} src={`https://starwars-visualguide.com/assets/img/vehicles/${parametro}.jpg`} className="" alt="..."/>
        <div className ="card-body">
        <h2 className ="card-title fs-4">{name} </h2>
        <div className="">
            <Link to={`/vehicle/${parametro}`} className ="btn btn-primary">Go somewhere</Link>
            <button  onClick={()=>actions.agregarFavorito(name)} className="btn btn-outline-secondary "><FaRegHeart/></button>
        </div>
        </div>
    </div>
    )
}

export default CardVehicle;