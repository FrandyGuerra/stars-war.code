import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./views/Home";
import NotFound from './views/NotFound';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import DetailsPeople from "./views/DetailsPeople";
import DetailsPlanet from "./views/DetailsPlanet";
import DetailsVehicle from "./views/DetailsVehicle";

const Main = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/people/:people_id' component={DetailsPeople}/>
                <Route exact path='/planet/:planet_id' component={DetailsPlanet}/>
                <Route exact path='/vehicle/:vehicle_id' component={DetailsVehicle}/>
                <Route component={NotFound} />
            </Switch>
            <Footer/>
        </BrowserRouter>

    )
}

export default Main;