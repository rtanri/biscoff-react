import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="row align-item-start main-column">
                <div className="col-6 div-column">
                    <img
                        src="./assets/biscoff-about-image.jpeg"
                        alt="about-page"
                        className="about-image"
                    />
                </div>
                <div className="col-6 div-column about-message-box">
                    <h2 className="my-5">About</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
