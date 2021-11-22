import React from 'react'

function Button({children,cls}) {
    return (
        <button className={cls}>
            {children}
        </button>
    )
}

export default Button
