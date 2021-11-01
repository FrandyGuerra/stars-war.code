import React from 'react';
import Peoples from '../components/Peoples'
import Vehicles from '../components/Vehicles'
import Planets from '../components/Planets'

const Home =()=>{
return(
    <>
    <div className="container" style={{marginTop:"100px",marginBottom:"90px"}}>
        <Peoples/>
        <Vehicles/>
        <Planets/>
    </div>
    </>

)
}
export default Home;