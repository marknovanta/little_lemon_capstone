import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import Chicago from './Chicago';
import { useState } from 'react';
import { useReducer } from 'react';

const Main = () => {

    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: 0,
        occasion: "none"
    })

    const availableSeats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const updateTimes = (state, date) => {
        return state
    }

    const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

    return(
        <main>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/about' element={<Chicago />} />
                <Route path='/booking' element={<BookingPage availableTimes={availableTimes} availableSeats={availableSeats} formData={formData} setFormData={setFormData} dispatch={dispatch}/>} />
            </Routes>
        </main>
    )
}

export default Main