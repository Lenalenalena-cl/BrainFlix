import React, { useState } from 'react';
import uploadVideoThumbnail from "./../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import './UploadPage.scss';

const UploadPage = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({ title: false, description: false });

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const title = event.target.uploadVideoTitle.value;
        const description = event.target.uploadVideoDescription.value;
        const newErrors = { title: !title, description: !description };

        setErrors(newErrors);

        if (!title || !description) {
            alert('Please fill out both the title and description fields.');
            return;
        }

        alert('Video uploaded successfully!');
        navigate('/');
    };

    const handleCancel = (event) => {
        event.preventDefault();
        navigate('/');
    };

    return (
        <main className="upload-wrapper">
            <h1 className="upload__header">Upload Video</h1>
            <div className="upload__content-wrapper">
                <div className="upload__thumbnail-wrapper">
                    <h4 className="upload__thumbnail-label">Video Thumbnail</h4>
                    <img className="upload__thumbnail-img" src={uploadVideoThumbnail} alt="man with a baton who is ready to race on a track and field arena" />
                </div>
                <form className="upload__form" id="uploadForm" onSubmit={handleSubmit}>
                    <label className="form__title-label" htmlFor="uploadVideoTitle">Title Your Video</label>
                    <input 
                        className={`form__title-input ${errors.title ? 'error' : ''}`} 
                        type="text" 
                        id="uploadVideoTitle" 
                        name="uploadVideoTitle" 
                        placeholder="Add a title to your video"
                    />
                    <label className="form__description-label" htmlFor="uploadVideoDescription">Add a Video Description</label>
                    <textarea 
                        className={`form__description-input ${errors.description ? 'error' : ''}`} 
                        name="uploadVideoDescription" 
                        id="uploadVideoDescription" 
                        placeholder="Add a description to your video"
                    />
                </form>
            </div>
            <div className="form__btn-wrapper">
                <button form="uploadForm" className="form__btn--publish" type="submit">Publish</button>
                <button form="uploadForm" className="form__btn--cancel" type="button" onClick={handleCancel}>Cancel</button>
            </div>
        </main>
    );
};

export default UploadPage;