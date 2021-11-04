import React from 'react'
import {Link} from 'react-router-dom';
import{FaRegHeart} from 'react-icons/fa'

const CardPlanet = ({name,parametro}) => {
    return(
    <div className="card mb-3" style={{position:"static"}}>
        <img src={parametro==1?`https://i.pinimg.com/originals/28/4c/7a/284c7a4c72d1009cf622823745aead9e.jpg`:`https://starwars-visualguide.com/assets/img/planets/${parametro}.jpg`} className="" alt="..."/>
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