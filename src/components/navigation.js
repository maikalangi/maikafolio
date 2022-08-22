import { Link } from "react-scroll";

const Navbar =()=>{
    return (
        <div className="navBar">
            <ul className="navList">
                <li>
                    <Link 
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}>
                            Home
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        duration={500}>
                            Bio
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        duration={500}>
                            Projects
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        duration={500}>
                            Connect
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;