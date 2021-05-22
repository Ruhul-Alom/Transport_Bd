import React from 'react';
import '../Navbar/Navbar.css'
import logo from '../../images/logo.jpg';
import { Link} from 'react-router-dom';

const NavbarAll = (props) => {
   
    const {isSignedIn, name} = props.user; 
   
    return (
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light navbar-width">
                <div className="container-fluid">
                    <a className="navbar-brand p-0 m-0" href="#">
                        <img src={logo} alt="" width="70" height="50"/><span className="text-primary">     Transport-Bd</span> 
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                
                                <Link className="nav-link" to="/selectroad">Destination</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Blog</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Contact</Link>
                            </li>                            
                        </ul>
                        {/* <button className="btn btn-outline-success me-2" type="button"><Link className="text-decoration-none text-dark" to="/login">Login</Link></button> */}
                        {
                            (props.user.isSignedIn) ? <button className="btn me-2" type="button"><Link className="text-decoration-none text-dark" to="/login">{name}</Link></button>
                            :
                            <button className="btn me-2" type="button"><Link className="text-decoration-none text-dark" to="/login">Login</Link></button>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default  NavbarAll;