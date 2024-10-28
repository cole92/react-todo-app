import React from "react";
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

const EventModal = ({ isOpen, toggle, handleInputChange, addEvent }) => {
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
                    {/* Polje za unos vremena */}
                    <MDBInput
                        name='time'
                        label='Time'
                        icon='clock'
                        hint='12:30'
                        group
                        type='text'
                        onChange={(e) => handleInputChange('time')(e.target.value)}
                    />
                    {/* Polje za unos naslova */}
                    <MDBInput
                        name='title'
                        label='Title'
                        icon='edit'
                        hint='Briefing'
                        group
                        type='text'
                        onChange={(e) => handleInputChange('title')(e.target.value)}
                    />
                    {/* Polje za unos lokacije */}
                    <MDBInput
                        name='location'
                        label='Location (optional)'
                        icon='map'
                        group
                        type='text'
                        onChange={(e) => handleInputChange('location')(e.target.value)}
                    />
                    {/* Polje za unos opisa */}
                    <MDBInput
                        name='description'
                        label='Description (optional)'
                        icon='sticky-note'
                        group
                        type='text'
                        onChange={(e) => handleInputChange('description')(e.target.value)}
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