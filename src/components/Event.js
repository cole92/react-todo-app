import { MDBBadge, MDBIcon } from 'mdbreact';
import React, { Component } from 'react';

class Event extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Prikaz vremena dogadjaja */}
                <div className='media mt-1'>
                    <h3 className='h3-responsive font-weight-bold mr-3'>
                        {this.props.time}
                    </h3>
                </div>

                {/* Glavni sadrzaj dogadjaja */}
                <div className='media-body mb-3 mb-lg-3'>
                    {/* Dugme za brisanje dogadjaja */}
                    <MDBBadge
                        color='danger'
                        className='ml-2 float-right'
                        onClick={() => this.props.onDelete(this.props.id)}
                    >
                        -
                    </MDBBadge>

                    {/* Naslov dogadjaja */}
                    <h6 className='mt-0 font-weight-bold'> {this.props.title}</h6>{" "}

                    <hr className='hr-bold my-2' />

                    {/* Prikaz lokacije dogadjaja ako postoji */}
                    {this.props.location && (
                        <React.Fragment>
                            <p className='font-smaller mb-0'>
                                <MDBIcon icon='location-arrow' /> {this.props.location}
                            </p>
                        </React.Fragment>
                    )}

                    {/* Prikaz opisa dogadjaja ako postoji */}
                    {this.props.description && (
                        <React.Fragment>
                            <p className='p-2 mb-4 bg-light'>{this.props.description}</p>
                        </React.Fragment>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default Event;
