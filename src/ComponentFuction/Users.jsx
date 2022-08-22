import React from 'react'
import style from '../ComponentFunctionCss/Users.module.css'
import { useState, useEffect } from 'react'
import request from './lib';

export default function Users({ onUserClick }) {

    let [usersRequest, poxelUserRequest] = useState([])

    // onUserCilck("user")

    useEffect(() => {
        request("GET", "https://jsonplaceholder.typicode.com/users").then((res) => {
            poxelUserRequest(res)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    return (
        <div>
            <div className={style.main} >
                <div className={style.usersCont}>{usersRequest.map((el, i) => (<div onClick={() => onUserClick("user", el.id)} key={`user_id_is_${i}`} className={style.usersElement}>
                    <div className={style.img}></div>
                    {el.name}
                </div>))}</div>
            </div>
        </div>
    )
}
