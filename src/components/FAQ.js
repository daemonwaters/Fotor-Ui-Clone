import React from 'react'

function FAQ() {
    return (
        <div className="faq">
            <h2>
            Frequently Asked Questions
            </h2>
            <div className="rows">
                <div className="row">
                <span>
                    <i className="fa fa-question-circle"></i>
                    How to make a blurry picture clear?
                </span>
                <p>
                It’s easy to unblur photos online using Fotor’s image quality enhancer: <br/>
                1.Open your photo into the Fotor photo editor. <br/>
                2.Click “Basic Adjust” tap on the left side bar and find the “Sharpness” tool. Play around with the sharpness slider to sharpen your blurry image and make it clearer. <br/>
                3.You can also adjust the brightness, contrast, shadows, highlights and exposure to produce more details. <br/>
                4.When you’re satisfied with the result, save and download your photo with the desired image file format.
                </p>
                </div>
                <div className="row">
                <span>
                    <i className="fa fa-question-circle"></i>
                    How to brighten a picture?
                </span>
                <p>Fotor’s image enhancer helps you easily lighten your dark photos:
                    <br/>
                    1.Open Fotor photo editor and upload the image you wish to brighten. <br/>
                    2.Click “Brightness” under the “Basic Adjust” tap on the left sidebar. Moving the slider to the right will make your photo brighter. Be sure no to exceed the brightness, so that you don’t remove too much contrast or wash out the colors of the overall image. <br/>
                    3.You can also use the “Shadows” and “Highlights” tools under the “Fine-Tune” tab to brighten the darkest parts or lightest parts of your image. <br/>
                </p>
                </div>
                <div className="row">
                <span>
                    <i className="fa fa-question-circle"></i>
                    How to fix a tilted image?
                </span>
                <p>
                With Fotor’s online photo enhancer, it´s incredibly easy to straighten your tilted photos. Just upload the photo you'd like to edit and click on the “Rotate” tap on the left sidebar to straighten it. Drag the slider to rotate the image to the exact angle you wish. Once you have straightened it, click the “Export” button and download it to your computer with your desired image format
                </p>
                </div>
            </div>
        </div>
    )
}

export default FAQ
