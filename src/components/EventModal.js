import React from "react";
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

const EventModal = ({ isOpen, toggle, handleInputChange, addEvent }) => {
    {/* Modal prozor za dodavanje novog dogadjaja */ }
    return (
        <MDBModal isOpen={isOpen} toggle={toggle}>
            <MDBModalHeader
                className='text-center'
                titleClass='w-100 font-weight-bold'
                toggle={toggle}
            >
                Add new event
            </MDBModalHeader>
            <MDBModalBody>
                <form className='mx-3 gray-text'>
                    <MDBInput
                        name='time'
                        label='Time'
                        icon='clock'
                        hint='12:30'
                        group
                        type='text'
                        getValue={handleInputChange('time')}
                    />
                    <MDBInput
                        name='title'
                        label='Title'
                        icon='edit'
                        hint='Briefing'
                        group
                        type='text'
                        getValue={handleInputChange('title')}
                    />
                    <MDBInput
                        name='location'
                        label='Location (optional)'
                        icon='map'
                        group
                        type='text'
                        getValue={handleInputChange('location')}
                    />
                    <MDBInput
                        name='description'
                        label='Description (optional)'
                        icon='sticky-note'
                        group
                        type='text'
                        getValue={handleInputChange('description')}
                    />
                    <button
                        type='button'
                        className='btn btn-info rounded'
                        onClick={() => {
                            toggle();
                            addEvent();
                        }}
                    >
                        Add Event
                    </button>
                </form>
            </MDBModalBody>
            <MDBModalFooter className='justify-content-center'></MDBModalFooter>
        </MDBModal>
    );
};

export default EventModal;