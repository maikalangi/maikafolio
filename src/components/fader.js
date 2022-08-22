import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../App.scss'

const Fader = ({ text }) => {
    const [fadeProp, setFadeProp] = useState({
        fade: 'fadein',
    });

    useEffect(() => {
        const timeout = setInterval(() => {
            if(fadeProp.fade === 'fadein'){
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
            {/* <h3 className="name">{text}</h3> */}
            <h3 className={fadeProp.fade}>{text}</h3>
        </>
    )
}

Fader.defaultProps = {
    text: 'Maika Langi'
}

Fader.propTypes = {
    text: PropTypes.string,
}

export default Fader