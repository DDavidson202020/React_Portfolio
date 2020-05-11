import React from "react";
import "./images/Screenshot.png";
import "./images/Screenshot1.png";
import "./images/Screenshot2.png";
import "./images/Screenshot3.png";
import "./images/Screenshot33.png";
import "./images/Screenshot34.png";
import "./images/Screenshot40.png";
import "./images/Screenshot41.png";
function Portfolio() {
    return (
        <main>
            <div className="container box-2 containerDiv mx-auto">

                <div className="row">
                    <div className="col">
                        <p>Portfolio</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <a href={"https://ddavidson202020.github.io/day_planner/"} target={"_blank"} rel="noopener noreferrer"><h3>Day Planner App</h3></a>
                        <img src={require("./images/Screenshot.png")} width="250" height="250" alt={"application"} />
                        
                    </div>
                    
                    <div className="col-md-4">
                        <a href={"https://ddavidson202020.github.io/Weather_Dashboard/"} target={"_blank"} rel="noopener noreferrer"><h3>Weather Dashboard App</h3></a>
                        <img src={require("./images/Screenshot1.png")} width="250" height="250" alt={"application"} />
                    </div>
                    
                    <div className="col-md-4">
                        <a href={"https://ddavidson202020.github.io/Code_Quiz/"} target={"_blank"} rel="noopener noreferrer"><h3>Code Quiz App</h3></a>
                        <img src={require("./images/Screenshot2.png")} width="250" height="250" alt={"application"} />

                    </div>
                
                </div>
                <br/>
                <hr/>
                <div className="row">

                    <div className="col-md-4">
                        <a href={"https://ddavidson202020.github.io/Password_Generator/"} target={"_blank"} rel="noopener noreferrer"><h3>Password Generator App</h3></a>
                        <img src={require("./images/Screenshot3.png")} width="250" height="250" alt={"application"} />
                    </div>
                    

                    <div className="col-md-4">
                        <a href={"https://boiling-citadel-96847.herokuapp.com/"} target={"_blank"} rel="noopener noreferrer"><h3>Note Taker App</h3></a>
                        <img src={require("./images/Screenshot33.png")} width="250" height="250" alt={"application"} />
                    </div>
                    
                    <div className="col-md-4">
                        <a href={"https://young-depths-27786.herokuapp.com/"} target={"_blank"} rel="noopener noreferrer"><h3>Burger App</h3></a>
                        <img src={require("./images/Screenshot34.png")} width="250" height="250" alt={"application"} />
                    </div>
                </div>
                <br/>
                <hr/>
                <div className="row">
                    <div className="col-md-4">
                        <a href={"https://cryptic-mountain-58579.herokuapp.com/"} target={"_blank"} rel="noopener noreferrer"><h3>Budget App</h3></a>
                        <img src={require("./images/Screenshot40.png")} width="250" height="250" alt={"application"} />
                    </div>
                
                    <div className="col-md-4">
                        <a href={"https://ddavidson202020.github.io/Employee_Directory/"} target={"_blank"} rel="noopener noreferrer"><h3>Employee Directory App</h3></a>
                        <img src={require("./images/Screenshot41.png")} width="250" height="250" alt={"application"} />
                    </div>
                    
                </div>
            </div>

        </main>
    )

}
export default Portfolio;