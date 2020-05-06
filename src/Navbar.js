import React from 'react';

const Navbar = props => {
    return (
        <div className="simple-flex-row">
            <button>Get Songs</button> {/** TODO: the user should click this button to load the songs */}
            <h1>S-not-ify</h1>
            <input placeholder="Search by title or artist..."/>
        </div>
    )
}

export default Navbar;