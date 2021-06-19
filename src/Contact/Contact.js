import {useEffect} from 'react'
import './Contact.css'
import Aos from "aos"
import 'aos/dist/aos.css'
const Contact = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return (
        <div  className="contactdiv" >
            <div className="contactimg rightdiv ">
                    <img data-aos="fade-up" src="/images/ph1.jpg" className="noHover"></img>
            </div>
            
            <div className="leftdiv"  data-aos="fade-right">
                <h1 className="contactme">Contact me</h1>
                <p>Feel free to contact me via any of the below or fill out the form at the bottom of the page.</p>
                <p>Email: priyanka.ghanselaa@gmail.com</p>
                <p>Instagram: @ajeeb</p>
                <div className="form">
                    <h5>Name</h5>
                    <input type="text"></input>
                    <h5>Email</h5>
                    <input type="email"></input>
                    <button className="sub_but">SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
