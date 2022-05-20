import React, { ChangeEventHandler, PureComponent } from "react";

type FlightSearchBarProps = {
    filterText: string;
    onFilterTextChange: ChangeEventHandler<HTMLInputElement>;
};

type FlightSearchBarState = {
    filterText: string;
};


class FlightSearchBar extends PureComponent<FlightSearchBarProps, FlightSearchBarState> {
    constructor(props: FlightSearchBarProps) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
    }
    state: FlightSearchBarState = {
        filterText: "",
    };
    
    handleFilterTextChange(e: any) {
        this.setState({
            filterText: e.target.value
        });
        this.props.onFilterTextChange(e.target.value);
    }

    handleSearchFormSubmit(e: any) {
        e.preventDefault();
    }
    
    render() {
      return (
        <form onSubmit={this.handleSearchFormSubmit}>
          <div className="mb-5 row">
            <label htmlFor="flightSearchInput" className="col-sm-2 form-label">Search</label>
            <br />
            <br />
            <div className="col-sm-10">
              <input 
                id="flightSearchInput"
                type="text" 
                className="form-control"
                value={this.state.filterText}
                onChange={this.handleFilterTextChange}
                />
              </div>
            </div>
            <button type="submit">Search</button>
        </form>
      );
    }
  }

export default FlightSearchBar;