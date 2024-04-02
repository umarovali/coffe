import React from 'react'

export default function ChooseItem({ imageSrc, bestQualityText, discoverText }) {
    return (
        <div className="choose_img">
            <img src={imageSrc} alt="" />
            <div className="choose_best">{bestQualityText}</div>
            <div className="choose_discover">{discoverText}</div>
        </div>
    )
}
