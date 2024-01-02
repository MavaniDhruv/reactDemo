import React, { useEffect, useState } from 'react'

function Effect13() {

    const [photodata, setphotodata] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(Response =>
                Response.json()
            )
            .then(item => {
                setphotodata(item)
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
                    <th>URL</th>
                    <th>THUMBNAIL-URL</th>
                </tr>
                {
                    photodata.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.url}</td>
                                <td>{item.thumbnailUrl}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Effect13