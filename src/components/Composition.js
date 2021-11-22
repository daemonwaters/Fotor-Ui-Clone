import React, { useEffect, useRef, useState } from 'react';
import { useOnScreen } from '../App';
import Button from './Button'

function Composition() {

    const ref = useRef();
    const onScreen = useOnScreen(ref,'-150px');
    const [firstTime,setFirstTime] = useState(false)

    window.addEventListener('scroll',()=>{
        onScreen && setFirstTime(true);
    })
    return (
        <div className="comp-sec">
            <div ref={ref} className="comp-content">
                <div className={onScreen || firstTime ? 'comp-img left':'comp-img'}></div>
                <div className={onScreen || firstTime ? 'comp-text right':'comp-text'}>
                    <h2>Improve Your Photo Composition</h2>
                    <p>
                    Picture looking slanted? Not to worry. You can easily use Fotor to rotate, straighten, flip or crop photos exactly the way you want. Quickly correct image perspective and adjust composition to fit your vision. You can also blur the photo’s background to reduce noise and enhance the focus of your photos. Highlight your photo subject easily.
                    </p>
                    <Button cls="comp-btn">
                        enhance photos now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Composition
