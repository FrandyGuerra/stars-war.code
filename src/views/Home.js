import React, { useState } from 'react';
import Peoples from '../components/Peoples'
import Vehicles from '../components/Vehicles'
import Planets from '../components/Planets'
import Saludo from '../components/Saludo';
const Home =()=>{
return(
    <>
    <div className="container" style={{marginTop:"100px",marginBottom:"90px"}}>
        <Saludo/>
        <Peoples/>
        <Vehicles/>
        <Planets/>
    </div>
    </>

)
}
export default Home;