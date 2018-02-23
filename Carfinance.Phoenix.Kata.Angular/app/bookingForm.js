class Form extends React.Component {

    render() {
        return (
            <div>
                <h5>Create Booking</h5>
                <form onSubmit={this.handleBooking}>
                    <div className='form-group'>
                        <label>Contact Name</label>
                        <input type='text' className='form-control' id='contactName' />
                    </div>
                    <div className='form-group'>
                        <label>Contact Number</label>
                        <input type='tel' className='form-control' id='contactNumber' />
                    </div>
                    <div className='form-group'>
                        <label>Number of People</label>
                        <input type='number' className='form-control' id='numberOfPeople' />
                    </div>
                    <div className='form-group'>
                        <label>Table Number</label>
                        <input type='number' className='form-control' id='tableNumber' />
                    </div>
                    <div className='form-group'>
                        <label>Booking Time</label>
                        <input type='datetime-local' className='form-control' id='bookingTime' placeholder='dd/mm/yyyy --:--' />
                    </div>
                    <button type="submit" className="btn btn-success">Save</button>
                </form>
            </div>    
        );
    };

    handleBooking = event => {
        const newBooking = {
            contactName: event.target.elements.contactName.value,
            contactNumber: event.target.elements.contactNumber.value,
            numberOfPeople: Number(event.target.elements.numberOfPeople.value),
            tableNumber: Number(event.target.elements.tableNumber.value),
            bookingTime: event.target.elements.bookingTime.value
        };
    };
};

ReactDOM.render(<Form />, document.getElementById("root"));