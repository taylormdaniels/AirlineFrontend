import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import FlightTable from "../../components/flights/FlightTable";
import Flight from "../../models/flight";
import FlightTableColumns from "./FlightTableColumns";

type FlightListViewProps = {
    flights: Flight[];
}

type FlightListViewState = {

}

class FlightListView extends React.Component<FlightListViewProps, FlightListViewState> {
    render(): React.ReactNode {
        return (
            <div className="App container">
                <div className="jumbotron">
                    <h2>Flights List</h2>
                </div>
                <FlightTableColumns />
                <FlightTable flights={this.props.flights}/>
            </div>

        );
    }
}


export default FlightListView;