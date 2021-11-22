import React, { useEffect, useRef, useState } from 'react'
import { useOnScreen } from '../App';
import Button from './Button'

function Improve() {
    const ref = useRef();
    const onScreen = useOnScreen(ref,'-150px');
    const [firstTime,setFirstTime] = useState(false)

    window.addEventListener('scroll',()=>{
        onScreen && setFirstTime(true);
    })

    return (
        <div className="improve-sec">
            <div ref={ref} className="improve-content">
                <div className={onScreen || firstTime ? 'improve-img left' : 'improve-img'}></div>
                <div className={onScreen || firstTime ? 'improve-text right':'improve-text'}>
                    <h2>
                    Improve Image Quality with HDR Effect
                    </h2>

                    <p>
                    Whether you need to fix low lighting, image blurry, or poor focus, Fotor’s advanced HDR effect can help cover all your needs. It uses AI technology to analyze and transform your image into a high-definition, rich HDR photograph. Restore the details that might be lost with standard digital cameras and reproduce the vivid colors as your eyes see it.
                    </p>

                    <Button cls="comp-btn">
                        enhance photos now
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default Improve
