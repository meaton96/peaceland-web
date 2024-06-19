import React, { useEffect, useState } from 'react'; // Import necessary React hooks and functions
import TeamMemberCard from './TeamMemberCard'; // Import the TeamMemberCard component
import { fetchTeamGroups } from './ajax.cjs'; // Import the fetchTeamGroups function from the ajax.cjs file
import './Team.scss'; // Import the Team.scss file for styling

// Define the TeamMembers functional component
const TeamMembers = () => {
    // Define state variables using the useState hook
    const [teamGroups, setTeamGroups] = useState([]); // State to store team groups data
    const [error, setError] = useState(null); // State to store any errors
    const [activeGroup, setActiveGroup] = useState(null); // State to store the currently active group

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Define an asynchronous function to fetch team groups data
        const fetchData = async () => {
            try {
                // Fetch the team groups data
                const data = await fetchTeamGroups('team-groups');
                // Update the teamGroups state with the fetched data
                setTeamGroups(data);
            } catch (error) {
                // Log the error and update the error state if there's an error fetching data
                console.error('Error fetching team groups:', error);
                setError(error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []); // Empty dependency array means this useEffect runs once after the initial render

    // Function to toggle the active group
    const toggleGroup = (groupName) => {
        // Set the active group to the provided group name if it's not already active, otherwise set it to null
        setActiveGroup(activeGroup === groupName ? null : groupName);
    };

    // Render an error message if there's an error
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Return the JSX to render the component
    return (
        <div className='container'>
            {/* Section for the main title */}
            <section className="section has-text-centered">
                <h1 className='title'>Meet the Team</h1>
            </section>

            {/* Section for the Project Director */}
            <section className="section has-text-centered">
                <h2 className="title ">Project Director</h2>
                <div className="columns project-director">
                    <div className="column">
                        {/* Placeholder image for the Director */}
                        <img src="https://via.placeholder.com/150?text=Director" alt="Director" className='is-pulled-right' />
                    </div>
                    <div className="column">
                        <div className='container has-text-left'>
                            <h3 className="title is-3 has-text-black">John Doe</h3>
                            {/* Description of the Project Director */}
                            <p>John is an experienced project director with a proven track record of delivering successful projects.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section for the Founders */}
            <section className="section has-text-centered">
                <h2 className="title">Founders</h2>
                <div className="columns is-multiline">
                    {/* Render founders if teamGroups data is available */}
                    {teamGroups.length > 0 && teamGroups[0].founders.map((member, index) => (
                        <div key={member.id} className="column is-one-third">
                            {member.name}
                        </div>
                    ))}
                </div>
            </section>

            {/* Section for the Summer Cohort */}
            <section className="section has-text-centered">
                <h1 className="title">Summer 2024</h1>
                <h2 className="title">Project Managers</h2>
                <div className="section columns is-multiline is-variable is-3">
                    {/* Render project managers if teamGroups data is available */}
                    {teamGroups.length > 0 && teamGroups[0].pms.map((member) => (
                        <TeamMemberCard
                            key={member.id} // Unique key for each team member
                            src={member.headshot} // Image source for the member's headshot
                            alt={member.name} // Alt text for the image
                            name={member.name} // Member's name
                            jobTitle={member.role} // Member's role/job title
                            workDates={member.dates} // Member's work dates
                            blurb={member.description} // Member's description/blurb
                        />
                    ))}
                </div>
            </section>

            {/* Render sections for various groups like developers, designers, etc. */}
            {['developers', 'designers', 'UIUX', 'narrative', 'artists'].map((groupName) => (
                <div key={groupName}>
                    <section className="section has-text-centered">
                        <h2
                            className={`title section-title ${activeGroup === groupName ? '' : 'collapsed'}`} // Class based on active group
                            onClick={() => toggleGroup(groupName)} // Toggle active group on click
                        >
                            {groupName.charAt(0).toUpperCase() + groupName.slice(1)} {/* Capitalize the group name */}
                        </h2>
                        {/* Render the group's members if it is the active group */}
                        {activeGroup === groupName && (
                            <div className="section columns is-multiline">
                                {teamGroups.length > 0 && teamGroups[0][groupName].map((member) => (
                                    <TeamMemberCard
                                        key={member.id} // Unique key for each team member
                                        src={member.headshot} // Image source for the member's headshot
                                        alt={member.name} // Alt text for the image
                                        name={member.name} // Member's name
                                        jobTitle={member.role} // Member's role/job title
                                        workDates={member.dates} // Member's work dates
                                        blurb={member.description} // Member's description/blurb
                                    />
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            ))}
        </div>
    );
};

// Export the TeamMembers component as the default export
export default TeamMembers;
