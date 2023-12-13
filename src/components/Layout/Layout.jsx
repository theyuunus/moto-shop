import React from 'react'
import Routers from "../../Routers/Routers"
import Navbar from '../Navbar/Navbar'

export default function Layout() {
    return (
        <React.Fragment>
            <Navbar />
            <div>
                <Routers />
            </div>
        </React.Fragment>
    )
}