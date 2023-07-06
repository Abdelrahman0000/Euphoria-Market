import React from 'react'
import './CardS.css'

export default function CardS({img}) {
  return (
    <div className="cardS">
        <div className="image">
            <img src={img} alt="" />
        </div>
        <div className="box">
            <h6 style={{color:'#3C4242'}}>
            Knitted Joggers
            </h6>
        </div>
    </div>
  )
}
