import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Effect() {
    
    const [postdata,setpostdata]=useState([])

    useEffect(()=>{

        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response=>
        //     response.json()
        // )
        // .then(item=>{
        //     // console.log(item);
        //     setpostdata(item)
        // }) 
        // .catch(error=>{
        //     console.log(error);
        // })
        
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            // console.log(res.data);
            setpostdata(res.data);
        })

    })
    
    return (
    <>
        
        <table border={1} cellPadding={10}>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            {
                postdata.map((item)=>{
                    return(
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

export default Effect