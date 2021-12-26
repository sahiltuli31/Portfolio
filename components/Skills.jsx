import React from 'react'
import "../css/skills.css"
import { useState } from 'react'
function Skills() {

    const [web, Setweb] = useState(false);
    const [cp, Setcp] = useState(false);

    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;
        console.log(scroll);
        if (scroll > 950) {
            Setweb(true);
            Setcp(true);
        }
        if (scroll < 650) {
            Setweb(false);
            Setcp(false);
        }



    });
    return (
        <div className='skills' id='skills' >
            {web && <h1 className="main-heading " >Skills</h1>}
            <div className='container-fluid text-area'>
                {web && <div className='web d-flex scale-in-bottom'>
                    <div className="left">
                        <div className="icons ">
                            <div className="icons-group">
                                <i className="devicon-nodejs-plain-wordmark colored icons node" ></i>
                                <i className="devicon-html5-plain-wordmark colored icons html"></i>
                                <i className="devicon-css3-plain-wordmark colored icons"></i>
                                <i className="devicon-javascript-plain colored icons js"></i>
                                <i className="devicon-npm-original-wordmark colored icons npm"></i>
                                <div className="top-space"></div>
                                <i className="devicon-react-original-wordmark colored"></i>
                                <i className="devicon-bootstrap-plain-wordmark colored icons boot"></i>
                                <i className="devicon-mongodb-plain-wordmark colored"></i>
                                <i className="devicon-heroku-plain-wordmark colored icons heroku"></i>
                                <i className="devicon-express-original-wordmark colored icons ex"></i>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="card">
                            <div className="card-body cb">
                                <h3 className="web-d"> <b> Web Development </b></h3>
                                <br />
                                <h6 className="web-d-content">Worked with different Front-end technologies like <b>HTML,CSS,Javascript.</b> Familiar With
                                    Back-end technologies like <b> NodeJS, ReactJS, Express, JQuery, MongoDB. </b> <br /> Also Worked with <b>Git, GitHub </b>
                                    and other website hosting services like <b>Heroku and Mailchimp. </b> </h6>
                            </div>
                        </div>
                    </div>
                </div>}
                {cp && <div className='cp d-flex'>
                    <div className="left">
                        <div className="card scale-in-bottom">
                            <div className="card-body">
                                <h3 className="web-d"> <b> Programming </b></h3>

                                <h6 className="web-d-content">Proficiency in <b>Problem solving</b> in <b>Data Structure and Algorithms in C++.</b> Consistent participation in Contests on
                                    <b> CodeChef, Codeforces and Leetcode.</b> <br /> Solved more than<b> 600+ problems </b>
                                    on platforms like <b>GFG, Leetcode and InterviewBit.</b> </h6>

                            </div>
                        </div>

                    </div>
                    <div className="right ">
                        <div className='cp-img'>
                            <a href="https://www.codechef.com/users/sahiltuli_31" rel="noopener noreferrer" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Codechef%28new%29_logo.svg/1200px-Codechef%28new%29_logo.svg.png" className="pro-icons" alt="" /></a>
                            <a href="https://codeforces.com/profile/sahiltuli31" rel="noopener noreferrer" target="_blank"> <img src="https://images.squarespace-cdn.com/content/v1/5a076df2268b966170809a2c/1511918009339-YOT20YA31EFYH71J55TQ/ke17ZwdGBToddI8pDm48kHuMSja0Vh8eB_h0MuaD_CRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwU8GNIaN2hBf1MRW24-pMWEs13LPVLeLgTsuCQQ6fIlIDXqTXNEBriE4Y9rQ8vzr4/codeforces_logo.png" className="pro-icons" alt="" /></a>
                            <a href="https://www.hackerrank.com/SahilTuli?hr_r=1" rel="noopener noreferrer" target="_blank"><img src="https://additionalknowledge.files.wordpress.com/2017/12/hackerrank.png?w=800" className="pro-icons" alt="" /> </a>
                            <a href="https://leetcode.com/sahiltuli_31/" rel="noopener noreferrer" target="_blank"> <img src="https://theme.zdassets.com/theme_assets/9008406/036323c6afd10392aa5b7e3a2eb7557d17955c81.png" className="pro-icons" alt="" /> </a>

                            <a href="https://auth.geeksforgeeks.org/user/hawkeye31/profile" rel="noopener noreferrer" target="_blank"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200817185016/gfg_complete_logo_2x-min.png" href="google.com" className="pro-icons" alt="" /> </a>
                            <a href="https://www.interviewbit.com/profile/sahil-tuli" rel="noopener noreferrer" target="_blank"><img src="https://assets.interviewbit.com/assets/header_logo_color-581e3f66d3c539604c094ce9c354ffa445a74f668ee9db6818048aaacdbdebdc.png.gz" className="pro-icons" alt="" /> </a>
                        </div>
                    </div>
                </div>}
            </div>

        </div>
    )
}

export default Skills
