import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import './App.css';
import Event from './components/Event';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [
        {time: '09:30' , title: 'Sastanak sa Aleksandrom'},
        {time: '10:30', title: 'Sastanak sa Lazarom'},
        {time: '12:00', title: 'Rucak'}
      ]
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='9'>
              {this.myLoppFunction()}
            </MDBCol>
            <MDBCol md='3'>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    )
  }

  myLoppFunction() {
    const myArr = this.state.events.map(x => (
      <Event
        time={x.time}
        title={x.title}
      />
    ));
    console.log(myArr);
    return myArr
  }
};

export default App;
