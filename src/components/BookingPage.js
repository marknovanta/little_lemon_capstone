import BookingForm from "./BookingForm"

const BookingPage = ({availableTimes, availableSeats, formData, setFormData}) => {
    return(
        <BookingForm availableTimes={availableTimes} availableSeats={availableSeats} formData={formData} setFormData={setFormData}/>
    )
}

export default BookingPage