import React from 'react'
import './backToTop.css'
function BackToTop() {
    const scrollToTop = () => (
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    )
    return (
        <div className="backToTop">
            <p className="backToTop__label" onClick={scrollToTop}>Back to top</p>
        </div>
    )
}

export default BackToTop
