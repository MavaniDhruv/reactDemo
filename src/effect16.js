import React, { useEffect, useState } from 'react'

function Effect16() {
  const [userdata,setuserdata] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>
      Response.json()
      )
      .then(item=>{
        setuserdata(item);
      })
      .catch(error=>{
        console.log(error);
      })
  })
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>USERNAME</th>
          <th>EMAIL</th>
          <th>PHONE</th>
          {/* <th>ADDRESS</th> */}
        </tr>
        {
          userdata.map((item)=>{
            return(
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                {/* <td>{item.address}</td> */}
              </tr>
            )
          })
        }
      </table>
    </>
  )
}

export default Effect16;