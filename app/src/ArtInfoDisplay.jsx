import React, { useEffect, useState } from 'react'; // Import necessary React hooks and functions
import ArtAndInfoBox from './ArtAndInfoBox'; // Import the ArtAndInfoBox component
import { fetchArtInfoBoxes } from './ajax.cjs'; // Import the fetchArtInfoBoxes function from the ajax.cjs file
import './ArtInfoDisplay.scss'; // Import the ArtInfoDisplay.scss file for styling

// Define the ArtInfoDisplay functional component
const ArtInfoDisplay = () => {
    // Define state variables using the useState hook
    const [artInfoBoxes, setArtInfoBoxes] = useState([]); // State to store art info boxes data
    const [error, setError] = useState(null); // State to store any errors

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Define an asynchronous function to fetch art info boxes data
        const fetchData = async () => {
            try {
                // Fetch the art info boxes data
                const data = await fetchArtInfoBoxes('art-info-boxes');
                // Update the artInfoBoxes state with the fetched data
                setArtInfoBoxes(data);
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
        <div className="art-background"> {/* Container with a background class for styling */}
            <div className='container'>
                {/* Map over the artInfoBoxes array and render an ArtAndInfoBox component for each item */}
                {artInfoBoxes.map((box, index) => (
                    <ArtAndInfoBox
                        key={box.id} // Unique key for each art info box
                        title={box.title} // Title of the art info box
                        body={box.description} // Description/body of the art info box
                        imageUrl={box.imageUrl} // URL for the image in the art info box
                        imageOnRight={index % 2 !== 0} // Boolean to determine if the image should be on the right
                    />
                ))}
            </div>
        </div>
    );
};

// Export the ArtInfoDisplay component as the default export
export default ArtInfoDisplay;
