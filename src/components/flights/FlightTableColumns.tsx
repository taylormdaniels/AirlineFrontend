import React from "react";

const FlightTableColumns = (props: any): JSX.Element => {
    
    return (
        <>
            <tr>
                <th>Flight Number</th>
                <th>Departure Airport</th>
                <th>Departure Date</th>
                <th>Departure Time</th>
                <th>Arrival Airport</th>
                <th>Arrival Date</th>
                <th>Arrival Time</th>
                <th>Passenger Count</th>
                <th>Passenger Limit</th>
            </tr>
        </>            
    );
};

export default FlightTableColumns;