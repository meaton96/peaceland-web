import React from 'react'; // Import the necessary React functions

// Define the NewsCard functional component
const NewsCard = ({ src, alt, title, datePublished, subtitle, onReadMore }) => {
    // Return the JSX to render the component
    return (
        <div className="column is-one-third"> {/* Bulma class to set the width of the column */}
            <div className="card"> {/* Bulma class to style the card */}
                <div className="card-image"> {/* Bulma class to style the card's image */}
                    <figure className="image is-4by3"> {/* Bulma class to set the aspect ratio of the image */}
                        <img src={src} alt={alt} /> {/* Image element with src and alt attributes from props */}
                    </figure>
                </div>
                <div className="card-content"> {/* Bulma class to style the card's content */}
                    <div className="media"> {/* Bulma class for media object styling */}
                        <div className="media-content"> {/* Bulma class for the media content */}
                            <p className="title is-4">{title}</p> {/* Title of the news article */}
                            <time dateTime={datePublished}>{datePublished}</time> {/* Publication date of the news article */}
                        </div>
                    </div>
                    <div className="content"> {/* Bulma class for the card's content */}
                        {subtitle} {/* Subtitle of the news article */}
                        <br />
                        {/* Link to read more, which prevents the default action and calls the onReadMore function */}
                        <a href="#" onClick={(e) => { e.preventDefault(); onReadMore(); }}>Read more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export the NewsCard component as the default export
export default NewsCard;
