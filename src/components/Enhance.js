import React, { useEffect, useRef, useState } from 'react'
import { useOnScreen } from '../App';
import Button from './Button'

function Enhance() {

    const ref = useRef();
    const onScreen = useOnScreen(ref,'-150px');
    const [firstTime,setFirstTime] = useState(false)

    window.addEventListener('scroll',()=>{
        onScreen && setFirstTime(true);
    })
    return (
        <div className="enhance-sec">
            <div ref={ref} className="enhance-content">
                <div className={onScreen || firstTime ? 'enhance-img left':'enhance-img'}></div>
                <div className={onScreen || firstTime ? 'enhance-text right':'enhance-text'}>
                    <h2>Enhance Images with Photo Effects, Text, Stickers and More</h2>
                    <p>Access a wide variety of exclusive photo effects and filters right inside Fotor. Apply styles ranging from Lomo, vintage, B&W, artistic and more. Plus, you’ll find a large library of stickers, overlays, emojis, icons, stock photos, fonts, photo frames and other design resources at your fingertips. There are countless ways to enhance your images to match the aesthetic you’re looking for.</p>
                    <Button cls="comp-btn">
                        enhance photos now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Enhance
