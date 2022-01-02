import React from 'react';
import './index.css';
import Becks from '../../assets/people/1.jpg';
export const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Becks} alt="img" />
                        <span className="postUsername">RAGHAV</span>
                        <span className="postDate">5 MIN AGO</span>
                    </div>
                    <div className="postTopRight"></div>
                </div>
                <div className="postCenter">
                    <span className="postText">POW COUPLE</span>
                    <img className="postImg" src={Becks} alt="img"></img>
                </div>
                <div className="postBottom"></div>
            </div>
        </div>
    );
};
