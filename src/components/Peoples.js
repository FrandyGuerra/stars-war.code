import React from 'react';
import { useEffect, useState } from 'react';
import CardPeople from './CardPeople';

const Peoples=()=>{
    const [people,setPeople] =useState([]);
    const [url,setUrl]=useState([]);

    useEffect(()=>{
        getPeoples();
    },[])

    const getPeoples = () => {
        fetch("https://www.swapi.tech/api/people/", {
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
            setPeople(data.results)
        })
        
        .catch((error) => {
            console.log(error)
        })
    }
    return(
        <>
        <h1 className="mb-4">Peoples</h1>
        <div className="row row-cols-1 row-cols-md-3 flex-nowrap overflow-auto mb-4">
            {
                people.map((per)=>{
                    return(
                    <div key={per.uid} className="col-md-4">
                       <CardPeople name={per.name} parametro={per.uid}/>
                    </div>
                    )
                })
            }
        </div>
      
        </>
    )
}
export default Peoples;