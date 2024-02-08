import { useState } from "react"

const BookingForm = () => {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: 0,
        occasion: "none"
    })

    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    const availableSeats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return(
        <>
            <h1 className="padding">Reserve a table</h1>
            <form>
                <div className="padding">
                    <label htmlFor="res-date" className="padding">Date</label>
                    <input
                        type="date"
                        id="res-date"
                        name="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
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