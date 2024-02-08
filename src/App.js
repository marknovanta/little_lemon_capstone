import './App.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
