import React from 'react'; // Import the necessary React functions

// Define the TeamMemberCard functional component
const TeamMemberCard = ({ src, alt, name, jobTitle, workDates, blurb }) => {
    // Return the JSX to render the component
    return (
        // Column container with Bulma classes for responsive layout
        <div className="column is-one-quarter-desktop is-half-tablet">
            {/* Card container with Bulma classes */}
            <div className="card">
                {/* Card image section with Bulma classes */}
                <div className="card-image">
                    {/* Figure element to hold the image with Bulma aspect ratio class */}
                    <figure className="image is-4by3">
                        {/* Image element with src and alt attributes from props */}
                        <img src={src} alt={alt} />
                    </figure>
                </div>
                {/* Card content section with Bulma class */}
                <div className="card-content">
                    {/* Media object container with Bulma class */}
                    <div className="media">
                        {/* Media content container with Bulma class */}
                        <div className="media-content">
                            {/* Title element with Bulma class */}
                            <p className="title is-5">{name}</p> {/* Display the name of the team member */}
                            {/* Subtitle element with Bulma class */}
                            <p className="subtitle is-6">{jobTitle}</p> {/* Display the job title of the team member */}
                            {/* Paragraph to display work dates */}
                            <p>{workDates}</p> {/* Display the work dates of the team member */}
                        </div>
                    </div>
                    {/* Content section for the blurb with Bulma class */}
                    <div className="content">
                        {blurb} {/* Display the blurb/description of the team member */}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export the TeamMemberCard component as the default export
export default TeamMemberCard;
