import React from 'react';
import './index.css';
import noAvatar from '../../assets/people/noavatar.jpg';
export const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        className="shareProfileImg"
                        src={noAvatar}
                        alt="img"
                    ></img>
                    <input
                        placeholder="File your complaints "
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
