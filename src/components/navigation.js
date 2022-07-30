import { Link } from "react-scroll";

const Navbar =()=>{
    return (
        <div className="navBar">
            <ul>
                <li>
                    <Link 
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        duration={500}>
                            section 1
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        duration={500}>
                            section 2
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;