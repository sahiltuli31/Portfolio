import React from 'react'
import "../css/contact.css"
function Contact() {
    return (

        <div className="contact">

            <br /><br />
            <h3 >Got anything to talk about ?</h3>
            <br />
            <h5 ><spa >E-mail:</spa > <span className='under'>sahildec312001@gmail.com</span></h5>
            <h3 >or</h3>
            <div className=" container imgg">

                <a href="https://github.com/sahiltuli31" rel="noreferrer" target="_blank"> <img alt="" src="https://img.icons8.com/ios-glyphs/30/000000/github.png" /></a>
                <a href="https://www.linkedin.com/in/sahil-tuli-96222a195/" rel="noreferrer" target="_blank"> <img alt="" src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" /></a>
                <a href="https://www.instagram.com/sahiltuli_31/" rel="noreferrer" target="_blank"> <img alt="" src="https://img.icons8.com/ios/50/000000/instagram-new--v3.png" /></a>
            </div>
            <br></br>
            <div className="footer">
                <h5>Made with 💙 | Sahil Tuli ©</h5>
            </div>
        </div>

    )
}

export default Contact
