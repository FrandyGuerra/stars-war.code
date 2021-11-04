import React from 'react'
import { useEffect, useState } from "react";
import { useParams,useHistory } from "react-router-dom";

const DetailsVehicle = () => {
    const [vehicle,setVehicle]=useState([]);
    const [description,setDescription]=useState("");
    const {vehicle_id} =useParams();
    const history =useHistory();

    const getDetailVehicle=()=>{
        fetch(`https://www.swapi.tech/api/vehicles/${vehicle_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVehicle(data.result.properties)
                setDescription(data.result.description)
            })
            .catch(err => console.error(err))

    }
    
    useEffect(()=>{
        console.log(vehicle_id);
        getDetailVehicle();
    },[])
    return (
        <div className="container">
        <div className="card mb-3" style={{ marginTop: "100px",maxWidth: "1000px", position:"static" }}>
                <div className="row ">
                    <div className="col-md-6">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle_id}.jpg`} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h2 className="card-title">{vehicle.name}</h2>
                            <h6>Description: <span className="card-text">{description}</span></h6>
                            <h6>Consumables: <span className="card-text">{vehicle.consumables}</span></h6>
                            <h6>cost_in_credits: <span className="card-text">{vehicle.cost_in_credits}</span></h6>
                            <h6>created: <span className="card-text">{vehicle.created}</span></h6>
                            <h6>crew: <span className="card-text">{vehicle.crew}</span></h6>
                            <h6>edited: <span className="card-text">{vehicle.edited}</span></h6>
                            <h6>length: <span className="card-text">{vehicle.length}</span></h6>
                            <h6>manufacturer: <span className="card-text">{vehicle.manufacturer}</span></h6>
                            <h6>max_atmosphering_speed: <span className="card-text">{vehicle.max_atmosphering_speed}</span></h6>
                            <h6>model: <span className="card-text">{vehicle.model}</span></h6>
                            <h6>passengers: <span className="card-text">{vehicle.passengers}</span></h6>
                            <h6>url: <span className="card-text">{vehicle.url}</span></h6>
                            <h6>vehicle_class: <span className="card-text">{vehicle.vehicle_class}</span></h6>
                        </div>
                    </div>
                </div>
        </div>
        <button onClick={history.goBack} className="btn btn-warning">Regresar</button>
        </div>
    )

}

export default DetailsVehicle;