import React, { useEffect, useState } from 'react'

function Effect15() {
  const [tododata,settododata] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(Response=>
      Response.json()
      )
      .then(item=>{
        settododata(item);
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
          <th>TITLE</th>
          <th>COMPLETED</th>
        </tr>
        {
          tododata.map((item)=>{
            return(
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed}</td>
              </tr>
            )
          })
        }
      </table>
    </>
  )
}

export default Effect15