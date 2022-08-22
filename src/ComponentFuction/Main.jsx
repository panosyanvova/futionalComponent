import React from 'react'
import { useState } from 'react'
import style from "../ComponentFunctionCss/MainCss.module.css"
import Users from './Users'
import User from './User'
import Post from './Post'
import Album from './Album'
export default function Main(props) {
    let [pageName, setPageName] = useState("users")
    let [id, setId] = useState(0)
    function ejPoxox(ejiAnun, id) {
        setPageName(ejiAnun)
        setId(id)
    }

    return (
        <div className={style.main}>
            {pageName === "users" && <Users onUserClick={ejPoxox} />}
            {pageName === "user" && <User onUserClick={ejPoxox} id={id} />}
            {pageName === "post" && <Post onUserClick={ejPoxox} id={id} />}
            {pageName === "album" && <Album onUserClick={ejPoxox} id={id} />}
        </div>
    )
}
