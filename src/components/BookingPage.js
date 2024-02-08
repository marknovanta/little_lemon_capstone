import BookingForm from "./BookingForm"

const BookingPage = ({availableTimes, availableSeats, formData, setFormData, dispatch, handleSubmit}) => {
    return(
        <BookingForm availableTimes={availableTimes} availableSeats={availableSeats} formData={formData} setFormData={setFormData} dispatch={dispatch} handleSubmit={handleSubmit}/>
    )
}

export default BookingPage