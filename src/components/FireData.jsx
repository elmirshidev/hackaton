import React from 'react'

function FireData({info}) {
  return (
    <article>
        <h1>{info?.title}</h1>
        <h4>{info?.lat}</h4>
        <h4>{info?.lng}</h4>
    </article>
  )
}
  
export default FireData
   