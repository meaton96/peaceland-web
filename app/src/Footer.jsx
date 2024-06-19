import React, { useState, useEffect } from 'react'; // Import necessary React hooks and functions
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for navigation
import { fetchData } from './ajax.cjs'; // Import the fetchData function from the ajax.cjs file
import './Footer.scss'; // Import the Footer.scss file for styling

// Define the Footer functional component
const Footer = () => {
    // Define state variables using the useState hook
    const [logo, setLogo] = useState('https://placehold.co/250x150'); // State to store the logo URL, initialized with a placeholder
    const [error, setError] = useState(null); // State to store any errors

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Define an asynchronous function to fetch the logo data
        const fetchLogo = async () => {
            try {
                // Fetch the logo data
                const data = await fetchData('logo-large', true, 'logo');
                // Update the logo state with the fetched data
                setLogo(data);
            } catch (error) {
                // Update the error state if there's an error fetching data
                setError(error);
                // Log the error to the console
                console.error('Error fetching logo:', error);
            }
        };

        // Call the fetchLogo function
        fetchLogo();
    }, []); // Empty dependency array means this useEffect runs once after the initial render

    // Return the JSX to render the component
    return (
        <div className="footer-background has-text-white"> {/* Container with a background class for styling */}
            <footer className="container">
                <nav className='full-height'>
                    <div className='is-flex'>
                        <Link to="/" className='p-1'>Home</Link> {/* Link to the Home page */}
                        {/* <Link to="/history" className='p-1'>History</Link> */} {/* Link to the History page (commented out) */}
                        <Link to="/News" className='p-1'>Development</Link> {/* Link to the Development page */}
                        <Link to="/Team" className='p-1'>Team</Link> {/* Link to the Team page */}
                    </div>
                </nav>
                <hr className='has-background-white'/> {/* Horizontal rule for separation */}
                <div className="footer-content">
                    <div className="logo-text">
                        <a href="#"> {/* Link wrapping the logo image */}
                            <img src={logo} alt="placeholder-logo" /> {/* Logo image */}
                        </a>
                        <p>
                            Site design by <a href="#">Michael Eaton</a><br /> {/* Site designer's name with a link */}
                            The source code is licensed
                            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. <br /> {/* Link to the MIT license */}
                            The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>. {/* Link to the Creative Commons license */}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Export the Footer component as the default export
export default Footer;
