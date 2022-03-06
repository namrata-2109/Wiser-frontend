import React, { useState } from 'react'
import './HomePage.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const HomePage = () => {

    const[toggleButton, setToggle] = useState(1);

     const toggle = (index) => {
        setToggle(index)
     }
    return (
        <div className='screen'>
            <div className='icon'>
                <i class="fa-solid fa-wifi wifi"/>
                <span className='icon_text'>
                    Wiser
                </span>
            </div>

            <div className='head_button'>
                <button className= {toggleButton === 1 ? " active-tabs-aa" : "all"} onClick={() => toggle(1)}>All</button>
                <button className= {toggleButton === 2 ? " active-tabs-bb" : "videos"}  onClick={() => toggle(2)}>Videos</button>
                <button className= {toggleButton === 3 ? " active-tabs-cc" : "pdf"}  onClick={() => toggle(3)}>PDF</button>
            </div>

            <div className='rectangle'>
                <div className='row '>
                    <div className='col-12 col-sm-12 col-md-6 square'>
                        <i className="square-left fa-solid fa-3x fa-file-video"></i>
                        <p className='square-middle'>Java - OOPS for beginners.mp4</p>
                        <i className="square-right fa-solid fa-2x fa-download"></i>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 square '>
                        <i className="square-left fa-solid fa-3x fa-file-lines"></i>
                        <p className='square-middle'>Java - OOPS for beginners.mp4</p>
                        <i className="square-right fa-solid fa-2x fa-download"></i>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6 square '>
                        <i className="square-left fa-solid fa-3x fa-file-pdf"></i>
                        <p className='square-middle'>Java - OOPS for beginners.mp4</p>
                        <i className="square-right fa-solid fa-2x fa-download"></i>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 square '>
                        <i className="square-left fa-solid fa-3x fa-file-lines"></i>
                        <p className='square-middle'>Java - OOPS for beginners.mp4</p>
                        <i className="square-right fa-solid fa-2x fa-download"></i>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6 square '>
                        <i className="square-left fa-solid fa-3x fa-file-lines"></i>
                        <p className='square-middle'>Java - OOPS for beginners.mp4</p>
                        <i className="square-right fa-solid fa-2x fa-download"></i>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 square '>
                        <i className="square-left fa-solid fa-3x fa-file-lines"></i>
                        <p className='square-middle'>Java - OOPS for beginners.mp4</p>
                        <i className="square-right fa-solid fa-2x fa-download"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage