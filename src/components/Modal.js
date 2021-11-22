import React from 'react'

function Modal({setClick}) {
    return (
        <div className="modal">
            <ul>
                <li onClick={()=>setClick(false)}>
                    <i className="fa fa-user-circle"></i>
                    sign in
                </li>
                <li onClick={()=>setClick(false)}>
                <i className="fa fa-cog"></i>
                    edit
                </li>
                <li onClick={()=>setClick(false)}>
                <i className="fa fa-cube"></i>
                    collage
                </li>
                <li onClick={()=>setClick(false)}>
                <i className="fa fa-pencil"></i>
                design
                </li>
                <li onClick={()=>setClick(false)}>
                <i className="fa fa-bug"></i>
                features
                <i className="fa fa-angle-down"></i>
                </li>
                <li onClick={()=>setClick(false)}>
                <i className="fa fa-globe"></i>
                languages
                <i className="fa fa-angle-down"></i>
                </li>
            </ul>
        </div>
    )
}

export default Modal
