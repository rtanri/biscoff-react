import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="row align-item-start main-column">
                <div className="col-6 div-column">
                    <img
                        src="./assets/contact-image.jpeg"
                        alt="contact-page"
                        className="about-image"
                    />
                </div>
                <div className="col-6 div-column about-message-box">
                    <h2 className="mt-5 mb-3">Contact Us</h2>
                    <form>
                        <div className="mb-3">
                            <label
                                for="exampleInputEmail1"
                                className="form-label"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                for="exampleInputPassword1"
                                className="form-label"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                for="exampleInputPassword1"
                                className="form-label"
                            >
                                Message
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                type="button"
                                className="btn btn-secondary grey-styling"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
