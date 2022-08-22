import React from 'react'
import { useState, useEffect } from 'react'
import style from '../ComponentFunctionCss/UserCss.module.css'
import request from './lib'

export default function User(props) {
    let [album, poxvacAlbum] = useState("")
    let [post, poxvacPost] = useState("")
    const [usersRequest, poxelUserRequest] = useState([])
    // console.log(request('GET', `https://jsonplaceholder.typicode.com/users?id=2`));
    useEffect(() => {
        request("GET", `https://jsonplaceholder.typicode.com/users?id=${props.id}`).then((res) => {
            poxelUserRequest(res)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    console.log(usersRequest);


    return (
        <>
            <div className={style.userEj}>
                <div className={style.userCont}>
                    <div className={style.nkarEvAnun}>
                        <div className={style.userNkar}></div>
                        {usersRequest.map((el, i) => (
                            <div key={`User name ${i}`} className={style.name}><span className={style.result}>{el.name}</span></div>
                        ))}
                    </div>
                    <div className={style.userInfo}>
                        {usersRequest.map((el, i) => (
                            <div key={`info_Cont_${i}`}>
                                <div className={style.useriMasin} key={`User email ${i}`}> Email: <span className={style.result}>{el.email}</span></div>
                                <div className={style.useriMasin} key={`User phone ${i}`}>Phone: <span className={style.result}>{el.phone}</span></div>
                                <div className={style.useriMasin} key={`User username ${i}`}>Username: <span className={style.result}>{el.username}</span></div>
                                <div className={style.useriMasin} key={`User website ${i}`}>Website: <span className={style.result}>{el.website}</span></div>
                            </div>
                        ))}
                    </div>
                    {<div className={style.erkuButton}>
                        <button className={style.postsButton} onClick={() => { post === "" && poxvacPost("post") }}>Posts</button>
                        <button className={style.albumButton} onClick={() => { album === "" && poxvacAlbum("album") }}>Albums</button>
                    </div>}
                </div>
            </div>
            {album === "album" && props.onUserClick("album", props.id)}
            {post === "post" && props.onUserClick("post", props.id)}
        </>
    )
}
