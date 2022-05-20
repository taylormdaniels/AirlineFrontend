import Airport from "./airport";

interface Flight {
    Id: number;
    DepartAirport: Airport;
    ArriveAirport: Airport;
    DepartDate: Date;
    ArriveDate: Date;
    PassengerLimit: number;
    PassengerAmt: number;
}

export default Flight;