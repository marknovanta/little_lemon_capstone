import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import Chicago from './Chicago';

const Main = () => {
    return(
        <main>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/about' element={<Chicago />} />
                <Route path='/booking' element={<BookingPage />} />
            </Routes>
        </main>
    )
}

export default Main