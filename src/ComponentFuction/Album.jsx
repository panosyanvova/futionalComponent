import React from 'react'
import { useState, useEffect } from 'react'
import style from '../ComponentFunctionCss/Album.module.css'
import request from './lib'


export default function Album(props) {
    const [albumRequest, poxvoxRequest] = useState([])

    useEffect(() => {
        request("GET", `https://jsonplaceholder.typicode.com/albums?userId=${props.id}`).then((res) => {
            poxvoxRequest(res)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    console.log(albumRequest);

    return (
        <div>
            <div className={style.albumCont}>
                {albumRequest.map((el, i) => (
                    <h3 key={`album id ${i}`} className={style.albumTitle}>{el.title}</h3>
                ))}
            </div>
        </div>
    )
}
