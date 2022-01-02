import React from 'react';
import './index.css';
import { Feed } from '../feed';
import { LoginHeader } from '../header';
import cover from '../../assets/cover.jpg';

export const Profile = () => {
    return (
        <div>
            <LoginHeader />
            <div className="profile">
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            {/* <img
                                src={cover}
                                alt=""
                                className="profileCoverImg"
                            /> */}
                            <img
                                src={cover}
                                alt=""
                                className="profileUserImg"
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Raghav Sharma</h4>
                            <span className="profileInfoDesc">
                                Hello My Friends
                            </span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                    </div>
                </div>
            </div>
        </div>
    );
};
