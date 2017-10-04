import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import NavbarContainer from './navbar/NavbarContainer.js';
import ListContainer from "./landing/ListContainer.js";
import SupperDashboardContainer from './supper-dashboard/SupperDashboardContainer.js';
import './styles/modal.css';
import "./styles/landing.css";
import './styles/Navbar.css';
import './styles/CheckboxPage.css';
import './styles/typography.css';
import "./styles/apply.css";
import './styles/CreatePage.css';
import './styles/supperdash.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            supperList: [0,1,2,3,4,5,6,7,8]
        }
    }
    render() {
        return (
            <div>
                <NavbarContainer />
                <SupperDashboardContainer />
            </div>
        );
    }
}

export default App;

ReactDOM.render( 
   <Router><App /></Router>,
    document.getElementById('root')
)