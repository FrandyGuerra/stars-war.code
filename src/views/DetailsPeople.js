import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const DetailsPeople = () => {
    const [persona,setPersona]=useState([]);
    const [description,setDescription]=useState("");
    const {people_id} =useParams();
    const history = useHistory();

    const getDetailPeople=()=>{
        fetch(`https://www.swapi.tech/api/people/${people_id}`, {
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
            console.log(data.result.properties)
            console.log(data)
            setPersona(data.result.properties)
            setDescription(data.result.description);
        }).catch((error) => {
            console.log(error)
        })

    }
    
    useEffect(()=>{
        console.log(people_id);
        getDetailPeople();
    },[])
    return (
        <div className="container">
        <div className="card mb-3" style={{ marginTop: "100px",maxWidth: "1000px", position:"static", height:"440px"}}>
                <div className="row">
                    <div className="col-md-4">
                        <img style={{ height: "440px"}} src={`https://starwars-visualguide.com/assets/img/characters/${people_id}.jpg`} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{persona.name}</h5>
                            <h6>Descripcion: <span className="card-text">{description}</span></h6>
                            <h6>Created: <span className="card-text">{persona.created}</span></h6>
                            <h6>Edited: <span className="card-text">{persona.edited}</span></h6>
                            <h6>Eye-Color: <span className="card-text">{persona.eye_color}</span></h6>
                            <h6>Gender: <span className="card-text">{persona.gender}</span></h6>
                            <h6>Hair-Color: <span className="card-text">{persona.hair_color}</span></h6>
                            <h6>Height: <span className="card-text">{persona.height}</span></h6>
                            <h6>Homeworld: <span className="card-text">{persona.homeworld}</span></h6>
                            <h6>Mass: <span className="card-text">{persona.mass}</span></h6>
                            <h6>Skin-Color: <span className="card-text">{persona.skin_color}</span></h6>
                            <h6>Url: <span className="card-text">{persona.url}</span></h6>
                        </div>
                    </div>
                </div>
        </div>
                    <button onClick={history.goBack} className="btn btn-warning">Regresar</button>
        </div>
    )

}

export default DetailsPeople;