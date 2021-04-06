import React from 'react'
import photo from "../images/me.jpg"

const ProfilePicture = () => {
    return ( 
        <img src={photo} style={{width:"300px"}} id="photo_me" alt="Jamie Carlstone"></img>
    )
}

export default ProfilePicture