import React from 'react'
import {Link} from 'react-router-dom';
import{FaRegHeart} from 'react-icons/fa'


const CardPeople = ({name,parametro}) => {
    return(
    <div className="card mb-3" style={{position:"static"}}>
        <img style={{width:"100%", height:"400px"}} src={`https://starwars-visualguide.com/assets/img/characters/${parametro}.jpg`} className="" alt="..."/>
        <div className ="card-body">
        <h2 className ="card-title">{name} </h2>
        <div className="">
            <Link to={`/people/${parametro}`} className ="btn btn-primary">Go somewhere</Link>
            <button className="btn btn-outline-secondary "><FaRegHeart/></button>
        </div>
        </div>
    </div>
    )
}

export default CardPeople;