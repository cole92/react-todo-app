import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './App.css';
import Event from './components/Event';
import EventModal from './components/EventModal';
import { addNewEvent, deleteEvent } from './components/EventService';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false, // Modal pocinje kao zatvoren
      events: [
        {
          id: 1,
          time: '09:30',
          title: 'Sastanak sa Aleksandrom',
          location: 'Kragujevac',
          description: 'Opis'
        },
        {
          id: 2,
          time: '10:30',
          title: 'Sastanak sa Lazarom',
          location: 'Aleksinac',
          description: 'Opis'
        },
        {
          id: 3,
          time: '12:00',
          title: 'Rucak',
          location: 'Banovo brdo',
          description: 'Vazno!'
        }
      ]
    }
  }
  // Metoda za uzimanje i promenu vrednosti u stanju iz input polja
  handleInputChange = inputName => value => {
    const nextValue = value;
    this.setState({
      [inputName]: nextValue
    });
  };

  // Metoda za otvaranje i zatvaranje modalnog prozora
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

   // Metoda za dodavanje novog dogadjaja (koristimo addNewEvent iz EventService.js)
   addEvent = () => {
    const newEvent = {
      time: this.state.time,
      title: this.state.title,
      location: this.state.location,
      description: this.state.description,
    };
    const updatedEvents = addNewEvent(this.state.events, newEvent); // Koristimo funkciju addNewEvent
    this.setState({
      events: updatedEvents,
      time: "",
      title: "",
      location: "",
      description: ""
    });
  };

  // Metoda za brisanje događaja (koristimo deleteEvent iz EventService.js)
  handleDelete = (eventId) => {
    const updatedEvents = deleteEvent(this.state.events, eventId); // Koristimo funkciju deleteEvent
    this.setState({ events: updatedEvents });
  };

  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          <MDBRow>
            {/* Leva kolona sa dogadjajima */}
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
                    onDelete={this.handleDelete} // Prosledjujemo metodu za brisanje događaja
                  />
                ))}
              </div>

              {/* Dugme za otvaranje modalnog prozora za dodavanje novog dogadjaja */}
              <h1 className='my-3'>
                <MDBRow className='mb-4'>
                  <MDBCol xs='3' md='6' className='mx-auto text-center'>
                    <button className='btn btn-info rounded' onClick={this.toggleModal}>
                      Add event
                    </button>
                  </MDBCol>
                </MDBRow>
              </h1>
            </MDBCol>

            {/* Desna kolona sa pregledom dogadjaja */}
            <MDBCol md='3'>
              <h3 className='text-uppercase my-3'>Schedule</h3>
              <h6 className='my-3'>
                It's going to be busy today. You have{' '}
                <b>{this.state.events.length} events</b> today
              </h6>

              {/* Prikaz vremenskih informacija */}
              <h1 className='my-3'>
                <MDBRow>
                  <MDBCol xs='3' className='text-center'>
                    <MDBIcon icon='sun' fixed />
                  </MDBCol>
                  <MDBCol xs='9'>Sunny</MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol xs='3' className='text-center'>
                    <MDBIcon icon='thermometer-three-quarters' fixed />
                  </MDBCol>
                  <MDBCol xs='9'>23&deg;C</MDBCol>
                </MDBRow>
              </h1>

              {/* Opis vremenskih uslova */}
              <p>
                Don't forget your sunglasses. Today will be dry and sunny,
                becoming warm in the afternoon with temperatures of between
                20 and 25 degrees.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <EventModal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          handleInputChange={this.handleInputChange}
          addEvent={this.addEvent}
        />
      </React.Fragment>
    );
  }
}

export default App;
