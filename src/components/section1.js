const Section1 = (props)=>{
    return (
        <div className="section" id="section1">
            <div className="bio-container">
                <div className="pic-container">
                    <img 
                        className="pic" 
                        src={props.pic} 
                        alt="profile pic"
                    />
                </div>
                <div className="summary">
                    <span>
                        I believe success can come to good people who are able to be creative and collaborate
                    </span>
                    <p>
                        I'm an ambitious front end developer with an appreciation for design functionality and an eager curiosity to continue developing my skills in back-end engineering. Over eight years of supportive leadership roles in various industries has given me experience in collaborating with people from different walks of life to consistently nurture productive teams and compatible team environments. Looking to create connections while getting involved with the culture and bringing forward new ideas!
                    </p>
                </div> 
            </div>
        </div>
    )
}

export default Section1