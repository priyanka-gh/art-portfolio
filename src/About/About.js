import {useEffect} from 'react'
import './About.css'
import {useHistory} from 'react-router-dom'
import Aos from "aos"
import 'aos/dist/aos.css'

const About = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

let history=useHistory();
    return (
        <div className="cont">
            <div className="myphoto">
                <img data-aos="fade-up" alt="aboutphoto" className="noHover mypic" src="images/mypic.jpg"></img>
            </div>
            <div className="about" data-aos="fade-right">
                <label>Priyanka Ghansela</label>
                <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus! Quibusdam eos facere quia eligendi. Commodi temporibus aut distinctio eius dolorum corrupti adipisci harum consequuntur iusto eaque velit repellendus eum quas perferendis nemo quia blanditiis, non incidunt sunt laudantium aliquam beatae voluptates impedit? Praesentium ut aut eius id aspernatur. Animi saepe iusto laudantium reiciendis non dolorem autem placeat ducimus esse excepturi minima quia sint, dolores, quis, culpa natus possimus nemo aspernatur est? Dolorum accusantium sit distinctio ea reiciendis vero quasi eos, consectetur ipsum aliquid ipsam corporis aspernatur optio qui ducimus explicabo modi voluptas sapiente at architecto nostrum repudiandae tenetur! Suscipit!</p>
                
                <button onClick={()=>{
                    history.push("/contact")
                }} className="subbut">GET IN TOUCH</button>
            </div>
        </div>
    )
}

export default About
