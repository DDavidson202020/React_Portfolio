import React from "react";

class Contact extends React.Component {
    state = {
        name: "",
        email: "",
        message: "",
        disabled: false,
        emailSent: null
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            disabled: true
        })
    }

    render() {
        return (
            <main>


                <div className="container box-2 containerDiv mx-auto">
                    <div className="row">
                        <div className="col">
                            <p style={{textAlign: "center"}}>Contact</p>
                        </div>
                    </div>
                    <p style={{textAlign: "center", fontSize: "22px"}}>Email: ddavidson202020@gmail.com</p>
                    <h4 style={{textAlign: "center"}}>Connect with me</h4>
                    <p style={{textAlign: "center", fontSize: "22px"}}>Github: <a href="https://github.com/DDavidson202020" target="_blank" rel="noopener noreferrer"><i style={{fontSize: "25px", color: "black"}} className="fab fa-github"></i></a></p>
                    <p style={{textAlign: "center", fontSize: "22px"}}>LinkedIn: <a href="https://linkedin.com/in/dung-davidson-1102401a2" target="_blank" rel="noopener noreferrer"><i style={{fontSize: "25px", color: "#2867B2"}} className="fab fa-linkedin"></i></a></p>
                    
                    
                </div>
            </main>
        )
    }
}
export default Contact;
