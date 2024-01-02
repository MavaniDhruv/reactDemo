import React, { useEffect, useState } from 'react'

function Effect11() {
    const [postdata, setpostdata] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(Response =>
                Response.json()
            )
            .then(item => {
                setpostdata(item)
            })
            .catch(error => {
                console.log(error);
            })
    })
    return (
        <>
            <table border={2} cellPadding={10}>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                </tr>
                {
                    postdata.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Effect11