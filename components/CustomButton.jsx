import React from 'react'

function CustomButton({title, variant}) {
  return (
    <button className={`cursor-pointer rounded-md ${variant}`}>{title}</button>
  )
}

export default CustomButton