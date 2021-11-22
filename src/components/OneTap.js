import React, { useEffect, useRef, useState } from 'react'
import { useOnScreen } from '../App';
import Button from './Button'

function OneTap() {
    const ref = useRef();
    const onScreen = useOnScreen(ref,'-200px');
    const [firstTime,setFirstTime] = useState(false)

    window.addEventListener('scroll',()=>{
        onScreen && setFirstTime(true);
    })


    return (
        <div className="one-tap-sec">
            <div ref={ref} className="one-tap-content">
                <div className={onScreen || firstTime ? 'one-tap-text right' : 'one-tap-text'}>
                    <h2>
                    One-Tap Image Enhancer
                    </h2>
                    <p>
                    Have no photo editing skills? You don’t need to. Fotor's powerful image enhancer can help you improve your photo quality with only one click. Just upload your image and click “1-Tap Enhance” button, and Fotor will automatically detect and correct the lightings and color, improve details, and repair blurry for your photo in real time. Enjoy effortless image enhancement with Fotor.
                    </p>
                    <Button cls="comp-btn">
                        enhance photos now
                    </Button>
                </div>
                <div className={onScreen || firstTime ? 'one-tap-img left' : 'one-tap-img'}>
                </div>
            </div>
        </div>
    )
}

export default OneTap
