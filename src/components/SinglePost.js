import React,{useEffect,useState} from 'react'
import ViewPost from './ViewPost';

import axios from 'axios'

export default function SinglePost() {

    const [id,setid]=useState(0);
    const [loading,setloading]=useState(false);
    const [post,setpost]=useState(null);
    const searchPost=()=>{
        setpost({})
        setloading(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{setpost(res.data);setloading(false)})
        .catch(err=>{alert('Record Not Found');setloading(false)});
    }


    return (
        <div>
            <input placeholder="Enter Id" onChange={e=>setid(e.target.value)}/>
            <button onClick={searchPost}>Serach</button>
            {
                loading?<p>Loading....</p>:<p></p>
            }
                {
                    post===null?<p></p>:<ViewPost post={post}/>
                }
    
        </div>
    )
}
