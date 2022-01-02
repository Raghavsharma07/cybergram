import React from 'react';
import './index.css';
import Becks from '../../assets/people/1.jpg';
export const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        className="shareProfileImg"
                        src={Becks}
                        alt="img"
                    ></img>
                    <input
                        placeholder="What's in your mind Shanu?"
                        className="shareInput"
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <span className="shareOptionText">
                                Photo or Video
                            </span>
                        </div>

                        <div className="shareOption">
                            <span className="shareOptionText">Locations</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
};
