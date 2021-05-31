import React from 'react'
import { Link } from "react-router-dom"


const Home = () => {
    return (
        <div>
            <Link exact to="/beers">Beers</Link>
            <Link exact to="/random-beer">Find random beer !</Link>
            <Link exact to="/newbeer">Add a beer</Link>
        </div>
    )
}

export default Home
