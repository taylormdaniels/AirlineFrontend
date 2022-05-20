import React, { Component } from "react";
import FlightSearchBar from "./FlightSearchBar";
import FlightTable from "./FlightTable";
import Flight from "../../models/flight";

type FilterableFlightTableProps = {
  flights: Flight[];
}

type FilterableFlightTableState = {
  filterText: string;
}

class FilterableFlightTable extends Component<FilterableFlightTableProps, FilterableFlightTableState> {
  constructor(props: FilterableFlightTableProps) {
    super(props);
    this.state = {
      filterText: '',
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText: any) {
    this.setState({
      filterText: filterText
    });
}
  
  render() {
    return (
      <div>
        <FlightSearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <FlightTable
          flights={this.props.flights}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}


export default FilterableFlightTable;