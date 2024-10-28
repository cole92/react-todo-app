const STORAGE_KEY = 'events';

// Funkcija za preuzimanje podataka iz localStorage
export const getEventsFromStorage = () => {
    const storedEvents = localStorage.getItem(STORAGE_KEY);
    if (storedEvents) {
        return JSON.parse(storedEvents);
    }
    return [];
};

// Funkcija za cuvanje podataka u localStorage
export const saveEventstoStorage = (events) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
};