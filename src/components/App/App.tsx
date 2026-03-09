import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import WhatsAppChatBubble from '../WhatsAppChatBubble/WhatsAppChatBubble';
import { useEffect } from 'react';

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const container = document.querySelector('.App');
      if(container) container.scrollTop = 0;
    }, 0);
  }, [pathname]);
  
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
