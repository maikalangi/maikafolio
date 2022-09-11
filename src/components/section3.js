import { FiLinkedin } from "react-icons/fi"
import { BsGithub } from "react-icons/bs"
import {HiDocumentText} from "react-icons/hi"

const Section3 = (props)=>{
    return (
        <div className="section" id="section3">
            <h3>Connect</h3>
            <div className="connect">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/maika-langi/"><FiLinkedin/></a>
                    </li>
                    <li>
                        <a href="https://github.com/maikalangi"><BsGithub/></a>
                    </li>
                    <li>
                        <a href="https://docs.google.com/document/d/1mcUgQNi_N8dgoxgXVcbS6aJO8Kx_fC-IJavjarZiCXs/edit"><HiDocumentText/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Section3