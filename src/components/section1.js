const Section1 = (props)=>{
    return (
        <div className="section" id="section1">
            <h1>Section 1</h1>
            <div className="pic-container">
                <img className="pic" src={props.pic} alt="profile pic"/>
            </div>
            <div className="bio-container">
                <p>
                    Hi! My name is Maika and I'm a software engineer currently enrolled at General Assembly. I've always had a curiosity for software development and due to a rapidly evolving interest in the Web 3 space have made the leap into tech. Looking to create connections and continue to dive into tech while getting involved with the culture and bringing forward new ideas!
                </p>
            </div> 
        </div>
    )
}

export default Section1