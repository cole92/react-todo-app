import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import {MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import './App.css';
import Event from './components/Event';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [
        {
         id: 1, 
         time: '09:30', 
         title: 'Sastanak sa Aleksandrom',
         location: 'Kragujevac',
         description: 'Opis'},
        {
          id: 2,
          time: '10:30',
          title: 'Sastanak sa Lazarom',
          location: 'Aleksinac',
          description: 'Opis'},
        {
          id: 3,
          time: '12:00',
          title: 'Rucak',
          location: 'Banovo brdo',
          description: 'Ungala'}
      ]
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='9'>
              <h2 className='text-uppercase my-3'>Today:</h2>
              <div id="schedule-items">
              {this.state.events.map(x => (
                <Event 
                  key={x.id}
                  id={x.id}
                  time={x.time}
                  title={x.title}
                  location={x.location}
                  description={x.description}
                />
              ))}
              </div>
              <h1 className='my-3'>
                <MDBRow className='mb-4'>
                  <MDBCol xs='3' md='6' className='mx-auto text-center'>
                    <button className='btn btn-info rounded'>Add event</button>
                  </MDBCol>
                </MDBRow>
              </h1>
            </MDBCol>
            <MDBCol md='3'>
              <h3 className='text-uppercase my-3'>Schedule</h3>
              <h6 className='my-3'>
                It's going to be busy that today. You have {' '}
                <b>{this.state.events.length} events </b> today
              </h6>
              <h1 className='my-3'>
                <MDBRow>
                  <MDBCol xs='3' className='text-center'>
                    <MDBIcon icon='sun' fixed/>
                  </MDBCol>
                  <MDBCol xs='9'>
                    Sunny
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol xs='3' className='text-center'>
                  <MDBIcon icon='thermometer-three-quarters' fixed/>
                  </MDBCol>
                  <MDBCol xs='9'>
                    23&deg;C
                  </MDBCol>
                </MDBRow>
              </h1>
              <p>
                Don't forget your sunglases. Today will be dry and sunny,
                becoming warm in the afternoon with temperatures of between
                20 and 25 degrees. 
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    )
  }
};

export default App;
