import { MDBBadge, MDBIcon } from 'mdbreact';
import React, { Component } from 'react';
import EventDetails from './EventDetails';

class Event extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Dugme za brisanje dogadjaja */}
                <MDBBadge
                    color='danger'
                    className='ml-2 float-right'
                    onClick={() => this.props.onDelete(this.props.id)}
                >
                    -
                </MDBBadge>

                {/* Ikonica za uredjivanje */}
                <MDBIcon 
                fas
                icon="edit"
                className='ml-2 float-right text-secondary'
                onClick={() => this.props.onEdit(this.props.id)}
                /> 

                {/* Komponenta EventDetails koja prikazuje detalje */}
                <EventDetails 
                    time={this.props.time}
                    title={this.props.title}
                    location={this.props.location}
                    description={this.props.description}
                />
                
            </React.Fragment>
        );
    }
}

export default Event;
