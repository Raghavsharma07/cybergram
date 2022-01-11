import React from 'react';
import { useEffect, useState } from 'react';
import { Share } from '../shared';
import Post from '../posts';
import axios from 'axios';
import './index.css';
export const Feed = ({ username }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = username
                ? await axios.get(
                      'http://localhost:8800/api/posts/profile/' + username
                  )
                : await axios.get(
                      'http://localhost:8800/api/posts/timeline/61d5cc3e480b50537e771c79'
                  );
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                <br />
                <h3 className="feedHeading"> COMPLAINTS</h3>
                {posts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    );
};
