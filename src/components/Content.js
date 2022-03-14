import React from 'react'
import ImageOne from '../images/image1.jpg'
import ImageTwo from '../images/image2.jpg'

export default function () {
  return (
    <>
    <div className="menu-card">
        <img src={ImageOne} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
            <h2 className="text-2xl mb-2">Double Drawn</h2>
            <p className="mb-2">Straight and long</p>
            <span>$16</span>
        </div>
    </div>
    <div className="menu-card">
        <img src={ImageTwo} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
            <h2 className="text-2xl mb-2">Curly Drawn</h2>
            <p className="mb-2">Sweet heavy curls</p>
            <span>$18</span>
        </div>
    </div>
    </>
  )
}
