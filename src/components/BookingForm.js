
const BookingForm = ({availableTimes, availableSeats, formData, setFormData, dispatch, handleSubmit}) => {

    return(
        <>
            <div className="flex-container">
                <div>
                    <h1 className="padding">Reserve a table</h1>
                    <form onSubmit={handleSubmit}>
                        <fieldset className="padding">
                            <div className="padding">
                                <label htmlFor="res-date" className="padding">Date</label>
                                <input
                                    className="padding"
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
                                    className="padding"
                                    id="res-time"
                                    name="time"
                                    value={formData.time}
                                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                                    required
                                >
                                    {availableTimes.map((time) => <option key={time} value={time}>{time}</option>)}
                                </select>
                            </div>
                            <div className="padding">
                                <label htmlFor="guests" className="padding">Number of guests</label>
                                <select
                                    className="padding"
                                    id="guests"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                                    required
                                >
                                    {availableSeats.map((seat) => <option key={seat} value={seat}>{seat}</option>)}
                                </select>
                            </div>
                            <div className="padding">
                                <label htmlFor="occasion" className="padding">Occasion</label>
                                <select
                                    className="padding"
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
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BookingForm