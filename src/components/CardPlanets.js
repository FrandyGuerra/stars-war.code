import React from 'react'
import {Link} from 'react-router-dom';
import{FaRegHeart} from 'react-icons/fa'

const CardPlanet = ({name,parametro}) => {
    return(
    <div className="card mb-3" style={{position:"static"}}>
        <img src="https://estaticos-cdn.elperiodico.com/clip/6ab0bc3e-09ea-47ca-8240-8fddd9668310_alta-libre-aspect-ratio_default_0.jpg" className="" alt="..."/>
        <div className ="card-body">
        <h2 className ="card-title">{name} </h2>
        <h6>Gender: <span>hola</span></h6>
        <h6>Hair-Color: <span></span></h6>
        <h6>Eyes-Color: <span></span></h6>
        <div className="">
            <Link to={`/planet/${parametro}`} className ="btn btn-primary">Go somewhere</Link>
            <button className="btn btn-outline-secondary "><FaRegHeart/></button>
        </div>
        </div>
    </div>
    )
}

export default CardPlanet;