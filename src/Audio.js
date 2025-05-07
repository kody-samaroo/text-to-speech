import React from 'react'
import './Audio.css'

export default function Audio(audioUrl) {
  return (
    <div className="d-flex justify-content-center mt-5">
    <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
    </audio>
    </div>
  )
}
