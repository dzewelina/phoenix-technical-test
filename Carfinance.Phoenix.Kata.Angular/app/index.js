﻿class App extends React.Component {
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
                                    <td>{this.convertTime(booking.bookingTime)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    };

    convertTime = time => {
        const date = new Date(time);
        const day = `0${date.getDate()}`.slice(-2);
        const month = `0${date.getMonth() + 1}`.slice(-2);
        const year = date.getFullYear();
        const hours = `0${date.getHours()}`.slice(-2);
        const minutes = `0${date.getMinutes()}`.slice(-2);
        return `${day}/${month}/${year} ${hours}:${minutes}`
    };
};

ReactDOM.render(<App />, document.getElementById("root"));