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
            </MDBCol>
            <MDBCol md='3'>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    )
  }
};

export default App;
