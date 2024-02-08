
const BookingForm = ({availableTimes, availableSeats, formData, setFormData, dispatch}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }



    return(
        <>
            <h1 className="padding">Reserve a table</h1>
            <form onSubmit={handleSubmit}>
                <div className="padding">
                    <label htmlFor="res-date" className="padding">Date</label>
                    <input
                        type="date"
                        id="res-date"
                        name="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        required
                    />
                </div>
                <div className="padding">
                    <label htmlFor="res-time" className="padding">Time</label>
                    <select
                        id="res-time"
                        name="time"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                    >
                        {availableTimes.map((time) => <option key={time} value={time}>{time}</option>)}
                    </select>
                </div>
                <div className="padding">
                    <label htmlFor="guests" className="padding">Number of guests</label>
                    <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    >
                        {availableSeats.map((seat) => <option key={seat} value={seat}>{seat}</option>)}
                    </select>
                </div>
                <div className="padding">
                    <label htmlFor="occasion" className="padding">Occasion</label>
                    <select
                        id="occasion"
                        name="occasion"
                        value={formData.occasion}
                        onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                    >
                        <option value="none">None</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </div>
                <div className="padding">
                    <button type="submit">Reserve table</button>
                </div>
            </form>
        </>
    )
}

export default BookingForm