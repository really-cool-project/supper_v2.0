import React, { Component } from 'react';

class Supper extends Component {
    render() {
        return (
            <div className="supper-page-wrapper">
                <div className="sup-image-wrapper">
                    <img className="supper-image" src={this.props.photo} alt="" />
                </div>
                <div className="supper-info">
                    <div>
                        <p className="supper-title">{this.props.title}</p>
                        <p className="supper-date">{this.props.date}</p>
                        <p className="supper-time">{this.props.time}</p>
                        <p className="supper-price">{this.props.price}</p>
                    </div>
                    <div className="supper-description">
                        <p className="description">Description:</p>
                        <p className="describe-supper">{this.props.description}</p>
                    </div>
                    <div>
                        <p className="availability">spots left: 25</p>
                        <button className="rsvp">RSVP</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Supper;