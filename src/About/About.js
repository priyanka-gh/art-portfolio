import './About.css'
import {useHistory} from 'react-router-dom'

import Fade from 'react-reveal/Fade';

const About = () => {


let history=useHistory();
    return (
        <div className="cont">
            <div className="myphoto">
            <Fade bottom>
                <img  alt="aboutphoto" className="noHover mypic" src="images/mypic.jpg"></img>
            </Fade>
            </div>
            <div className="about" >
            <Fade left>
                <label>Priyanka Ghansela</label>
                <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus! Quibusdam eos facere quia eligendi. Commodi temporibus aut distinctio eius dolorum corrupti adipisci harum consequuntur iusto eaque velit repellendus eum quas perferendis nemo quia blanditiis, non incidunt sunt laudantium aliquam beatae voluptates impedit? Praesentium ut aut eius id aspernatur. Animi saepe iusto laudantium reiciendis non dolorem autem placeat ducimus esse excepturi minima quia sint, dolores, quis, culpa natus possimus nemo aspernatur est? Dolorum accusantium sit distinctio ea reiciendis vero quasi eos, consectetur ipsum aliquid ipsam corporis aspernatur optio qui ducimus explicabo modi voluptas sapiente at architecto nostrum repudiandae tenetur! Suscipit!</p>
                <button onClick={()=>{
                    history.push("/contact")
                }} className="subbut">GET IN TOUCH</button>
            </Fade>
            </div>
        </div>
    )
}

export default About
