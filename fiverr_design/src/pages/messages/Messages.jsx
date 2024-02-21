import React from 'react'
import { Link } from 'react-router-dom'
import "./Messages.scss"

export default function Messages() {
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true
  };

  const message = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quod quia fuga aliquid, eos ab eaque illum modi sit labore ea, vitae laudantium dolores aspernatur nesciunt. Qui earum sapiente dolores!`

  return (
    <div>
      <div className="messages">
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
           
          </div>

          <table>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>

            <tr className='active'>
              <td>John Doe</td>
              
              <td>
                <Link to="/message/123" className='link'>{message.substring(0,100)}...</Link>
              </td>
              <td>1 day ago</td>
              <td>
                <button>Mark as read</button>
              </td>
              
            </tr>

            <tr className='active'>
              <td>John Doe</td>
              
              <td>
                <Link to="/message/123" className='link'>{message.substring(0,100)}...</Link>
              </td>
              <td>1 day ago</td>
              <td>
                <button>Mark as read</button>
              </td>
              
            </tr>


            <tr>
              <td>John Doe</td>
              
              <td>
                <Link to="/message/123" className='link'>{message.substring(0,100)}...</Link>
              </td>
              <td>1 day ago</td>
            
              
            </tr>


            <tr>
              <td>John Doe</td>
              
              <td>
                <Link to="/message/123" className='link'>{message.substring(0,100)}...</Link>
              </td>
              <td>1 day ago</td>
            
              
            </tr>


            <tr>
              <td>John Doe</td>
              
              <td>
                <Link to="/message/123" className='link'>{message.substring(0,100)}...</Link>
              </td>
              <td>1 day ago</td>
            
              
            </tr>


            <tr>
              <td>John Doe</td>
              
              <td>
                <Link to="/message/123" className='link'>{message.substring(0,100)}...</Link>
              </td>
              <td>1 day ago</td>
            
              
            </tr>


            
          </table>
        </div>
      </div>
    </div>
  )
}
