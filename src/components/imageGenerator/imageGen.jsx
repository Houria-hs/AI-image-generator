
import React from 'react'
import "./imageGen.css"
import default_img from "../assets/default_img.jpg"

export const ImageGen = () => {
  return (
    <div className='ai_image_generator'>
      <div className="header">
      Ai image <span>generator </span>
      </div>
      <div className="image">
        <img src={default_img} alt="" />
      </div>
    </div>
  )
}
export default ImageGen
