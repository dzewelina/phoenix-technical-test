class App extends React.Component {
    state = {
        bookings: []
    };

    componentDidMount() {
        fetch('http://localhost:52363/booking')
            .then(res => res.json())
            .then(bookings => this.setState({ bookings }));  
    };
    
    render() {
        const { bookings } = this.state;
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Contact Name</th>
                            <th>Contact Number</th>
                            <th>No of Diners</th>
                            <th>Table Number</th>
                            <th>Booking Time</th>
                        </tr>
                        {bookings.map((booking, i) => {
                            return (
                                <tr key={i}>
                                    <td>{booking.contactName}</td>
                                    <td>{booking.contactNumber}</td>
                                    <td>{booking.numberOfPeople}</td>
                                    <td>{booking.tableNumber}</td>
                                    <td>{booking.bookingTime}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    };
};

ReactDOM.render(<App />, document.getElementById("root"));