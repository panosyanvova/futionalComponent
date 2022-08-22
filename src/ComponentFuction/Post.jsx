import React from 'react'
import { useState, useEffect } from 'react'
import style from '../ComponentFunctionCss/Post.module.css'
import request from './lib'


export default function Post(props) {
    const [postRequest, poxvoxRequest] = useState([])

    useEffect(() => {
        request("GET", `https://jsonplaceholder.typicode.com/posts?userId=${props.id}`).then((res) => {
            poxvoxRequest(res)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    console.log(postRequest);
    return (
        <div className={style.postsBody}>
            {postRequest.map((el, i) => (
                <div className={style.postsText}>
                    <h3 key={`posts title ${i}`}>{el.title}</h3>
                    <div key={`posts text ${i}`}>{el.body}</div>
                </div>

            ))}
        </div>
    )
}
