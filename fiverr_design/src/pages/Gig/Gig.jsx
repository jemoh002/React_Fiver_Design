import React from 'react'
import "./Gig.scss"
import { Slider } from "infinite-react-carousel/lib";
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import Reviews from '../../components/reviews/Reviews';

function Gig() {
  const {id} = useParams()
  console.log(id)

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest
        .get(`/gigs/single/${id}`)
        .then((res) => {
          return res.data
        })
  })

  console.log(data)

  const { isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      newRequest
        .get(`/users/${data.userId}`)
        .then((res) => {
          return res.data
        })
    
  })

  return (
    <div className='gig'>
      {isLoading ? "loading"
        : error ? "Something went wrong!"
        : < div className="container">
        <div className="left">
          <span className="breadCrumbs">FIVERR {'>'} GRAPHICS & DESIGN {'>'}</span>
          <h1> will create ai generated art for you</h1>

              {
                isLoadingUser ? ("loading")
                : errorUser ? ("something went wrong!")
                : <div className="user">
                      <img className='pp' src={dataUser.img || "/img/noavatar.jpg"} alt="" />
                      
                      <span>{dataUser.username}</span>
                      
                      {
                        !isNaN(data.totalStars / data.starNumber) && (
                          
                          <div className="stars">
                            {
                              Array(Math.round(data.totalStars / data.starNumber))
                                .fill()
                                .map((item, i) => (
                                  <img src="/img/star.png" alt="" />
                                ))
                              
                            }
                        
                            <span>
                              {Math.round(data.totalStars / data.starNumber)}
                            </span>
                          </div>
                      )}
                    </div>
              }
              
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            {
              data?.images?.map((img) => (
                <img key={img} src={ img} alt=""/>
              ))
            }
          </Slider>
              <h2>About This Gig</h2>
              <p>
                {data.desc}
              </p>
              
              {
                isLoadingUser ? "loading"
                : errorUser ? "Something went wrong!"
                : (<div className="seller">
                    <h2>About the seller</h2>
                    <div className="user">
                      <img src={dataUser.img || "/img/noavatar.jpg"} alt="" />
                      <div className="info">
                          <span>{ dataUser.username}</span>
                        {
                          !isNaN(data.totalStars / data.starNumber) && (
                            
                            <div className="stars">
                              {
                                Array(Math.round(data.totalStars / data.starNumber))
                                  .fill()
                                  .map((item, i) => (
                                    <img src="/img/star.png" alt="" />
                                  ))
                                
                              }
                          
                              <span>
                                {Math.round(data.totalStars / data.starNumber)}
                              </span>
                            </div>
              
                        )}
                        <button>Contact Me</button>
                      </div>
                    </div>

                    <div className="box">
                      <div className="items">
                        <div className="item">
                          <span className="title">From</span>
                          <span className="description">{dataUser.country}</span>
                        </div>
                        <div className="item">
                          <span className="title">Member since</span>
                          <span className="desc">Aug 2022</span>
                        </div>
                        <div className="item">
                          <span className="title">Avg. response time</span>
                          <span className="desc">4 hours</span>
                        </div>
                        <div className="item">
                          <span className="title">Last delivery</span>
                          <span className="desc">1 day</span>
                        </div>
                        <div className="item">
                          <span className="title">Languages</span>
                          <span className="desc">English</span>
                        </div>
                      </div>
                      <hr />
                      <p>
                        {dataUser.desc}
                      </p>
                      </div>
                      
                    </div>
                )
              }

              <Reviews gigId={id} />
              
            </div>
            

            <div className="right">
              
                <div className="price">
                  <h2>
                    {data.shortTitle}
                  </h2>
                  <h3>$ {data.price}</h3>
                </div>
                <p>
                  {data.shortDesc}
                </p>
                <div className="details">
                  <div className="item">
                      <img src="/img/clock.png" alt="" />
                      <span>{data.DeliveryDate} days Delivery</span>
                  </div>

                  <div className="item">
                      <img src="/img/recycle.png" alt="" />
                      <span>{data.revisionNumber} Revisions</span>
                  </div>
                  
                </div>

                <div className="features">
                  {
                    data.features.map((feature) => (
                      <div className="item">

                        <img src="/img/greencheck.png" alt="" />
                        
                        <span>{feature}</span>
                        
                    </div>
                    ))
                  }
                  
                </div>

                <button>Continue</button>
            </div>
            
      </div>}
    </div>
  )
}

export default Gig
