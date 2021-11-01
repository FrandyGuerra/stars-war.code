import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const DetailsVehicle = () => {
    const [vehicle,setVehicle]=useState([]);
    const [description,setDescription]=useState("");
    const {vehicle_id} =useParams();

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
        <div className="card mb-3" style={{ marginTop: "100px",maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
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
        </div>
    )

}

export default DetailsVehicle;