import React from 'react'
import emergency from '../assets/emergency.png'
function LocationMarker({lat,lng,onClick}) {
  return (
    <div
    style={{
      width: "50px",
      height: "50px",
      position: "relative",
      top: "-50px",
      left: "-25px",
    }}
    className=' z-[10]' onClick={onClick}>
        <img src={emergency} alt='Emergency' className=' cursor-pointer'/>
    </div>
  )
}

export default LocationMarker
