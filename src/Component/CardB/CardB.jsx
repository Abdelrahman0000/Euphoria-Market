import React from 'react'
import './CardB.css'
import ContentLoader from 'react-content-loader'
import {ArrowRight} from 'react-bootstrap-icons'

import Skeleton from '@mui/material/Skeleton';
export default function CardB({ img , arrow}) {
  return (
    <div className="cardB">
        <div className="image">
           {img!==undefined ? <img src={img} alt="" />:
            <Skeleton variant="rectangular" width={274} height={394} />
         

  }
        </div>
        <div className="box">
           <div className="inner my-row" style={{justifyContent:'space-between',alignItems:'center'}} > <h6 style={{color:'#3C4242'}}>
            Knitted Joggers
            </h6>
{arrow?
    <h4> <ArrowRight /> </h4>:
    <span> <p> $123.00 </p>  </span>
}
            </div>
            
{arrow?
            <p className='p-small'>
            Explore Now!
            </p>:
               <p className='p-small'>
               Jhanvi’s  Brand
               </p>
}
        </div>
    </div>
  )
}
