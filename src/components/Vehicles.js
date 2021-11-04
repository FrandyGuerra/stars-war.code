import React from 'react';
import { useEffect, useState } from 'react';
import CardVehicle from './CardVehicle';


const Vehicles=()=>{
    const [vehicles,setVehicles] =useState([]);
    
    useEffect(()=>{
        getVehicles();
    },[])

    const getVehicles = () => {
        fetch("https://www.swapi.tech/api/vehicles/", {
            method: "GET",
            //body: JSON.stringify([]),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            console.log(res.ok);
            console.log(res.status);
            return res.json()
        })
        .then((data) => {
            console.log(data.results)
            setVehicles(data.results)
        }).catch((error) => {
            console.log(error)
        })
    }
    return(
        <>
        <h1 className="mb-4">Vehicles</h1>
        <div className="row row-cols-1 row-cols-md-3 flex-nowrap overflow-auto mb-4">
            {
                vehicles.map((vehicle)=>{
                    return(
                    <div key={vehicle.uid} className="col-md-4">
                       <CardVehicle name={vehicle.name} parametro={vehicle.uid}/>
                    </div>
                    )
                })
            }
        </div>
      
        </>
    )
}
export default Vehicles;