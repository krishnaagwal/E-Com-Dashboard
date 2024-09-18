import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js'
import Footer from './components/Footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Product Listing Component</h1>} />
        <Route path="/add" element={<h1>Product Adding Component</h1>} />
        <Route path="/update" element={<h1>Product Updating Component</h1>} />
        <Route path="/logout" element={<h1>Profile Logout Component</h1>} />
        <Route path="/profile" element={<h1>Profile Component</h1>} />
      </Routes>
      </BrowserRouter> 
      <Footer />
    </div>
  );
}

export default App;
