import React from "react";
import "../css/about.css";
import { useState } from "react";
function About() {

    const [open1, Setopen1] = useState(false);
    const [open2, Setopen2] = useState(false);


    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;
        if (scroll > 250) {
            Setopen1(true);
        }
        if (scroll === 0) {
            Setopen1(false);
        }
        if (scroll > 350) {
            Setopen2(true);
        }
        if (scroll === 0) {
            Setopen2(false);
        }



    });

    return (

        <div className="about" id="about">
            <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
            <div className="about-2">
                {open1 && <h1 className="about-heading slide-in-left ">About Me</h1>}
                {open2 && <img
                    src="https://sdk.bitmoji.com/render/panel/6ce76d26-9c7a-4fd2-8675-f5d4225363d6-f34285b9-895a-44da-a199-1640b7609c2e-v1.png?transparent=1&palette=1"
                    className="icon slide-in-left"
                    alt=""
                />}
                {open2 && <p className="slide-in-right">
                    <span className="about-name"> W </span><b> elcome To my Portfolio</b>. <br />

                    I am a <b>Passionate Programmer </b > 💻
                    and a <b>Web Developer </b> 🧩 Enthusiast,
                    exploring the fields of <b>Front-end and Back-end </b> 🛠 <b> Web Development </b> in <b> MERN stack.</b>
                    My Major intrests are <b>Problem Solving </b>
                    and Designing Appealing <b>UI</b>🎨.
                    I am currently a Pre-final year student 🎓 at <b>NIT Jalandhar</b> 🏛, and
                    pursuing my B.Tech in <b>  Electronics and Communication</b>📲. I am also Exploring the fields of Competitive Programming
                    , Currently I am 3-⭐ on <b> CodeChef</b>  and <b> LeetCode.</b>
                </p>}
            </div>
        </div >
    );
}

export default About;
