import React from 'react'
import "../css/project.css";
import { useState } from 'react';
import p11 from "../images-and-icons/p1-1.JPG";
import p12 from "../images-and-icons/p1-2.JPG";
import p14 from "../images-and-icons/p1-4.JPG";
import p21 from "../images-and-icons/p2-1.JPG";
import p22 from "../images-and-icons/p2-2.JPG";
import p23 from "../images-and-icons/p2-3.JPG";
import p33 from "../images-and-icons/p3-3.JPG";
import p32 from "../images-and-icons/p3-2.JPG";
function Projects() {


    const [Project, SetProject] = useState(false);

    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;
        console.log(scroll);
        if (scroll > 1600) {
            SetProject(true);
        }
        if (scroll < 1350) {
            SetProject(false);
        }



    });

    return (
        <div className='container-fluid project' id='projects'>
            <h1>Projects</h1>
            {Project && <div className="container-fluid area slide-in-left">
                <div className="project1">
                    <div className="crsl">
                        <div id="carouselExampleFade" class="carousel slide dark carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="4000">
                                    <img src={p11} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item" data-bs-interval="3000">
                                    <img src={p12} class="d-block w-100" alt="..." />
                                </div>

                                <div class="carousel-item" data-bs-interval="3000">
                                    <img src={p14} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="icons">
                            <h2>TechStack Used:</h2>
                            <span class="badge badge-dark">ReactJS</span>
                            <span class="badge badge-dark">MongoDB</span> <br />
                            <span class="badge badge-dark">NodeJS</span>
                            <span class="badge badge-dark">Express</span> <br />
                            <span class="badge badge-dark">HTML</span>
                            <span class="badge badge-dark">CSS</span>
                            <hr />
                            <a href="https://github.com/sahiltuli31/StartACampaign" rel="noreferrer" target="_blank"> <span class="badge badge-pill badge-github">Github</span></a>
                            <a href="https://startacampaign.herokuapp.com/" targte="_blank"> <span class="badge badge-pill badge-live">Live</span></a>

                        </div>
                    </div>
                    <div className="name">
                        <h1>Start A <br /> Campaign</h1>
                    </div>

                    <div className="description">

                        <p><span classname="bullet"> &#187;</span> A MERN Project with Multiple integrated Rest APIs and Context Api. <br /> &#187;  Allows you to create or Join a Campaign.  <br /> &#187; Capable of User authentication and Login.</p>
                    </div>
                </div>



                <div className="project2 ">
                    <div className="name2">
                        <h1>Algolator</h1>
                    </div>
                    <div className="crsl2">
                        <div className="icons">
                            <h2>TechStack Used:</h2>
                            <span class="badge badge-dark">ReactJS</span>
                            <span class="badge badge-dark">Bootstrap</span><br />
                            <span class="badge badge-dark">HTML</span>
                            <span class="badge badge-dark">CSS</span>
                            <br /> <hr /> <br />
                            <a rel="noreferrer" target="_blank" href="https://github.com/sahiltuli31/Algolator">  <span class="badge badge-pill badge-github">Github</span></a>
                            <a rel="noreferrer" target="_blank" href="https://algolator.herokuapp.com/"> <span class="badge badge-pill badge-live">Live</span> </a>

                        </div>
                        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src={p21} class="d-block w-100" alt="..." />

                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src={p22} class="d-block w-100" alt="..." />

                                </div>
                                <div class="carousel-item">
                                    <img src={p23} class="d-block w-100" alt="..." />

                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>

                </div>

                <div className="description description2">
                    <p><span classname="bullet"> &#187;</span> ReactJS App to implement and understand standard Data Structures and Algorithms. <br /> &#187;  Understand Data Structures and Standard Algorithms through Visualization and Code.  <br /> &#187; Find answers to Standard Algorithms for different Constraints.</p>
                </div>
                <div className="project1">
                    <div className="crsl">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>

                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={p32} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={p33} class="d-block w-100" alt="..." />
                                </div>

                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="icons">
                            <h2>TechStack Used:</h2>
                            <span class="badge badge-dark">HTML</span>
                            <span class="badge badge-dark">CSS</span> <br />
                            <span class="badge badge-dark">API Integration</span>
                            <hr />
                            <a rel="noreferrer" target="_blank" href="https://github.com/sahiltuli31/Weather-App">  <span class="badge badge-pill badge-github">Github</span></a>
                            <a rel="noreferrer" target="_blank" href="https://morning-cliffs-55727.herokuapp.com/"> <span class="badge badge-pill badge-live">Live</span></a>

                        </div>
                    </div>
                    <div className="name">
                        <h1>Weather <br /> Finder</h1>
                    </div>

                    <div className="description">

                        <p><span classname="bullet"> &#187;</span> Web Application to find Weather conditions of any Place By City Name <br /> &#187;  Implemented an external API to fetch data about latest temperature and weather conditions.</p>
                    </div>
                </div>
            </div>}
        </div >
    )
}

export default Projects
