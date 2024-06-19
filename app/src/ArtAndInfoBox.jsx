// Importing necessary libraries from React and PropTypes for defining React components and their props
import React from 'react';
import PropTypes from 'prop-types';
// Importing a CSS file to style the ArtAndInfoBox component
import './ArtAndInfoBox.scss'; 

// Defining a functional React component named ArtAndInfoBox
// This component takes in props: title, body, imageUrl, and imageOnRight
const ArtAndInfoBox = ({ title, body, imageUrl, imageOnRight = false }) => {
    return (
        // Creating a Bulma column container with vertical centering and margin/padding adjustments
        <div className="columns is-vcentered my-1 py-2">
            {/* First column for text content; the order is determined by imageOnRight prop */}
            <div className={`column is-half `} style={{ order: imageOnRight ? 2 : 1 }}>
                {/* Title with conditional class for text alignment and padding based on imageOnRight prop */}
                <h2 id='art-title' className={`title ${!imageOnRight ? 'has-text-right pr-5' : 'pl-5'}`}>{title}</h2>
                {/* Box container for the body text with background and text color; class changes based on imageOnRight */}
                <div className={`box has-text-black has-background-white ${imageOnRight ? 'box-left' : 'box-right'}`}>
                    {/* Subtitle class used for styling the body text */}
                    <p className="subtitle">{body}</p>
                </div>
            </div>
            {/* Second column for the image; order and additional classes depend on imageOnRight prop */}
            <div className={`column is-half ${!imageOnRight ? 'image-left' : 'image-right'}`} style={{ order: imageOnRight ? 1 : 2 }}>
                {/* Figure and image elements to display the image */}
                <figure className="image">
                    <img src={imageUrl} alt={title} />
                </figure>
            </div>
        </div>
    );
};

// Defining the prop types for the ArtAndInfoBox component to ensure correct data types are passed
ArtAndInfoBox.propTypes = {
    // title is a required string
    title: PropTypes.string.isRequired,
    // body is a required string
    body: PropTypes.string.isRequired,
    // imageUrl is a required string
    imageUrl: PropTypes.string.isRequired,
    // imageOnRight is an optional boolean, defaulting to false
    imageOnRight: PropTypes.bool
};

// Exporting the ArtAndInfoBox component for use in other parts of the application
export default ArtAndInfoBox;
