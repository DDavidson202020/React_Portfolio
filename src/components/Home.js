import React from "react";
import "./images/orlando.jpg";


const orlando = require("./images/orlando.jpg");
function Home() {
    return (
        <main>

            <div className="container">
                <div className="box-2 containerDiv mx-auto">
                    <div className="row">
                        <div className="col-md-12 about">About Me</div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 para">
                            <div className="image-wrapper float-left"><img src={orlando} alt="Yoom" className="avatar" /></div>
                            <div className="single-post-content-wrapper">
                                <p style={{ fontSize: "20px"}}>My name is Dung Davidson (pronounced Yoom). I originally come from Vietnam. Junior Full Stack Web Developer and graduate of the University
                                of Central Florida Coding Boot Camp with skills in HTML5, CSS3, Bootstrap, JavaScript, MongoDB, Node.js, Express.js, React.js.
                                I am passionate about coding, and find it exciting and rewarding making my imagination come to life as a developer.
                                I hope to focus on creating intuitive user interfaces and collaborating with others to create meaningful web applications that improve the lives of users.<br/>
                                I love coding, spending time with my family, travelling, watching movies, food and nature especially flowers.
                </p>
                            </div>
                        </div>
                    </div>
                
                </div>
                
            </div>
        </main>
    )
}
export default Home;