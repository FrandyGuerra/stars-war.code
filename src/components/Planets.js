import React from 'react';
import { useEffect, useState } from 'react';

import CardPlanet from './CardPlanets';

const Planets=()=>{
    const [planets,setPlanets] =useState([]);
    
    useEffect(()=>{
        getPlanets();
    },[])

    const getPlanets = () => {
        fetch("https://www.swapi.tech/api/planets/", {
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
            setPlanets(data.results)
        }).catch((error) => {
            console.log(error)
        })
    }
    return(
        <>
        <h1 className="mb-4">Planets</h1>
        <div className="row row-cols-1 row-cols-md-3 flex-nowrap overflow-auto mb-4">
            {
                planets.map((planet)=>{
                    return(
                    <div key={planet.uid} className="col-md-4">
                       <CardPlanet name={planet.name} parametro={planet.uid}/>
                    </div>
                    )
                })
            }
        </div>
      
        </>
    )
}
export default Planets;