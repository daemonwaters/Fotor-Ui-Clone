import React from 'react'
import Button from './Button'

function HowTo() {
    return (
        <div className="how-sec">
            <div className="how-img"></div>
            <div className="how-content">
                <h2>
                How to Enhance a Photo?
                </h2>
                <ul>
                    <li>1.
                        Open Fotor's photo enhancer with the image you want to edit.</li>
                    <li>2. 
                        Click "1-Tap Enhance" from the left sidebar to enhance your image automatically and without losing quality.</li>
                    <li>3. 
                        You can always additionally refine your image by using Fotor’s built-in editing tools, including brightness, contrast, exposure, highlights, shadows, saturation, sharpness, curves and more.</li>
                    <li>4. 
                        To compare your edited photo to the original, click the “Compare” button at the bottom of the canvas. If you don’t like the way it looks, you can reset your adjustments and revert to your original image.</li>
                    <li>5. 
                        After you finish editing, save and download your edited image with the desired file type.</li>
                </ul>
                <Button cls="comp-btn">
                    enhance photos now
                </Button>
            </div>
        </div>
    )
}

export default HowTo
