import Airport from '../models/airport';
import Flight from '../models/flight';
import Passenger from '../models/passenger';
import Reservation from '../models/reservation';
import axios from "axios";


const http = axios.create({
    baseURL: "https://localhost:7126",
    headers: {
        'Content-Type': 'application/json'
    }
});

// Airport service
const getAirports = () => {
    return http.get<Array<Airport>>("/api/Airports");
};

const getAirport = (id: number) => {
    return http.get<Airport>(`api/Airport/${id}`);
};

// Passenger service

const getPassengers = () => {
    return http.get<Array<Passenger>>("/api/Passengers");
};

const getPassenger = (id: number) => {
    return http.get<Passenger>(`api/Passenger/${id}`);
};

const createPassenger = (passenger: Passenger) => {
    return http.post<Passenger>("api/Passenger", passenger);
};

const updatePassenger = (passenger: Passenger) => {
    return http.put<Passenger>(`api/Passenger/${passenger.Id}`, passenger);
};

const deletePassenger = (id: number) => {
    return http.delete<Passenger>(`api/Passenger/${id}`);
};


// Flight service

const getFlights = () => {
    return http.get<Array<Flight>>("api/Flight");
};

const getFlight = (id: number) => {
    return http.get<Flight>(`api/Flight/${id}`);
};

const createFlight = (flight: Flight) => {
    return http.post<Flight>("api/Flight", flight);
};

const updateFlight = (flight: Flight) => {
    return http.put<Flight>(`api/Flight/${flight.Id}`, flight);
};


const deleteFlight = (id: number) => {
    return http.delete<Flight>(`api/Flight/${id}`);
};

// Reservation service
const getReservations = () => {
    return http.get<Array<Reservation>>("api/Reservation");
};

const getReservation = (id: number) => {
    return http.get<Reservation>(`api/Reservation/${id}`);
};

const updateReservation = (reservation: Reservation) => {
    return http.put<Reservation>(`api/Reservation/${reservation.Id}`, reservation);
};

const createReservation = (reservation: Reservation) => {
    return http.post<Reservation>("api/Reservation", reservation);
};

const deleteReservation = (id: number) => {
    return http.delete<Reservation>(`api/Reservation/${id}`);
};



const APIService = {
    getAirports,
    getAirport,
    createPassenger,
    updatePassenger,
    deletePassenger,
    getPassengers,
    getPassenger,
    getFlights,
    getFlight,
    createFlight,
    updateFlight,
    deleteFlight,
    getReservations,
    getReservation,
    updateReservation,
    createReservation,
    deleteReservation
};

export default APIService;