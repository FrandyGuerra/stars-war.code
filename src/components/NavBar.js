import {Link} from 'react-router-dom';


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
                
                        <span className="nav-item dropdown btn btn-dark">
                            <Link className="nav-link dropdown-toggle text-white" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Favorites  <span style={{display:"inline-block",width:"15px",background:"yellow",color:"black",borderRadius:"4px"}}>{` 0`}</span>
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="">Lista de Favoritos</Link></li>
                            </ul>
                        </span>
                        
                </div>
            </div>
        </nav>
    )
}
export default NavBar;