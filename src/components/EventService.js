// Funkcija za dodavanje događaja u niz
export const addNewEvent = (events, newEvent) => {
    let newArray = [...events]; // Kopiramo postojeci niz dogadjaja
    newArray.push({
      id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1, // Ako niz nije prazan, uvecavamo poslednji ID, inace postavljamo ID na 1
      time: newEvent.time,
      title: newEvent.title,
      location: newEvent.location,
      description: newEvent.description,
    });
    return newArray;
};

// Funkcija za brisanje dogadjaja iz niza
export const deleteEvent = (events, eventId) => {
    return events.filter(event => event.id !== eventId); // Filtriramo dogadjaje koji nemaju dati ID
};
