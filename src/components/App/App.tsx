import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import WhatsAppChatBubble from '../WhatsAppChatBubble/WhatsAppChatBubble';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='outlet-container'>
        <Outlet/>
      </div>
      <WhatsAppChatBubble 
        phoneNumber="40728001020" 
        message="Bună ziua! Aș vrea să aflu mai multe despre Nuvotek Academy." 
      />
      <Footer/>
    </div>
  );
}

export default App;
