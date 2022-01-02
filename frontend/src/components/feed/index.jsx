import React from 'react';
import { Share } from '../shared';
import { Post } from '../posts';
export const Feed = () => {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};
