class Form extends React.Component {

    render() {
        return (
            <div>
                <h5>Create Booking</h5>
                <form>
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
};

ReactDOM.render(<Form />, document.getElementById("root"));