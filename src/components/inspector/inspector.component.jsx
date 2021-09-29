import React from 'react'
import './inspector.styles.scss'

const Product = ({image,imageDesc,productDescription}) => {
  
    return (
        <div className="img-desc">
            
            <div className="imagen">
                <img src={image} alt={imageDesc}/>
            </div>
            <div className="desc">
                <h1>
                <i>
                    {productDescription}
                </i>
                </h1>
            </div>
        </div>
    )
}

export default Product
