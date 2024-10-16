import React, { Component } from 'react'

class Event extends Component {
    state = {
        time: '10:00',
        title: 'My state title'
    };

    constructor() {
        super();
        this.varTime = "12:00"
        this.varTitle = 'My variable title'  
      };

    render() {
        return (
            <React.Fragment>
                <h3>
                    {this.state.time} {this.state.title}
                </h3>
                <button
                    onClick={() => {
                        this.setState({title: 'Neki novi naslov'})
                        console.log(this.state.title);
                        
                    }}
                    >
                        Change state title
                    </button>
                <h3>
                    {this.varTime} {this.varTitle}
                </h3>
                <button
                    onClick={() => {
                        this.vartitle = 'Neki novi sastanak'
                        console.log(this.varTitle);
                        
                    }}
                    >
                        Change state title
                </button>
            </React.Fragment>
        );
    };
};

export default Event;