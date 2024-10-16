import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import './App.css';
import Event from './components/Event';


class App extends Component {
  state = {

  };
  
  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='9'>
            <Event />
            <Event />
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
