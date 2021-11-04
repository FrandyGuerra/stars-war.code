import {Link} from 'react-router-dom';
import Favoritos from './Favoritos';


const NavBar = () => {
    
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-warning"
        style={{position:"fixed",top:"0px",width:"100%",height:"80px"}}>
            <div className="container d-flex">
                <div className="justify-content-start">
                <Link className="navbar-brand" to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" style={{width:"15%",borderRadius:"10px"}}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                
                        <Favoritos/>
                        
                </div>
            </div>
        </nav>
    )
}
export default NavBar;