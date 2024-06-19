import React, { useState, useEffect } from 'react'; // Import necessary React hooks and functions
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for navigation
import './Navbar.scss'; // Import the Navbar.scss file for styling
import { fetchData } from './ajax.cjs'; // Import the fetchData function from the ajax.cjs file

// Define the Header functional component
function Header() {
    // Define state variables using the useState hook
    const [isActive, setIsActive] = useState(false); // State to store whether the navbar is active (for mobile view)
    const [logo, setLogo] = useState('https://placehold.co/400x400'); // State to store the logo URL, initialized with a placeholder
    const [error, setError] = useState(null); // State to store any errors

    // Function to toggle the navbar's active state
    const toggleNavbar = () => {
        setIsActive(!isActive); // Toggle the isActive state
    };

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Define an asynchronous function to fetch the logo data
        const fetchLogo = async () => {
            try {
                // Fetch the logo data
                const data = await fetchData('logo-small', true, 'logo');
                // Update the logo state with the fetched data
                setLogo(data);
            } catch (error) {
                // Update the error state if there's an error fetching data
                setError(error);
            }
        };

        // Call the fetchLogo function
        fetchLogo();
    }, []); // Empty dependency array means this useEffect runs once after the initial render

    // Return the JSX to render the component
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation"> {/* Main navigation element with ARIA roles */}
            <div className="navbar-brand">
                <a className="navbar-item" href="/"> {/* Link to the home page with the logo */}
                    <img src={logo} alt='placeholder-logo'></img> {/* Logo image */}
                </a>

                <a
                    role="button"
                    className={`navbar-burger ${isActive ? 'is-active' : ''}`} // Apply 'is-active' class if isActive is true
                    aria-label="menu"
                    aria-expanded={isActive ? 'true' : 'false'} // ARIA attribute to indicate if the menu is expanded
                    onClick={toggleNavbar} // Call toggleNavbar on click
                >
                    <span aria-hidden="true"></span> {/* Hamburger icon line 1 */}
                    <span aria-hidden="true"></span> {/* Hamburger icon line 2 */}
                    <span aria-hidden="true"></span> {/* Hamburger icon line 3 */}
                </a>
            </div>

            <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}> {/* Apply 'is-active' class to menu if isActive is true */}
                <div className="navbar-start">
                    <Link to="/" className="navbar-item"> {/* Link to the Home page */}
                        Home
                    </Link>
                    {/* <Link to="/play" className="navbar-item">Play</Link> */} {/* Link to the Play page (commented out) */}
                    {/* <Link to="/history" className='navbar-item'>History</Link> */} {/* Link to the History page (commented out) */}
                    <Link to="/News" className="navbar-item"> {/* Link to the Development page */}
                        Development
                    </Link>
                    <Link to="/Team" className="navbar-item"> {/* Link to the Team page */}
                        Team
                    </Link>
                    {/* <a className="navbar-item" href="/">Community</a> */} {/* Link to the Community page (commented out) */}
                </div>
            </div>
        </nav>
    );
}

// Export the Header component as the default export
export default Header;
