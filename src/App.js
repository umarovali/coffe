import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs';
import Create from './Pages/Create/Create';
import Home from './Pages/Home/Home';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;