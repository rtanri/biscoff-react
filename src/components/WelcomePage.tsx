import React from 'react';
import '../App.scss';

class WelcomePage extends React.Component {
    render() {
        return (
            <div className="mainpage-background">
                <div className="welcome-message-box">
                    <p className="message-lines">Artisanal Breads & Cakes</p>
                    <p className="message-lines">Freshly Baked Everyday</p>
                    <button className="btn btn-secondary grey-styling my-4">
                        See Our Fresh Bakes
                    </button>
                </div>
            </div>
        );
    }
}

export default WelcomePage;
