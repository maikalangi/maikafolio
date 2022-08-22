import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import '../App.scss';

const Home =({ text })=>{
const [fadeProp, setFadeProp] = useState({
    fade: 'fadein',
});

useEffect(() => {
    const timeout = setInterval(() => {
        if (fadeProp.fade === 'fadein'){
            setFadeProp({
                fade:'fadeout'
            })
        } else {
            setFadeProp({
                fade: 'fadein'
            })
        }
    }, 4000);

    return () => clearInterval(timeout)
}, [fadeProp])

    return (
        <>
            {/* <h3 className="name">Maika Langi</h3> */}
            <h3 className={fadeProp.fade}>{text}</h3>
        </>
    )
}

Home.defaultProps = {
    text: 'Maika Langi'
}

Home.propTypes = {
    text: PropTypes.string,
}

export default Home