import { useState, Fragment } from "react";
import "../styles/chatbot.css";
import { ApiRequestPostGeneral } from "../api/client";
import { CHATBOT_ENDPOINT, CHATBOT_URL } from "../constants";
function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    //    const [userMessages, setUserMessages] = useState([]);
    //   const [aiMessages, setAiMessages] = useState([]);
    const [chatpairs, setChatPairs] = useState([]);
    const [input, setInput] = useState("");
    const [ai_response, set_ai_response] = useState(false)
//wow
    const handleSend = () => {
        if (!input.trim()) return;
        let body = {
            userSentMessage: input
        }
        ApiRequestPostGeneral(CHATBOT_URL, CHATBOT_ENDPOINT, body)
            .then((response) => {
                return response.json()
            }).then(json => {
                console.log(json.data)
                setChatPairs(prev => [...prev, { user_msg: input, ai_msg: json.data }]);
                setInput(""); // clear the input
                set_ai_response(true)
            })
            .catch((err) => {
                console.log(err)
            })
    };

    return (
        <div className="chatbot-div">
            {/* Chat panel — shown above button when isOpen is true */}
            {isOpen && (
                <div className="chatbot-panel">
                    {ai_response && chatpairs.map((pair, i) => (
                        <Fragment key={i}>
                            <div className="chatbot-user-msg">{pair.user_msg}</div>
                            <div className="chatbot-ai-msg">{pair.ai_msg}</div>
                        </Fragment>
                    ))}
                    <div className="chatbot-message-area">
                        <input
                            className="chatbot-input"
                            type="text"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                            }} // controlled input
                            onKeyDown={(e) => e.key === "Enter" && handleSend()} // send on Enter key too
                        />
                        <button onClick={handleSend} className="chatbot-send-btn">Enter</button>
                    </div>
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
