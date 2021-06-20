import './Contact.css'
import Fade from 'react-reveal/Fade';

const Contact = () => {


    return (
        <div  className="contactdiv" >
            <div className="contactimg rightdiv ">
            <Fade bottom>
                <div className="imgcontact">
                <img alt="contactimg" src="/images/ph1.jpg" className="noHover"></img>
                </div>
            </Fade>
            </div>
            
            <div className="leftdiv" >
            <Fade right>
                <h1 className="contactme">Contact me</h1>
                <p>Feel free to contact me via any of the below or fill out the form at the bottom of the page.</p>
                <p>Email: priyanka.ghanselaa@gmail.com</p>
                <p>Instagram: @ajeeb</p>
                <div className="form">
                    <h5>Name</h5>
                    <input type="text"></input>
                    <h5>Email</h5>
                    <input type="email"></input>
                    <h5>Message</h5>
                    <textarea></textarea>
                    <button className="sub_but">SUBMIT</button>
                </div>
            </Fade>
            </div>
        </div>
    )
}

export default Contact
