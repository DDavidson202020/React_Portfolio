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


                <div className={"container box-2 containerDiv mx-auto"}>
                    <div className={"row"}>
                        <div className={"col"}>
                            <p>Contact</p>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className={"row"}>

                            <div className={"col-md-12"}>
                                <div className={"form-group"}>
                                    <label for="usr">Name</label>
                                    <input value={this.state.name} name="name" type="text" className={"form-control"} id={"usr"} onChange={this.handleChange} />
                                </div>
                                <div className={"form-group"}>
                                    <label for="pwd">Email</label>
                                    <input value={this.state.email} name="email" type="email" className={"form-control"} id={"pwd"} onChange={this.handleChange} />
                                </div>
                                <div className={"form-group"}>
                                    <label for="comment">Message</label>
                                    <textarea value={this.state.meaage} name="message" className={"form-control"} rows="5" id={"comment"} onChange={this.handleChange}></textarea>
                                </div>
                                <button disabled={this.state.disabled} className={"btn btn-info"} type={"submit"}>Submit</button>
                                {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                                {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                            </div>

                        </div>
                    </form>
                </div>
            </main>
        )
    }
}
export default Contact;
