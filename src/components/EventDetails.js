import React from "react";
import { MDBIcon } from "mdbreact";

const EventDetails = ({ time, title, location, description }) => {
    return (
        <div className="media-body mb-3 mb-lg-3">
            {/* Prikaz vremena dogadjaja */}
            <h3 className='h3-responsive font-weight-bold mr-3'>{time}</h3>

            {/* Naslov dogadjaja */}
            <h6 className='mt-0 font-weight-bold'> {title}</h6>
            <hr className='hr-bold my-2' />

            {/* Prikaz lokacije dogadjaja ako postoji */}
            {location && (
                <p className='font-smaller mb-0'>
                    <MDBIcon icon='location-arrow' /> {location}
                </p>
            )}
            {/* Prikaz opisa dogadjaja ako postoji */}
            {description && (
                <p className='p-2 mb-4 bg-light'>{description}</p>

            )}
        </div>
    );
};

export default EventDetails;