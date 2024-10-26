import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './App.css';
import Event from './components/Event';

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
  // (currying tehnika, computed property names)
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

  // Metoda za brisanje dogadjaja na osnovu id-a
  handleDelete = (eventId) => {
    const events = this.state.events.filter(e => e.id !== eventId);
    this.setState({ events });
  };
  // Metoda za azuriranje state-a
  addEvent = () => {
    let newArray = [...this.state.events] // Kopija state-a
    newArray.push({
      id: newArray.length ? newArray[newArray.length -1].id + 1 : 1,
      time: this.state.time,
      title: this.state.title,
      location: this.state.location,
      description: this.state.description,
    });
    this.setState({
      events: newArray,
      time: "",
      title: "",
      location: "",
      description: ""
    });
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
                {/* Mapiranje kroz niz događaja i prikaz Event komponente za svaki */}
                {this.state.events.map(x => (
                  <Event
                    key={x.id}
                    id={x.id}
                    time={x.time}
                    title={x.title}
                    location={x.location}
                    description={x.description}
                    onDelete={this.handleDelete} // Prosledjivanje metode za brisanje dogadjaja
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

        {/* Modal prozor za dodavanje novog dogadjaja */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggleModal}>
                <MDBModalHeader
                  className='text-center'
                  titleClass='w-100 font-weight-bold'
                  toggle={this.toggleModal}
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
                      getValue={this.handleInputChange('time')}
                    />
                    <MDBInput 
                      name='title'
                      label='Title'
                      icon='edit'
                      hint='Briefing'
                      group
                      type='text'
                      getValue={this.handleInputChange('title')}
                    />
                    <MDBInput 
                      name='location'
                      label='Location (optional)'
                      icon='map'
                      group
                      type='text'
                      getValue={this.handleInputChange('location')}
                    />
                    <MDBInput 
                      name='descritpion'
                      label='Descritpion (optional)'
                      icon='sticky-note'
                      group
                      type='text'
                      getValue={this.handleInputChange('description')}
                    />
                    <button
                      type='button'
                      className='btn btn-info rounded'
                      onClick={() => {
                        this.toggleModal();
                        this.addEvent();
                      }}
                    >
                      Add Event
                    </button>
                  </form>
                </MDBModalBody>
                <MDBModalFooter className='justify-content-center'></MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    );
  }
}

export default App;
