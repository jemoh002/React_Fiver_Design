import React from 'react'
import {Link} from 'react-router-dom'
import "./CatCard.scss"

export default function CatCard({item}) {
    return (
        <Link to="/gigs?cat=design">
            <div className='CatCard'>
                <img src={item.img} alt="" />
                <span className="desc">{ item.desc}</span>
                <span className="title"> { item.title}</span>
                <div className="container"></div>                
            </div>
                        
        </Link>

      
  )
}
