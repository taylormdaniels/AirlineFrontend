import Flight from "./flight";
import Passenger from "./passenger";

export interface Reservation {
    Id: number;
    Flight: Flight;
    Passenger: Passenger;
    Terminal: string;
};

export default Reservation;