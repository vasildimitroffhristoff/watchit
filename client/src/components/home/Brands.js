import React from 'react';

import img1 from '../../brands/1.png';
import img2 from '../../brands/2.jpg';
import img3 from '../../brands/3.jpg';
import img4 from '../../brands/4.jpg';
import img5 from '../../brands/5.jpg';


const Brands = () => {
    return(
        <div className="brands">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="">
                        <img alt="" src={img1}/>
                    </div>
                    <div className="">
                        <img alt="" src={img2}/>
                    </div>
                    <div className="">
                        <img alt="" src={img3}/>
                    </div>
                    <div className="">
                        <img alt="" src={img4}/>
                    </div>
                    <div className="">
                        <img alt="" src={img5}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands;