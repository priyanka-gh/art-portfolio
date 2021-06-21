import React from 'react'
import './navbar.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Link} from 'react-router-dom'
import { Navbar,Nav } from 'react-bootstrap';
const navbar = () => {       
    return (
        <div className="navleft">
            <div className="upper">
                <label className="l1">Priyanka Ghansela</label>
                <label className="l2">Artist based in Delhi, India</label>
            </div>
             <div className="lower">
             {/* <div className="vertical-menu">
                    <Link to="/"  className="hover-1">Recent Art</Link>
                    <Link to="/old" className="hover-1">Blast From The Past</Link>
                    <Link to="/about" className="hover-1">About</Link>
                    <Link to="/contact" className="hover-1">Contact</Link> 
                </div> */}
                <div className="vertical-menu">
                <Navbar className="Navbar" expand="md">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav defaultActiveKey="/home" className="flex-column">
                    <Link to="/" className="hover-1">Recent Art</Link>
                    <Link to="/old" className="hover-1">Blast From The Past</Link>
                    <Link to="/about" className="hover-1">About</Link>
                    <Link to="/contact" className="hover-1">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar> 
                </div> 
                <div className="icons">
                    <div className="insta">
                        <InstagramIcon/>
                    </div>
                    <div className="facebook">
                    <FacebookIcon/>
                    </div>
                    <div className="twitter">
                    <TwitterIcon/>
                    </div>
                </div>
             </div>
     </div>
    )
}

export default navbar
