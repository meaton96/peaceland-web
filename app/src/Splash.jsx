import React, { useEffect, useState } from 'react'; // Import necessary React hooks and functions
import './Splash.scss'; // Import the Splash.scss file for styling
import { fetchData, fetchTitles, fetchGame } from './ajax.cjs'; // Import the fetchData, fetchTitles, and fetchGame functions from the ajax.cjs file
import textBackdrop from '/t.png'; // Import the text backdrop image

// Define the Splash functional component
const Splash = () => {
    // Define state variables using the useState hook
    const [videoUrl, setVideoUrl] = useState(null); // State to store the video URL
    const [titles, setTitles] = useState({ title: '', subtitle: '' }); // State to store the titles (title and subtitle)
    const [error, setError] = useState(null); // State to store any errors

    // Define a style object for the background box
    const boxStyle = {
        backgroundImage: `url(${textBackdrop})`, // Set the background image
        backgroundSize: 'cover', // Cover the entire element with the background image
        backgroundRepeat: 'no-repeat', // Do not repeat the background image
        backgroundPosition: 'center', // Center the background image
    };

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Define an asynchronous function to fetch content data
        const fetchContent = async () => {
            try {
                // Fetch the video URL
                const url = await fetchData('splash-bg', true, 'bg');
                // Update the videoUrl state with the fetched URL
                setVideoUrl(url);

                // Fetch the title data
                const titleData = await fetchTitles('splash-titles');
                // Update the titles state with the fetched data
                setTitles(titleData);
            } catch (error) {
                // Update the error state if there's an error fetching data
                setError(error);
            }
        };

        // Call the fetchContent function
        fetchContent();
    }, []); // Empty dependency array means this useEffect runs once after the initial render

    // Function to handle the download button click
    const handleDownloadClick = async () => {
        try {
            // Fetch the game URL
            const gameUrl = await fetchGame('demo');
            // Redirect to the game URL to start the download
            window.location.href = gameUrl;
        } catch (error) {
            // Log the error to the console
            console.error('Error downloading game:', error);
        }
    };

    // Render an error message if there's an error
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Return the JSX to render the component
    return (
        <div>
            <section className="hero is-fullheight"> {/* Bulma class to make the hero section full height */}
                {/* Render the background video if the videoUrl is available */}
                {videoUrl && (
                    <video className="bg-video" autoPlay loop muted> {/* Video element with autoplay, loop, and muted attributes */}
                        <source src={videoUrl} type="video/mp4" /> {/* Source element with the video URL */}
                        Your browser does not support the video tag.
                    </video>
                )}
                <div className="hero-body splash-cover"> {/* Bulma class for hero body with additional custom class */}
                    <div className="container">
                        <div className="translucent" style={boxStyle}> {/* Container with translucent class and custom background style */}
                            <h1 className="title">{titles.title || '#'}</h1> {/* Display the title or a placeholder */}
                            <h2 className="subtitle">{titles.subtitle || '#'}</h2> {/* Display the subtitle or a placeholder */}
                            <div className="has-text-centered"> {/* Center the button */}
                                <button className='custom-button' onClick={handleDownloadClick}>Play</button> {/* Button to download the game */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Export the Splash component as the default export
export default Splash;
