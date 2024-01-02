import React, { useEffect, useState } from 'react'

function Effect14() {

  const [albumdata, setalbumdata] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(Response =>
        Response.json()
      )
      .then(item => {
        setalbumdata(item)
      })
      .catch(error => {
        console.log(error);
      })

  })
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
        </tr>
        {
          albumdata.map((item) => {
            return(
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
            )
          })
        }
      </table>
    </>
  )
}

export default Effect14