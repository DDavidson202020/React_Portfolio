import React from "react";
import screenshot from "./images/Screenshot.png";
import screenshot1 from "./images/Screenshot1.png";
import screenshot2 from "./images/Screenshot2.png";
import screenshot3 from "./images/Screenshot3.png";
import screenshot33 from "./images/Screenshot33.png";
import screenshot34 from "./images/Screenshot34.png";
import screenshot40 from "./images/Screenshot40.png";
import screenshot41 from "./images/Screenshot41.png";
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
                        {/* <a href={"https://ddavidson202020.github.io/day_planner/"} target="_blank" rel="noopener noreferrer"><h3>Day Planner App</h3></a>
                        <img src={screenshot} width="250" height="250" alt="application" /> */}
                        <div className="card" style={{width: "18rem", border: "2px solid teal", borderRadius: "15px"}}>
                            <img src={screenshot}  width="200" height="200" className="card-img-top" alt="application" />
                        
                                <div className="card-body">
                                    <h5 className="card-title">Day Planner</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                
                                <div className="card-body">
                                    <a href={"https://ddavidson202020.github.io/day_planner/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "rgb(238, 178, 12)", fontWeight: "bold"}}>Live Site</a>
                                    <a href={"https://github.com/DDavidson202020/day_planner"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "hotpink", fontWeight: "bold"}}>Github Repo</a>
                                </div>
                        </div>
                    </div>

                        <div className="col-md-4">
                            {/* <a href={"https://ddavidson202020.github.io/Weather_Dashboard/"} target="_blank" rel="noopener noreferrer"><h3>Weather Dashboard App</h3></a>
                            <img src={require("./images/Screenshot1.png")} width="250" height="250" alt="application" /> */}
                            <div className="card" style={{width: "18rem", border: "2px solid teal", borderRadius: "15px"}}>
                            <img src={screenshot1}  width="200" height="200" className="card-img-top" alt="application" />
                        
                                <div className="card-body">
                                    <h5 className="card-title">Weather Dashboard</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                
                                <div className="card-body">
                                    <a href={"https://ddavidson202020.github.io/Weather_Dashboard/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "rgb(238, 178, 12)", fontWeight: "bold"}}>Live Site</a>
                                    <a href={"https://github.com/DDavidson202020/Weather_Dashboard"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "hotpink", fontWeight: "bold"}}>Github Repo</a>
                                </div>
                        </div>

                        </div>

                        <div className="col-md-4">
                            {/* <a href={"https://ddavidson202020.github.io/Code_Quiz/"} target="_blank" rel="noopener noreferrer"><h3>Code Quiz App</h3></a>
                            <img src={require("./images/Screenshot2.png")} width="250" height="250" alt="application" /> */}
                            <div className="card" style={{width: "18rem", border: "2px solid teal", borderRadius: "15px"}}>
                            <img src={screenshot2}  width="200" height="200" className="card-img-top" alt="application" />
                        
                                <div className="card-body">
                                    <h5 className="card-title">Code Quiz</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                
                                <div className="card-body">
                                    <a href={"https://ddavidson202020.github.io/Code_Quiz/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "rgb(238, 178, 12)", fontWeight: "bold"}}>Live Site</a>
                                    <a href={"https://github.com/DDavidson202020/Code_Quiz"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "hotpink", fontWeight: "bold"}}>Github Repo</a>
                                </div>
                        </div>

                        </div>

                    </div>
                    <br />
                    <hr />
                    <div className="row">

                        <div className="col-md-4">
                            {/* <a href={"https://ddavidson202020.github.io/Password_Generator/"} target={"_blank"} rel="noopener noreferrer"><h3>Password Generator App</h3></a>
                            <img src={require("./images/Screenshot3.png")} width="250" height="250" alt={"application"} /> */}
                            <div className="card" style={{width: "18rem", border: "2px solid teal", borderRadius: "15px"}}>
                            <img src={screenshot3}  width="200" height="200" className="card-img-top" alt="application" />
                        
                                <div className="card-body">
                                    <h5 className="card-title">Password Generator</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                
                                <div className="card-body">
                                    <a href={"https://ddavidson202020.github.io/Password_Generator/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "rgb(238, 178, 12)", fontWeight: "bold"}}>Live Site</a>
                                    <a href={"https://github.com/DDavidson202020/Password_Generator"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "hotpink", fontWeight: "bold"}}>Github Repo</a>
                                </div>
                        </div>

                        </div>


                        <div className="col-md-4">
                            {/* <a href={"https://boiling-citadel-96847.herokuapp.com/"} target={"_blank"} rel="noopener noreferrer"><h3>Note Taker App</h3></a>
                            <img src={require("./images/Screenshot33.png")} width="250" height="250" alt={"application"} /> */}
                            <div className="card" style={{width: "18rem", border: "2px solid teal", borderRadius: "15px"}}>
                            <img src={screenshot33}  width="200" height="200" className="card-img-top" alt="application" />
                        
                                <div className="card-body">
                                    <h5 className="card-title">Note Taker</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                
                                <div className="card-body">
                                    <a href={"https://boiling-citadel-96847.herokuapp.com/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "rgb(238, 178, 12)", fontWeight: "bold"}}>Live Site</a>
                                    <a href={"https://github.com/DDavidson202020/Note_Taker"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "hotpink", fontWeight: "bold"}}>Github Repo</a>
                                </div>
                        </div>

                        </div>

                        <div className="col-md-4">
                            {/* <a href={"https://young-depths-27786.herokuapp.com/"} target={"_blank"} rel="noopener noreferrer"><h3>Burger App</h3></a>
                            <img src={require("./images/Screenshot34.png")} width="250" height="250" alt={"application"} /> */}
                            <div className="card" style={{width: "18rem", border: "2px solid teal", borderRadius: "15px"}}>
                            <img src={screenshot34}  width="200" height="200" className="card-img-top" alt="application" />
                        
                                <div className="card-body">
                                    <h5 className="card-title">Burger Logger</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                
                                <div className="card-body">
                                    <a href={"https://young-depths-27786.herokuapp.com/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "rgb(238, 178, 12)", fontWeight: "bold"}}>Live Site</a>
                                    <a href={"https://github.com/DDavidson202020/Burger_Logger"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "hotpink", fontWeight: "bold"}}>Github Repo</a>
                                </div>
                        </div>

                        </div>
                    </div>
                    <br />
                    <hr />
                    <div className="row">
                        <div className="col-md-4">
                            {/* <a href={"https://cryptic-mountain-58579.herokuapp.com/"} target={"_blank"} rel="noopener noreferrer"><h3>Budget App</h3></a>
                            <img src={require("./images/Screenshot40.png")} width="250" height="250" alt={"application"} /> */}
                            <div className="card" style={{width: "18rem", border: "2px solid teal", borderRadius: "15px"}}>
                            <img src={screenshot40}  width="200" height="200" className="card-img-top" alt="application" />
                        
                                <div className="card-body">
                                    <h5 className="card-title">Budget Tracker</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                
                                <div className="card-body">
                                    <a href={"https://cryptic-mountain-58579.herokuapp.com/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "rgb(238, 178, 12)", fontWeight: "bold"}}>Live Site</a>
                                    <a href={"https://github.com/DDavidson202020/budget_tracker"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "hotpink", fontWeight: "bold"}}>Github Repo</a>
                                </div>
                        </div>

                        </div>

                        <div className="col-md-4">
                            {/* <a href={"https://ddavidson202020.github.io/Employee_Directory/"} target={"_blank"} rel="noopener noreferrer"><h3>Employee Directory App</h3></a>
                            <img src={require("./images/Screenshot41.png")} width="250" height="250" alt={"application"} /> */}
                            <div className="card" style={{width: "18rem", border: "2px solid teal", borderRadius: "15px"}}>
                            <img src={screenshot41}  width="200" height="200" className="card-img-top" alt="application" />
                        
                                <div className="card-body">
                                    <h5 className="card-title">Employee Directory</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                
                                <div className="card-body">
                                    <a href={"https://ddavidson202020.github.io/Employee_Directory/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "rgb(238, 178, 12)", fontWeight: "bold"}}>Live Site</a>
                                    <a href={"https://github.com/DDavidson202020/Employee_Directory"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "hotpink", fontWeight: "bold"}}>Github Repo</a>
                                </div>
                        </div>

                        </div>

                    </div>
                </div>

        </main>
    )

}
export default Portfolio;