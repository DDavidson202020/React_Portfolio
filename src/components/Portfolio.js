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
                        <div className="card" style={{width: "18rem", border: "2px solid teal", borderRadius: "15px"}}>
                            <img src={screenshot} style={{borderRadius: "15px 15px 0 0"}}  width="200" height="200" className="card-img-top" alt="application" />
                        
                                <div className="card-body">
                                    <h5 className="card-title">Day Planner</h5>
                                    <p className="card-text">Allow user to save events for each hour of the day. Run in the browser and feature dynamically updated HTML and CSS powered by jQuery.</p>
                                </div>
                                
                                <div className="card-body">
                                    <a href={"https://ddavidson202020.github.io/day_planner/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "rgb(238, 178, 12)", fontWeight: "bold"}}>Live Site</a>
                                    <a href={"https://github.com/DDavidson202020/day_planner"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "hotpink", fontWeight: "bold"}}>Github Repo</a>
                                </div>
                        </div>
                    </div>

                        <div className="col-md-4">
                            <div className="card" style={{width: "18rem", border: "2px solid teal", borderRadius: "15px"}}>
                            <img src={screenshot1} style={{borderRadius: "15px 15px 0 0"}}  width="200" height="200" className="card-img-top" alt="application" />
                        
                                <div className="card-body">
                                    <h5 className="card-title">Weather Dashboard</h5>
                                    <p className="card-text">Use the OpenWeather API to retrieve weather data for cities. Use localStorage to store search history. Feature dynamically updated HTML and CSS.</p>
                                </div>
                                
                                <div className="card-body">
                                    <a href={"https://ddavidson202020.github.io/Weather_Dashboard/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "rgb(238, 178, 12)", fontWeight: "bold"}}>Live Site</a>
                                    <a href={"https://github.com/DDavidson202020/Weather_Dashboard"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "hotpink", fontWeight: "bold"}}>Github Repo</a>
                                </div>
                        </div>

                        </div>

                        <div className="col-md-4">
                            <div className="card" style={{width: "18rem", border: "2px solid teal", borderRadius: "15px"}}>
                            <img src={screenshot2} style={{borderRadius: "15px 15px 0 0"}}  width="200" height="200" className="card-img-top" alt="application" />
                        
                                <div className="card-body">
                                    <h5 className="card-title">Code Quiz</h5>
                                    <p className="card-text">Use javascript to change HTML elements and CSS dynamically. Use local storage to save the name and score from the last time user played.</p>
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
                            <div className="card" style={{width: "18rem", border: "2px solid teal", borderRadius: "15px"}}>
                            <img src={screenshot3} style={{borderRadius: "15px 15px 0 0"}}  width="200" height="200" className="card-img-top" alt="application" />
                        
                                <div className="card-body">
                                    <h5 className="card-title">Password Generator</h5>
                                    <p className="card-text">A responsive application that can generate a secure password following some certain criteria from user's input.</p>
                                </div>
                                
                                <div className="card-body">
                                    <a href={"https://ddavidson202020.github.io/Password_Generator/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "rgb(238, 178, 12)", fontWeight: "bold"}}>Live Site</a>
                                    <a href={"https://github.com/DDavidson202020/Password_Generator"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "hotpink", fontWeight: "bold"}}>Github Repo</a>
                                </div>
                        </div>

                        </div>


                        <div className="col-md-4">
                            <div className="card" style={{width: "18rem", border: "2px solid teal", borderRadius: "15px"}}>
                            <img src={screenshot33} style={{borderRadius: "15px 15px 0 0"}}  width="200" height="200" className="card-img-top" alt="application" />
                        
                                <div className="card-body">
                                    <h5 className="card-title">Note Taker</h5>
                                    <p className="card-text">Can be used to write, save, and delete notes. It uses an express backend, save and retrieve note data from a JSON file.</p>
                                </div>
                                
                                <div className="card-body">
                                    <a href={"https://boiling-citadel-96847.herokuapp.com/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "rgb(238, 178, 12)", fontWeight: "bold"}}>Live Site</a>
                                    <a href={"https://github.com/DDavidson202020/Note_Taker"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "hotpink", fontWeight: "bold"}}>Github Repo</a>
                                </div>
                        </div>

                        </div>

                        <div className="col-md-4">
                            <div className="card" style={{width: "18rem", border: "2px solid teal", borderRadius: "15px"}}>
                            <img src={screenshot34} style={{borderRadius: "15px 15px 0 0"}}  width="200" height="200" className="card-img-top" alt="application" />
                        
                                <div className="card-body">
                                    <h5 className="card-title">Burger Logger</h5>
                                    <p className="card-text">Let user input names of burgers, submit it, then click on Devour to move it to eaten section. Everything's saved in database.</p>
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
                            <div className="card" style={{width: "18rem", border: "2px solid teal", borderRadius: "15px"}}>
                            <img src={screenshot40} style={{borderRadius: "15px 15px 0 0"}}  width="200" height="200" className="card-img-top" alt="application" />
                        
                                <div className="card-body">
                                    <h5 className="card-title">Budget Tracker</h5>
                                    <p className="card-text">Allow user to add expenses and deposits to their budget with or without an internet connection. Store database when offline in INDEXEDDB, update database when brought back online.</p>
                                </div>
                                
                                <div className="card-body">
                                    <a href={"https://cryptic-mountain-58579.herokuapp.com/"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "rgb(238, 178, 12)", fontWeight: "bold"}}>Live Site</a>
                                    <a href={"https://github.com/DDavidson202020/budget_tracker"} target="_blank" rel="noopener noreferrer" className="card-link" style={{color: "hotpink", fontWeight: "bold"}}>Github Repo</a>
                                </div>
                        </div>

                        </div>

                        <div className="col-md-4">
                            <div className="card" style={{width: "18rem", border: "2px solid teal", borderRadius: "15px"}}>
                            <img src={screenshot41} style={{borderRadius: "15px 15px 0 0"}}  width="200" height="200" className="card-img-top" alt="application" />
                        
                                <div className="card-body">
                                    <h5 className="card-title">Employee Directory</h5>
                                    <p className="card-text">Was built using React.js. Respond to user events like filtering out employees by first name, sorting by employees first, last name or by age. Data is pulled from the Random User API.</p>
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