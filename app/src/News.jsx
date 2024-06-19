import React, { useEffect, useState } from 'react'; // Import necessary React hooks and functions
import NewsCard from './NewsCard'; // Import the NewsCard component
import NewsModal from './NewsModal'; // Import the NewsModal component
import treeImg from '/tree.png'; // Import the tree image
import './News.scss'; // Import the News.scss file for styling
import { fetchNewsArticles } from './ajax.cjs'; // Import the fetchNewsArticles function from the ajax.cjs file

// Define the News functional component
const News = () => {
    // Define state variables using the useState hook
    const [newsData, setNewsData] = useState([]); // State to store the array of news articles
    const [isModalActive, setIsModalActive] = useState(false); // State to store whether the modal is active
    const [selectedNews, setSelectedNews] = useState(null); // State to store the currently selected news article
    const [currentPage, setCurrentPage] = useState(1); // State to store the current page number
    const articlesPerPage = 6; // Number of articles to display per page

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Define an asynchronous function to fetch the news articles data
        const fetchData = async () => {
            try {
                // Fetch the news articles data
                const data = await fetchNewsArticles('dev-news-blogs');
                // Update the newsData state with the fetched data
                setNewsData(data);
            } catch (error) {
                // Log the error to the console
                console.error('Error fetching news articles:', error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []); // Empty dependency array means this useEffect runs once after the initial render

    const totalPages = Math.ceil(newsData.length / articlesPerPage); // Calculate the total number of pages

    // Function to handle the previous page button click
    const handlePrevPage = () => {
        // Set the current page to the previous page, but not less than 1
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    // Function to handle the next page button click
    const handleNextPage = () => {
        // Set the current page to the next page, but not more than the total pages
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const indexOfLastArticle = currentPage * articlesPerPage; // Calculate the index of the last article on the current page
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage; // Calculate the index of the first article on the current page
    const currentArticles = newsData.slice(indexOfFirstArticle, indexOfLastArticle); // Get the articles for the current page

    // Function to handle the read more button click on a news card
    const handleReadMore = (news) => {
        setSelectedNews(news); // Set the selected news article
        setIsModalActive(true); // Set the modal to active
    };

    // Function to handle the close button click on the modal
    const handleCloseModal = () => {
        setIsModalActive(false); // Set the modal to inactive
        setSelectedNews(null); // Clear the selected news article
    };

    // Return the JSX to render the component
    return (
        <div className='container'>
            <section className="hero is-large"
                style={{
                    backgroundImage: treeImg ? `url(${treeImg})` : 'none', // Set the background image if treeImg is available
                    backgroundSize: 'cover', // Cover the entire section with the background image
                    backgroundPosition: 'center' // Center the background image
                }}>
                <div className="hero-body">
                    <div className="is-pulled-right">
                        <p className="title is-2">Development Progress</p> {/* Title for the section */}
                    </div>
                </div>
            </section>

            <section className="section columns is-multiline">
                {/* Map over the current articles array and render a NewsCard component for each item */}
                {currentArticles.map((news, index) => (
                    <NewsCard
                        key={index} // Unique key for each news card
                        src={news.imageUrl} // Source URL for the news image
                        alt={news.imageAltText} // Alt text for the news image
                        title={news.title} // Title of the news article
                        datePublished={news.datePublished} // Publication date of the news article
                        subtitle={news.subtitle} // Subtitle of the news article
                        onReadMore={() => handleReadMore(news)} // Function to handle read more button click
                    />
                ))}
            </section>
            <nav className="pagination is-centered pb-5" role="navigation" aria-label="pagination">
                {/* Previous page button */}
                <button className="pagination-previous" onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                {/* Next page button */}
                <button className="pagination-next" onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </nav>

            {/* Render the NewsModal component if a news article is selected */}
            {selectedNews && (
                <NewsModal
                    isActive={isModalActive} // Prop to indicate if the modal is active
                    onClose={handleCloseModal} // Function to handle close button click
                    news={selectedNews} // Prop to pass the selected news article data
                />
            )}
        </div>
    );
};

// Export the News component as the default export
export default News;
