import React from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { Link, useParams } from 'react-router-dom'

import "./Message.scss"
import newRequest from '../../utils/newRequest'


function Message() {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  const { id } = useParams()
  
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["message"],
    queryFn: () => 
      newRequest
        .get(`/messages/${id}`)
        .then((res) => {
          return res.data
        })
  })

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["message"])
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value
    });
    e.target[0].value = ""
  }

  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGES</Link>{">"} {currentUser.username} {">"}
        </span>

        {
          isLoading ? "loading"
          : error ? "error"
          :
              <div className="messages">
                
                {
                  data.map((m) => (
                    <div className={m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
                      <img src={currentUser.img} alt="" />
                      <p>
                        {m.desc}
                      </p>
                    </div>
                    
                  ))
                }
                

              </div>
        }

        <hr />

        
        <form className="write" onSubmit={handleSubmit}>
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Message
