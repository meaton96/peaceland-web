import { useEffect } from 'react'; // Import the useEffect hook from React

// Define the Play functional component
const Play = () => {
    // useEffect hook to run the download logic once after the component mounts
    useEffect(() => {
        // Create a new anchor element
        const link = document.createElement('a');
        // Set the href attribute to the file URL, using the environment's base URL
        link.href = `${import.meta.env.BASE_URL}test.txt`;
        // Set the download attribute to specify the file name for download
        link.download = 'test.txt';
        // Append the anchor element to the document body
        document.body.appendChild(link);
        // Programmatically click the anchor element to trigger the download
        link.click();
        // Remove the anchor element from the document body after the click
        document.body.removeChild(link);
    }, []); // Empty dependency array means this useEffect runs once after the initial render

    // Return the JSX to render the component
    return (
        <div className='container py-5 my-5 has-text-centered title is-2'> {/* Container with Bulma classes for padding, margin, text centering, and title size */}
            <div className="section is-large"> {/* Bulma class to style the section */}
                <p>
                    {/* Display message with a fallback link for manual download */}
                    Your download should start automatically. If not, 
                    <a href={`${import.meta.env.BASE_URL}test.txt`} download>click here</a>
                </p>
            </div>
        </div>
    );
};

// Export the Play component as the default export
export default Play;
