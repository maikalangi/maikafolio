const Section1 = (props)=>{
    return (
        <div className="section" id="section1">
            <h3>Hi, I'm Maika</h3>
                <div className="bio-container">
                <div className="pic-container">
                    <img className="pic" src={props.pic} alt="profile pic"/>
                </div>
                <div className="bio-container">
                    <p>
                        I'm a software engineer currently enrolled at General Assembly. I've always had a curiosity for software development and due to a rapidly evolving interest in the Web 3 space have made the leap into tech. Looking to create connections and continue to dive into tech while getting involved with the culture and bringing forward new ideas!
                    </p>
                </div> 
            </div>
        </div>
    )
}

export default Section1