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
                            <div className={"image-wrapper float-left"}><img src={orlando} width="300" height="250" alt={"Yoom"}/></div>
                                <div className={"single-post-content-wrapper"}>
                                    <p>My name is Dung Davidson (pronounced Yoom). I'm currently learning about web developing. I want to
                                    have a
                                    career change and I'm very passionate about coding, making websites and games. It's very interesting
                                    and
                                    exciting making my imagination come to life. I'm looking forward to actually working in the tech
                  field.<br/>
                                            I love travelling, food, watching television, nature especially flowers, spending time with my family.
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