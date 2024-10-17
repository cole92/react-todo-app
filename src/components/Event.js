import React, { Component } from 'react'

class Event extends Component {

    render() {
        return (
            <React.Fragment>
                <h3>
                    {this.props.time} {this.props.title}
                </h3>
            </React.Fragment>
        );
    };
};

export default Event;