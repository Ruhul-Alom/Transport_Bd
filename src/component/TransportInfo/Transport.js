import React from 'react'
import map from '../../images/Map.png'
import Data from '../fakeData/data.json';


export const Transport = (props) => {
   
    return (
        <div className="main-container">
            <div className="select-field">
                <div className="row p-2">
                    <div className="col-md-4 input-road">
                        <form>
                            <input type="text" placeholder="Pick From"/>
                            <input type="text" placeholder="Pick To"/> <br/>
                        </form>
                   {Data.map(td=><div>
                       <span> <i class="fas fa-car-bus"></i>:&nbsp;&nbsp;{ td.id    }&nbsp;&nbsp;&nbsp;&nbsp; </span>
                       <span> <i class="fas fa-chair"></i> :&nbsp;&nbsp; {td.people   }&nbsp;&nbsp;&nbsp;&nbsp; </span>
                       <span><i class="fas fa-money-check-alt"></i>:&nbsp;&nbsp; {td.price  }&nbsp;&nbsp;&nbsp;&nbsp;  </span>
                   </div>)} 
                   

                    </div>
                    <div className="col-md-8 map">
                        <img src={map} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Transport;