import React, { useEffect, useState } from 'react';

function Effect12() {

    const [commdata, setcommdata] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(Response =>
                Response.json()
            )
            .then((item) => {
                setcommdata(item)
            })
            .catch(error => {
                console.log(error)
            })
    })

    return (
        <table>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>BODY</th>
            </tr>
            {
                commdata.map((item) => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.body}</td>
                        </tr>
                    )
                })
            }
        </table>
    )
}

export default Effect12