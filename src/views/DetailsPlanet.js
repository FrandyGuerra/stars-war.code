import { useEffect, useState } from "react";
import { useParams,useHistory } from "react-router-dom";

const DetailsPlanet = () => {
    const [planet,setPlanet]=useState([]);
    const [description,setDescription]=useState("");
    const {planet_id} =useParams();
    const history = useHistory();

    const getDetailPlanet=()=>{
        fetch(`https://www.swapi.tech/api/planets/${planet_id}`, {
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
            console.log(data);
            setPlanet(data.result.properties)
            setDescription(data.result.description)
            
        }).catch((error) => {
            console.log(error)
        })

    }
    
    useEffect(()=>{
        console.log(planet_id);
        getDetailPlanet();
    },[])
    return (
        <div className="container">
        <div className="card mb-3" style={{ marginTop: "100px",maxWidth: "1000px", position:"static" }}>
                <div className="row">
                    <div className="col-md-6">
                        <img src={planet_id==1?`https://i.pinimg.com/originals/28/4c/7a/284c7a4c72d1009cf622823745aead9e.jpg`:`https://starwars-visualguide.com/assets/img/planets/${planet_id}.jpg`} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h2 className="card-title">{planet.name}</h2>
                            <h6>Descripcion: <span className="card-text">{description}</span></h6>
                            <h6>Climate: <span className="card-text">{planet.climate}</span></h6>
                            <h6>Created: <span className="card-text">{planet.created}</span></h6>
                            <h6>diameter: <span className="card-text">{planet.diameter}</span></h6>
                            <h6>Edited: <span className="card-text">{planet.edited}</span></h6>
                            <h6>gravity: <span className="card-text">{planet.gravity}</span></h6>
                            <h6>orbital_period: <span className="card-text">{planet.orbital_period}</span></h6>
                            <h6>population: <span className="card-text">{planet.population}</span></h6>
                            <h6>rotation_period: <span className="card-text">{planet.rotation_period}</span></h6>
                            <h6>surface_water: <span className="card-text">{planet.surface_water}</span></h6>
                            <h6>terrain: <span className="card-text">{planet.terrain}</span></h6>
                            <h6>url: <span className="card-text">{planet.url}</span></h6>
                        </div>
                    </div>
                </div>
        </div>
        <button onClick={history.goBack} className="btn btn-warning">Regresar</button>
        </div>
    )

}

export default DetailsPlanet;