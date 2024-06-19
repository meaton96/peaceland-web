import React, { useState } from 'react';

const History = () => {

    return (
        <div className="container">
            <section className="section is-medium">
                <h1 className="title is-2">History</h1>
                <div className="columns">
                    <div className="column is-half">
                        <img src='https://placehold.co/600x400'></img>
                    </div>
                    <div className="column box">
                        <div className="block">
                            <h2 className="subtitle">This is a subtitle</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="block">
                            <h2 className="subtitle">This is a subtitle</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h1 className="title is-2">The Conflict</h1>
                <div className="columns">
                    <div className="column box">
                        <div className="block">
                            <h2 className="subtitle">This is a subtitle</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="column is-one-third">
                        <img src='https://placehold.co/600x400'></img>
                    </div>
                    <div className="column box">
                        <div className="block">
                            <h2 className="subtitle">This is a subtitle</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section is-medium">
            <h1 className="title is-2">Present Day</h1>
                <div className="columns">
                    <div className="column box">
                        <div className="block">
                            <h2 className="subtitle">This is a subtitle</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="block">
                            <h2 className="subtitle">This is a subtitle</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="column is-half">
                        <img src='https://placehold.co/600x400'></img>
                    </div>
                </div>
            </section>
        </div>
    );

};

export default History;