import React from 'react'; // Import the necessary React functions

// Define the NewsModal functional component
const NewsModal = ({ isActive, onClose, news }) => {
    // Return the JSX to render the component
    return (
        // Modal container with conditional class based on isActive prop
        <div className={`modal ${isActive ? 'is-active' : ''}`}>
            {/* Modal background with onClick handler to close the modal */}
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card"> {/* Bulma class for modal card styling */}
                <header className="modal-card-head"> {/* Bulma class for modal card header */}
                    <p className="modal-card-title">{news.title}</p> {/* Display the news title */}
                    {/* Button to close the modal */}
                    <button className="delete" aria-label="close" onClick={onClose}></button>
                </header>
                <section className="modal-card-body"> {/* Bulma class for modal card body */}
                    <figure className="image is-4by3"> {/* Bulma class to set the aspect ratio of the image */}
                        <img src={news.imageUrl} alt={news.imageAltText} /> {/* Image element with src and alt attributes from news prop */}
                    </figure>
                    <h2 className="title is-5">{news.subtitle}</h2> {/* Display the news subtitle */}
                    {/* Display the long description, split by paragraphs */}
                    {news.longDescription?.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p> // Display each paragraph with a unique key
                    ))}
                </section>
                <footer className="modal-card-foot"> {/* Bulma class for modal card footer */}
                    {/* Button to close the modal */}
                    <button className="button is-success" onClick={onClose}>Close</button>
                </footer>
            </div>
        </div>
    );
};

// Export the NewsModal component as the default export
export default NewsModal;
