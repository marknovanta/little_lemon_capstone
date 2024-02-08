import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import Chicago from './Chicago';
import { useEffect, useState } from 'react';
import { useReducer } from 'react';
import Confirm from './Confirm';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate()
    const [done, setDone] = useState(false)
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: 0,
        occasion: "none"
    })

    useEffect(()=>{
        if (done) {
            navigate("/confirm")
        }
    }, [done])

    const handleSubmit = (e) => {
        e.preventDefault()
        setDone(true)
    }

    const availableSeats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const updateTimes = (state, date) => {
        return {availableTimes: fetchAPI(new Date())}
    }

    const randomGen = (gen) => {
        let x = 2**35 -31
        let y = 957759
        let z = gen % x
        return () => {return(z = z * y % x)/x}
    }

    const fetchAPI = (date) => {
        let result = []
        let random = randomGen(date.getDate())
        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i+':00')
            } else if (random() > 0.5) {
                result.push(i+':30')
            }
        }
        return result
    }

    const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

    return(
        <main>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/about' element={<Chicago />} />
                <Route path='/booking' element={<BookingPage availableTimes={availableTimes} availableSeats={availableSeats} formData={formData} setFormData={setFormData} dispatch={dispatch} handleSubmit={handleSubmit}/>} />
                <Route path='/confirm' element={<Confirm />} />
            </Routes>
        </main>
    )
}

export default Main