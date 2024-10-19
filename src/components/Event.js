import { MDBBadge, MDBIcon } from 'mdbreact';
import React, { Component } from 'react'

class Event extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='media mt-1'>
                    <h3 className='h3-responsive font-weight-bold mr-3'>
                        {this.props.time}
                    </h3>
                </div>

                <div className='media-body mb-3 mb-lg-3'>
                    <MDBBadge color='danger' className='ml-2 float-right'>
                        -
                    </MDBBadge>
                    <h6 className='mt-0 font-weight-bold'> {this.props.title}</h6> {" "}
                    <hr className='hr-bold my-2'/>
                    {this.props.location && (
                        <React.Fragment>
                            <p className='font-smaller mb-0'>
                                <MDBIcon icon='location-arrow'/> {this.props.location}
                            </p>
                        </React.Fragment>
                    )}
                    {this.props.description && (
                        <React.Fragment>
                            <p className='p-2 mb-4 bg-light'>
                                 {this.props.description}
                            </p>
                        </React.Fragment>
                    )}
                </div>
            </React.Fragment>
        );
    };
};

export default Event;