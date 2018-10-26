import React from 'react';
import { Link } from 'react-router-dom'

const Banner = () => {
    return(
        <div className="container">
            <div className="banner">
                <div className="text-box">
                    <h4 className="text-box__discount">-60%</h4>
                    <h3 className="text-box__heading">Global Sale</h3>
                    <Link to="/products" className="text-box__btn">Buy now</Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;