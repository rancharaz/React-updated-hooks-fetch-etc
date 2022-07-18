import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Aboutus = () => {
    return (
        <div>
            <nav>
                <Link to="/homepage">Homepage</Link> |
                <Link to="/aboutus"> About us</Link> |
                <Link to="/gallery"> Gallery</Link>

            </nav>

            <h1>About us</h1>
            <h1><Outlet /></h1>

        </div>
    )
}

export default Aboutus