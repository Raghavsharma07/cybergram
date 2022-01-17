import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import noavatar from '../../assets/people/noavatar.jpg';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
const Post = ({ post }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(
                `http://localhost:8800/api/users?userId=${post.userId}`
            );
            setUser(res.data);
        };
        fetchUser();
    }, [post.userId]);
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user.username}`}>
                            <img
                                className="postProfileImg"
                                src={user.profilepicture || noavatar}
                                alt="img"
                            />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">
                            {format(post.createdAt)}
                        </span>
                    </div>
                    <div className="postTopRight"></div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.description}</span>
                    <img className="postImg" src={PF + post.img} alt=""></img>
                </div>
                <div className="postBottom"></div>
            </div>
        </div>
    );
};
export default Post;
