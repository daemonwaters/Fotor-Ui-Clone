import React, { useEffect, useRef, useState } from 'react'
import { useOnScreen } from '../App';
import Button from './Button'

function ProLevel() {
    const ref = useRef();
    const onScreen = useOnScreen(ref,'-150px');
    const [firstTime,setFirstTime] = useState(false)

    window.addEventListener('scroll',()=>{
        onScreen && setFirstTime(true);
    })
    return (
        <div className="pro-lvl-sec">
            <div ref={ref} className="pro-content">
                <div className={onScreen || firstTime ? 'pro-text left' : 'pro-text'}>
                    <h2>
                    Pro-Level Photo Enhancement Toolset
                    </h2>
                    <p>
                    Fotor’s free image quality enhancer offers a full set of built-in photo enhancement tools to help further enhance your photos. With a few simple clicks, you can fine-tune the brightness, saturation, exposure, and contrast, increase sharpness, unblur photos, resize images and more. Instantly provide your photos with a lift and take them to a whole new level.
                    </p>
                    <Button cls="comp-btn">
                        enhance photos now
                    </Button>
                </div>
                <div className={onScreen || firstTime ? 'pro-img right' : 'pro-img'}></div>
            </div>
        </div>
    )
}

export default ProLevel
