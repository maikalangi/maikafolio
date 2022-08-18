const Section2 = (props)=>{
    return (
        <div className="section" id="section2">
            <h3>Projects</h3>
            <div className="projects">
                <ul className="projectList">
                    <li>
                        <h4>Compostr</h4>
                        <div className="projectCard">
                            <a href="https://master--tubular-starlight-f7d150.netlify.app/">
                                <img 
                                    className="project-pic" 
                                    src={props.compostr} 
                                    alt="project pic"
                                />
                            </a>
                            <p>
                                Web application addressing global climate change through composting. It provides introductory information on composting as well as a map for local compost sites and incentivizes individual composting through rewards.
                            </p>
                        </div>
                    </li>
                    <li>
                        <h4>General Store</h4>
                        <div className="projectCard">
                            <a href="https://generalstoregs.netlify.app/">
                                <img 
                                    className="project-pic" 
                                    src={props.gs} 
                                    alt="project pic"
                                />
                            </a>
                            <p>
                                A fun app exercise to help customers find items they didn't even know they wanted or needed. A team project combining individual effort and git/Github version workflow with concepts learned on previous projects to develop site with CRUD functionality and Google Firebase authentication/authorization for distinct user accessibility such as admin, user, and visitor accesses
                            </p>
                        </div>
                    </li>
                    <li>
                        <h4>Anū Handyman</h4>
                        <div className="projectCard">
                            <a href="https://anu-handyman.herokuapp.com/">
                                <img 
                                    className="project-pic" 
                                    src={props.anu} 
                                    alt="project pic"
                                />
                            </a>
                            <p>
                                Website showcasing handyman services and a contact page to reach the handyman
                            </p>
                        </div>
                    </li>
                    <li>
                        <h4>Book Finder</h4>
                        <div className="projectCard">
                            <a href="https://maikalangi.github.io/books-finder/">
                                <img 
                                    className="project-pic" 
                                    src={props.bookfinder}
                                    alt="project pic"
                                />
                            </a>
                            <p>
                                A simple book search app that finds and displays info on books. Initial foray into web development applying new skills in HTML, CSS, and Javascript to display data retrieved from an external API and database 
                            </p>
                        </div>
                    </li>
                    <li>
                        <h4>To-do List</h4>
                        <div className="projectCard">
                            <a href="https://young-reaches-38531.herokuapp.com/todo">
                                <img 
                                    className="project-pic" 
                                    src={props.todo} 
                                    alt="project pic"
                                />
                            </a>
                            <p>
                                To-do list for users to add, update, complete, and delete actions to do. Further development of learned skills from Book Finder project with new CRUD function understanding and (non-relational) database utilization implemented to store user input
                            </p>
                        </div>
                    </li>
                    <li>
                        <h4>Flowfi</h4>
                        <div className="projectCard">
                            <a href="https://flowfiapp.herokuapp.com/">
                                <img 
                                    className="project-pic" 
                                    src={props.flowfi} 
                                    alt="project pic"
                                />
                            </a>
                            <p>
                                A web application to streamline the process for entering the cryptocurrency marketplace by offering cryptocurrency exchange options and wallets. A journey through Python and Django utilizing their tools to develop a fullstack application and deploy.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Section2