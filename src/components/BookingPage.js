import BookingForm from "./BookingForm"

const BookingPage = ({availableTimes, availableSeats, formData, setFormData, dispatch}) => {
    return(
        <BookingForm availableTimes={availableTimes} availableSeats={availableSeats} formData={formData} setFormData={setFormData} dispatch={dispatch}/>
    )
}

export default BookingPage