import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]} availableSeats={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} formData={()=>null} setFormData={()=>null} dispatch={()=>null} handleSubmit={()=>null}/>);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
});
