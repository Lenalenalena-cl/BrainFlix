import Comment from '../Comment/Comment.jsx'
import './CommentSection.scss'
import profilePic from '../../assets/images/Mohan-muruge.jpg';

import { useState } from "react";

import axios from "axios";

import { postComment } from '../../utils/utils.js';

const CommentSection = ({mainVideo, selectedVideoId, setMainVideo}) => {

    const [ comment, setComment ] = useState("")

    const comments = mainVideo.comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    const handleCommentSubmit = async (event) => {
    
        event.preventDefault();

        const newComment = {
            name: "Mohan Muruge", 
            comment
        }

        try {
            const res = await axios.post(postComment(selectedVideoId), newComment) 
            setMainVideo((previousComment) => ({
                ...previousComment , comments: [res.data, ...previousComment.comments]
            }))
            setComment("");

        }
        catch(error) {
            console.log(error);
        }
 
    }

    return (
        <section className='comments-section'>
            <p className="comments-section__count">{mainVideo.comments.length} Comments</p>
            <div className="comments-section__form-wrapper">
                <img className="comments-section__form-profile-pic" src={profilePic} alt="side profile of Mohan" />
                <form className="comments-section__form" onSubmit={handleCommentSubmit}>
                    <label className="comments-section__label" htmlFor="comment">Join the Conversation</label>
                    <div className="comment-section__add-comment">
                        <textarea className="comments-section__input" name="comment" id="comment" placeholder="Add a new comment" value={comment} onChange={(event) => { setComment(event.target.value)}}></textarea>
                        <button className="comments-section__button-submit">Comment</button>
                    </div>
                </form>
            </div>
            <ul className="comments-section__list">
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        name={comment.name}
                        comment={comment.comment}
                        timestamp={comment.timestamp}
                    />
                ))}
            </ul>
        </section>
    );
}

export default CommentSection;