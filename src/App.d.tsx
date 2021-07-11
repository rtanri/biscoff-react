import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import About from './components/About';
import Contact from './components/Contact';
import BakedGoods from './components/BakedGoods';
import NavBar from './partials/NavBar';
import Footer from './partials/Footer';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <Router>
                <div>
                    <NavBar />

                    <Switch>
                        <Route path="/" exact>
                            <WelcomePage />
                        </Route>
                        <Route path="/products">
                            <BakedGoods />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </Switch>

                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
