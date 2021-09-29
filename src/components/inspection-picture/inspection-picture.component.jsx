import React from 'react'

const InspectionPicture = ({place}) => {
    return (
        <div key= {place.number} className="portrait">
            <h2>{place.customer}</h2>
            <h6>{place.address}</h6>
            <img src={place.imageUrl} alt="location Picture" className="imagen"/>
        </div>
    )
}

export default InspectionPicture
