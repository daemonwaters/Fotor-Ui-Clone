import React, { useState } from 'react'
import Button from './Button'
import {ReactComponent as Logo} from '../logo.svg'

function Header({toggle,handleClick,click,onScreen,children}) {

    const [hover,setHover] = useState(false);
    const [mouse,setMouse] = useState(false);
    const [feature,setFeature] = useState(false);
    const [mouse2,setMouse2] = useState(false);
    const [mouse3,setMouse3] = useState(false);
    const [mouse4,setMouse4] = useState(false);
    const [mouse5,setMouse5] = useState(false);
    const [lang,setLang] = useState(false);

    return (
        <header className={click || toggle || onScreen===false ?'header border white' : 'header'}>
            <div className={toggle || onScreen===false ? 'black' : 'logo'}>
               <Logo/>
            </div>
            <ul className={toggle ? 'bars' : 'navbar'}>
                <li onClick={()=> setHover(!hover)} className={onScreen === false ? 'nav-li black-tx' : 'nav-li'}>
                    Create Now 
                    <i className="fa fa-angle-down"></i>
                    <ul className={hover ? 'create show':'create'}>
                        <li>
                            <p className="dd-heading">
                            Photo Editor
                            </p>
                            <p className="dd-text">
                            Enhance your images amazingly with photo effects and simple editing tools.
                            </p>
                        </li>
                        <li>
                            <p className="dd-heading">
                                Graphic Designer
                            </p>
                            <p className="dd-text">
                            Everyone can make stunning graphics with preset templates.
                            </p>
                        </li>
                        <li>
                        <p className="dd-heading">
                            Collage Maker 
                        </p>
                            <p className="dd-text">
                            Stylish collage layouts for selection to collect special memories.
                            </p>
                        </li>
                        <li>
                        <p className="dd-heading">
                        Stock Photos 
                        </p>
                            <p className="dd-text">
                            Explore stunning and royalty-free stock photos to enhance your projects.
                            </p>
                        </li>
                    </ul>
                </li>
                <li className={onScreen === false ? 'nav-li black-tx' : 'nav-li'} onClick={()=>setFeature(!feature)}>
                    Features
                    <i className="fa fa-angle-down"></i>
                    <div className={feature ? 'feature-content on':'feature-content'}>
                    <ul className="features">
                        <li className="feature-item" onMouseLeave={()=>setMouse(false)} onMouseEnter={()=>setMouse(true)}>
                            <i className="fa fa-photo"></i>
                            photo editing
                            <i className="fa fa-angle-down"></i>
                            <div className={mouse ? 'feature-item-content grid':'feature-item-content'}>
                                <a href="#">1-top enhance</a>
                                <a href="#">ai photo effect</a>
                                <a href="#">background remover</a>
                                <a href="#">blur effect</a>
                                <a href="#">color splash</a>
                                <a href="#">color photo effect</a>
                                <a href="#">crop</a>
                                <a href="#">funky effect</a>
                                <a href="#">hDR</a>
                                <a href="#">lomo effect</a>
                                <a href="#">mosaic</a>
                                <a href="#">photo effects</a>
                                <a href="#">photo frames</a>
                                <a href="#">resize</a>
                                <a href="#">straighten</a>
                                <a href="#">text</a>
                                <a href="#">tilt-shift</a>
                            </div>
                        </li>
                        <li className="feature-item" onMouseLeave={()=>setMouse2(false)} onMouseEnter={()=>setMouse2(true)}>
                            <i className="fa fa-eye"></i>
                            portrait beauty
                            <i className="fa fa-angle-down"></i>
                            <div className={mouse2 ? 'feature-item-content2 grid' : 'feature-item-content2'}>
                                <a href="#">Blemish Remover</a>
                                <a href="#">Photo Reshaping</a>
                                <a href="#">Photo Retouch</a>
                                <a href="#">Red-Eye Remover</a>
                                <a href="#">Teeth Whitening</a>
                                <a href="#">Wrinkle Remover</a>
                            </div>
                        </li>

                        <li className="feature-item" onMouseLeave={()=>setMouse3(false)} onMouseEnter={()=>setMouse3(true)}>
                            <i className="fa fa-cube"></i>
                            photo collage
                            <i className="fa fa-angle-down"></i>
                            <div className={mouse3 ? 'feature-item-content3 grid' : 'feature-item-content3'}>
                            <a href="#">Artistic Collage</a>
                            <a href="#">Collage Maker</a>
                            <a href="#">Funky Collage</a>
                            <a href="#">Photo Stitching</a>
                            </div>
                            </li>
                        <li className="feature-item" onMouseLeave={()=>setMouse4(false)} onMouseEnter={()=>setMouse4(true)}>
                            <i className="fa fa-pencil"></i>
                            design
                            <i className="fa fa-angle-down"></i>
                            <div className={mouse4 ? "feature-item-content4 grid" : "feature-item-content4"}>
                                <a href="#">Backgrounds</a>
                                <a href="#">Spotify Playlist Cover</a>
                                <a href="#">Chart Maker</a>
                                <a href="#">Youtube End Screen</a>
                                <a href="#">Zoom Background</a>
                                <a href="#">Podcast</a>
                                <a href="#">Invoice</a>
                                <a href="#">Invoice</a>
                                <a href="#">Report</a>
                                <a href="#">Tumblr Graphic</a>
                                <a href="#">Facebook App Ad</a>
                                <a href="#">Blog Graphic</a>
                                <a href="#">Wattpad Cover</a>
                                <a href="#">Seating Chart</a>
                                <a href="#">Soudcloud Banner</a>
                                <a href="#">Tumblr Banner</a>
                                <a href="#">Media Kit</a>
                                <a href="#">Magazine Cover</a>
                                <a href="#">Instagram Ad</a>
                                <a href="#">Recipe Card</a>
                                <a href="#">Report Card</a>
                                <a href="#">Lesson Plan</a>
                                <a href="#">Gift Tag</a>
                                <a href="#">Class Schedule</a>
                                <a href="#">Newsletter</a>
                                <a href="#">Twitch Banner</a>
                                <a href="#">Yearbook</a>
                                <a href="#">Snapchat Geofilter</a>
                                <a href="#">Proposal</a>
                                <a href="#">Announcement</a>
                                <a href="#">Coupon</a>
                                <a href="#">Brochure</a>
                                <a href="#">ID Card</a>
                                <a href="#">Calendar</a>
                                <a href="#">Instagram Story</a>
                                <a href="#">Memo</a>
                            </div>
                            </li>
                        <li className="feature-item" onMouseLeave={()=>setMouse5(false)} onMouseEnter={()=>setMouse5(true)} >
                            <i className="fa fa-fire"></i>
                            how to
                            <i className="fa fa-angle-down"></i>
                            <div className={mouse5 ? 'feature-item-content5 grid':'feature-item-content5'}>
                            <a href="#">Recipe Card</a>
                                <a href="#">Report Card</a>
                                <a href="#">blur effect</a>
                                <a href="#">color splash</a>
                                <a href="#">color photo effect</a>
                                <a href="#">Lesson Plan</a>
                                <a href="#">Gift Tag</a>
                                <a href="#">Red-Eye Remover</a>
                                <a href="#">Teeth Whitening</a>
                                <a href="#">Class Schedule</a>
                                <a href="#">Newsletter</a>
                                <a href="#">Twitch Banner</a>
                                <a href="#">Yearbook</a>
                            </div>
                            </li>
                    </ul>
                    </div>
                </li>
                <li className={onScreen === false ? 'nav-li black-tx' : 'nav-li'} onMouseOver={()=> setLang(!lang)}>
                    Languages
                    <i className="fa fa-angle-down"></i>
                    <ul className={lang ? 'langs lang-on' : 'langs'}>

                            <li>
                                <p>English</p>
                                <p>(English)</p>
                            </li>
                            <li>
                                <p>Spanish</p>
                                <p>(Español)</p>
                            </li>
                            <li>
                                <p>Portuguese</p>
                                <p>(Português)</p>
                            </li>
                            <li>
                                <p>Russian</p>
                                <p>(Pусский)</p>
                            </li>
                            <li>
                                <p>French</p>
                                <p>(Français)</p>
                            </li>
                            <li>
                            
                            
                                <p>German</p>
                                <p>(Deutsch)</p>
                            </li>
                            <li>
                            
                            
                                <p>Chinese, Simplified</p>
                                <p>(简体中文)</p>
                            </li>
                            <li>
                                <p>Traditional Chinese</p>
                                <p>(正體中文)</p>
                            </li>
                            <li>
                                <p>Japanese</p>
                                <p>(日本語)</p>
                            </li>
                    </ul>
                </li>
                <Button>
                    Sign in
                </Button>
            </ul>

            <div className={toggle ? '' : 'bars'} onClick={handleClick}>
                <i className={click ? 'fa fa-times' : 'fa fa-bars'} style={{
                    fontSize:'1.5rem',
                    cursor:'pointer'
                }}></i>
            </div>

            {children}

        </header>
    )
}

export default Header
