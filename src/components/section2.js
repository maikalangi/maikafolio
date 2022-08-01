const Section2 = (props)=>{
    return (
        <div className="section" id="section2">
            <h3>Projects</h3>
            <div className="projects">
                <ul className="projectList">
                    <li>
                        <div className="projectCard">
                            <h4>Book Finder</h4>
                            <a href="https://maikalangi.github.io/books-finder/">
                                <img className="project-pic" src={props.bookfinder} alt="project pic"/>
                            </a>
                                <p>
                                    A simple book search app that finds and displays info on books. Initial foray into web development applying new skills in HTML, CSS, and Javascript to display data retrieved from an external API and database 
                                </p>
                        </div>
                    </li>
                    <li>
                        <div className="projectCard">
                            <h4>Flowfi</h4>
                            <a href="https://flowfiapp.herokuapp.com/">
                                <img className="project-pic" src={props.flowfi} alt="project pic"/>
                            </a>
                                <p>
                                    A web application to streamline the process for entering the cryptocurrency marketplace by offering cryptocurrency exchange options and wallets. A journey through Python and Django utilizing their tools to develop a fullstack application and deploy.
                                </p>
                        </div>
                    </li>
                    <li>
                        <div className="projectCard">
                            <h4>To-do List</h4>
                            <a href="https://young-reaches-38531.herokuapp.com/todo">
                                <img className="project-pic" src={props.todo} alt="project pic"/>
                            </a>
                                <p>
                                    To-do list for users to add, update, complete, and delete actions to do. Further development of learned skills from Book Finder project with new CRUD function understanding and (non-relational) database utilization implemented to store user input
                                </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Section2