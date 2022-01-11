import React from 'react';
import './index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Feed } from '../feed';
import { LoginHeader } from '../header';
import { useParams } from 'react-router-dom';
import noAvatar from '../../assets/people/noavatar.jpg';

export const Profile = () => {
    const [user, setUser] = useState({});
    const username = useParams().username;
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(
                `http://localhost:8800/api/users?username=${username}`
            );
            setUser(response.data);
        };
        fetchUser();
    }, [username]);
    return (
        <div>
            <LoginHeader />
            <div className="profile">
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                src={user.profilePicture || noAvatar}
                                alt=""
                                className="profileUserImg"
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">
                                {user.description}
                            </span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                    </div>
                </div>
            </div>
        </div>
    );
};
