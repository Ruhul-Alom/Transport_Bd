import React from 'react';
import '../Navbar/Navbar.css'
import bus from '../../images/bus_ecy5cd.svg';
import car from '../../images/baby-car_jsfc99.svg';
import bike from '../../images/motorcycle_cndjq8.svg';
import train from '../../images/rail_zebote.svg';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
<div className="container-fluid ">
<div className="row mt-5">

    <div className="col-3">
    <Link to="/selectroad">
<div className="card" >
  <img style={{height:'250px'}} className="card-img-top"  src={bike} alt="Card image cap"/>
  <div className="card-body">
    <h3 className="card-title">Bike</h3>
  </div>
</div>
</Link>
</div>


<div className="col-3">
<Link to="/selectroad">
<div className="card" >
  <img style={{height:'250px'}} className="card-img-top" src={car} alt="Card image cap"/>
  <div className="card-body">
    <h3 className="card-title">Car</h3>
  </div>
</div>
</Link>
</div>


<div className="col-3">
<Link to="/selectroad">
<div className="card" >
  <img style={{height:'250px'}} className="card-img-top" src={bus} alt="Card image cap"/>
  <div className="card-body">
    <h3 className="card-title">Bus</h3>
  </div>
</div>
</Link>
</div>


<div className="col-3">
<Link to="/selectroad">
<div className="card" >
  <img style={{height:'250px'}} className="card-img-top" src={train} alt="Card image cap"/>
  <div className="card-body">
    <h3 className="card-title">Train</h3>
  </div>
</div>
</Link>
</div>
</div>
</div>





    );
};

export default Home;