import React from 'react';
import { SocialIcon } from 'react-social-icons'; // Import the SocialIcon component
import './WhatsAppChatBubble.css'; // Optional: Styling

interface WhatsAppChatBubbleProps {
  phoneNumber: string; // WhatsApp number in international format (e.g., "1234567890")
  message?: string;    // Optional pre-filled message
}

const WhatsAppChatBubble: React.FC<WhatsAppChatBubbleProps> = ({ phoneNumber, message }) => {
  const handleChat = () => {
    const baseURL = `https://wa.me/${phoneNumber}`;
    const url = message ? `${baseURL}?text=${encodeURIComponent(message)}` : baseURL;

    // Open the link in a new tab
    window.open(url, '_blank');
  };

  return (
    <div className="whatsapp-chat-bubble" onClick={handleChat} title="Chat on WhatsApp">
      <SocialIcon network="whatsapp" bgColor="#25D366" style={{ height: 50, width: 50 }} />
    </div>
  );
};

export default WhatsAppChatBubble;