// import axios from "axios";
import React, {useEffect, useState} from 'react'

// Export an object containing methods we'll use for accessing the random user API

const API = () => {

    const [data, setData] = useState(null)

    useEffect(() => {

        fetch("https://api.github.com/users/jdcar")
        .then(res => {
            res.json()
        })
        .then(setData)
    }, [])

    if (data) {
        return <div>{JSON.stringify(data)}</div>
    }
    
   

    //https://api.github.com/users/jdcar
    return (
        <div></div>
        
    );
}


export default API
