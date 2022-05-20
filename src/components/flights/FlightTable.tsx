import React, { Component } from "react";
import Flight from "../../models/flight";
//import SongRow from "./SongRow";
import FlightTableColumns from "./FlightTableColumns";

type FlightTableProps = {
    filterText?: string;
    flights: Flight[];
}

type FlightTableState = {

}

class FlightTable extends Component<FlightTableProps, FlightTableState> {
  
    render() {
        return (
              <table className="table table-bordered table-striped table-hover table-highlight">
                <thead>
                  <FlightTableColumns />
                </thead>
                <tbody> 
                  {this.props.flights.map( (flight: Flight) =>  (  
                    <React.Fragment key={flight.Id}>
                      <tr id={`Flight${flight.Id}`}>
                        <td>{flight.Id}</td>
                        <td>{flight.DepartAirport.Name}</td>
                        <td>{flight.DepartDate.getDate()}</td>
                        <td>{flight.DepartDate.getHours() + ":" + flight.DepartDate.getMinutes() + ":" + flight.DepartDate.getSeconds()}</td>
                        <td>{flight.ArriveAirport.Name}</td>
                        <td>{flight.ArriveDate.getDate()}</td>
                        <td>{flight.ArriveDate.getHours() + ":" + flight.ArriveDate.getMinutes() + ":" + flight.ArriveDate.getSeconds()}</td>
                        <td>{flight.PassengerAmt}</td>
                        <td>{flight.PassengerLimit}</td>
                      </tr>
                    </React.Fragment>
                  ))};
                </tbody>
              </table>
        );
    };
}

export default FlightTable;