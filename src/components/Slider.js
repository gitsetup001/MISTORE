import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const Slider = ({ start }) => {
    return (
        <Carousel fade>


            {start.map((item) => (

                <div className='carousel-item' key={item}>

                    <img
                        className="d-block w-100"
                        src={item}
                        alt="First slide"
                    />

                </div>

            ))
            }

        </Carousel >
    )
}

export default Slider