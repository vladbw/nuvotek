import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='outlet-container'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
