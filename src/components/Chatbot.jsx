import { useState } from "react";
import "../styles/chatbot.css";

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="chatbot-div">
            {/* Chat panel — shown above button when isOpen is true */}
            {isOpen && (
                <div className="chatbot-panel">
                    <p>Chatbot panel</p>
                </div>
            )}
            <button
                className="chatbot-button"
                onClick={() => setIsOpen(prev => !prev)}
            >
                Chatbot
            </button>
        </div>
    );
}

export default Chatbot;
