import React from 'react';
import './SelectRoad.css'
import map from '../../images/Map.png';
import { Link } from 'react-router-dom';


const SelectRoad = (props) => {
  

    return (
       
    
        <div className="main-container">
            <div className="select-field">
                <div className="row p-2">
                    <div className="col-md-4 input-road">
                        <form>
                            <input type="text" placeholder="Pick From"/>
                            <input type="text" placeholder="Pick To"/> <br/>
                           <Link to="/transport"> <button  type="button" className="btn btn-success mt-2" >Search</button></Link>
                        </form>
                       
                    </div>
                    <div className="col-md-8 map">
                        <img src={map} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectRoad;