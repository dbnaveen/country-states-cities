import React, { Component } from 'react';
import "./AppFooter.scss";

export default class AppFooter extends Component {
    render() {
        return (
            <div className="footer-container">
                <span>React Project</span>
                <span>Current Version: 17.0.2</span>
                <span></span>
            </div>
        )
    }
}