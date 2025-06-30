
import React from 'react'
import "./imageGen.css"
import default_img from "../assets/default_img.jpg"

export const ImageGen = () => {
  return (
    <div className='ai_image_generator'>
      <div className="header">
        Ai Image <span>Generator </span>
      </div>
      <div className="image-loading">
        <div className="image"><img src={default_img} alt="" /></div>
      </div>
      <div className="search-box">
        <input type="text" className='search-input' placeholder='Describe what you want to see' />
        <button className='Generate-btn'>Generate</button>
      </div>
    </div>
  )
}
export default ImageGen
