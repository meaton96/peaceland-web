import React, { useEffect, useState } from 'react'; // Import necessary React hooks and functions
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS for the react-responsive-carousel
import { Carousel } from 'react-responsive-carousel'; // Import the Carousel component from react-responsive-carousel
import './ImageGallery.scss'; // Import the ImageGallery.scss file for styling
import { fetchImageCarousel } from './ajax.cjs'; // Import the fetchImageCarousel function from the ajax.cjs file

// Define the ImageGallery functional component
const ImageGallery = () => {
    // Define state variables using the useState hook
    const [images, setImages] = useState([]); // State to store the array of images
    const [error, setError] = useState(null); // State to store any errors

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Define an asynchronous function to fetch the image carousel data
        const fetchData = async () => {
            try {
                // Fetch the image carousel data
                const data = await fetchImageCarousel('img-carousel');
                // Update the images state with the fetched data
                setImages(data);
            } catch (error) {
                // Update the error state if there's an error fetching data
                setError(error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []); // Empty dependency array means this useEffect runs once after the initial render

    // Render an error message if there's an error
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Return the JSX to render the component
    return (
        <div className="background"> {/* Container with a background class for styling */}
            <div className="container has-text-centered"> {/* Centered container for the gallery */}
                <h2 className="gallery-title">Image Gallery Title</h2> {/* Gallery title */}
                <Carousel
                    centerMode={true} // Enable center mode
                    centerSlidePercentage={50} // Center slide occupies 50% of the carousel width
                    emulateTouch={true} // Enable touch emulation
                    infiniteLoop={true} // Enable infinite loop mode
                >
                    {/* Map over the images array and render a Carousel slide for each item */}
                    {images.map((image, index) => (
                        <div key={index}> {/* Unique key for each slide */}
                            <img src={image.src} alt={image.alt} /> {/* Image source and alt text */}
                            <p className="legend">{image.caption}</p> {/* Image caption */}
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

// Export the ImageGallery component as the default export
export default ImageGallery;
