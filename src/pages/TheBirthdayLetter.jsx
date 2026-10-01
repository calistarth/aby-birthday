import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p>Hi, happy birthday sayangku ~</p>
                    <p>
                        Pertama-tama, terima kasih byy karena sudah bertahan sampai hari ini! 
                        You've survived a lot of storms, and I know it never been easy. I am so, so proud 
                        of you for that. Di umur yang ke-22 ini, 
                        aku harap kamu selalu jadi Aby yang aku kenal. With everything ahead of you, aku
                        juga berharap kamu terus tumbuh jadi orang yang lebih kuat, hebat, dan bahagia ♡
                    </p>
                    <p>
                        Enjoy ur new chapter byy! hope God bless you and let happiness comes to
                        you in every single seconds.
                    </p>
                    <p style={{ textAlign: "right" }}>hugs and love,</p>
                    <p style={{ textAlign: "right" }}>kit-cat</p>
                </div>
            </div>

            <div className="title">
                <p>There’s something else I want to tell you...</p>
            </div>
            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/thanks-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">thank you</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/sorry-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">a little sorry</span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                That's It!
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
