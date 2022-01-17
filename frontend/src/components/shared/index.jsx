import React from 'react';
import './index.css';
import noAvatar from '../../assets/people/noavatar.jpg';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';
export const Share = () => {
    const { user } = useContext(AuthContext);
    const description = useRef();
    const [file, setFile] = useState(null);
    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            description: description.current.value,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newPost.img = filename;
            try {
                await axios.post('http://localhost:8800/api/upload', data);
            } catch (err) {
                console.log(err);
            }
        }
        try {
            await axios.post('http://localhost:8800/api/posts', newPost);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <Link to={`/profile/${user.username}`}>
                        {' '}
                        <img
                            className="shareProfileImg"
                            src={user.profilePicture || noAvatar}
                            alt="img"
                        ></img>
                    </Link>
                    <input
                        placeholder="File your complaints "
                        className="shareInput"
                        ref={description}
                    />
                </div>
                <hr className="shareHr" />
                <form onSubmit={submitHandler} className="shareBottom">
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <span className="shareOptionText">
                                Photo or Video
                            </span>
                            <input
                                style={{ display: 'none' }}
                                type="file"
                                id="file"
                                name="file"
                                accept=".jpeg,.png,.jpg"
                                onChange={(e) => setFile(e.target.files[0])}
                            ></input>
                        </label>
                    </div>
                    <button type="submit" className="shareButton">
                        Share
                    </button>
                </form>
            </div>
        </div>
    );
};
