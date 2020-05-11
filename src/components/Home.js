import React from "react";
import "./images/orlando.jpg";


const orlando = require("./images/orlando.jpg");
function Home() {
    return (
        <main>

            <div className={"container"}>
                <div className={"box-2 containerDiv mx-auto"}>
                    <div className={"row"}>
                        <div className={"col-md-12 about"}>About Me</div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-md-12 para"}>
                            <div className={"image-wrapper float-left"}><img src={orlando} alt={"Yoom"} className={"avatar"} /></div>
                            <div className={"single-post-content-wrapper"}>
                                <p style={{ fontSize: 20 }}>My name is Dung Davidson (pronounced Yoom). I originally come from Vietnam. I'm a junior full stack web developer. I want to
                                have a
                                career change and I'm very passionate about coding, making websites and games. It's very interesting
                                and
                                exciting making my imagination come to life. I'm looking forward to actually working in the tech
                  field.<br />
                                            I love travelling, food, watching television, nature especially flowers, spending time with my family.
                </p>
                            </div>
                        </div>
                    </div><hr/>
                    <h4>Connect with me</h4>
                    <a href={"https://github.com/DDavidson202020"} target={"_blank"} rel="noopener noreferrer"><i style={{fontSize: 25, color: "black"}} className="fab fa-github"></i></a>
                    <span> </span>
                    <a href={"https://linkedin.com/in/dung-davidson-1102401a2"} target={"_blank"} rel="noopener noreferrer"><i style={{fontSize: 25, color: "#2867B2"}} className="fab fa-linkedin"></i></a>
                
                </div>
                
            </div>
        </main>
    )
}
export default Home;