import React,{useState} from 'react';

import {v4 as uuidv4 } from 'uuid'

import axios from 'axios'


export default function CreatePost() {
    const [loading,setloading]=useState(false);
    const [added,setadded]=useState(false);
    const [postTitle,setpostTitle]=useState('');
    const [postBody,setpostBody]=useState('')

    const createPost=async ()=>{

        setloading(true)
        setadded(false)
        const body={
            title:postTitle,
            body:postBody,
            userId:uuidv4()
        }

        await axios.post('https://jsonplaceholder.typicode.com/posts',body).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
        setadded(true)
        setloading(false)

        
    }

    return (
        <div className="createPost">
            <div>
                <input placeholder={"Post Title"} placeholder="Title Of Post" value={postTitle} onChange={e=>setpostTitle(e.target.value)} className="textBox"/>
            </div>
            <div>
            <textarea placeholder='Body Of Post' value={postBody} onChange={e=>setpostBody(e.target.value)} rows="6" className="textArea" ></textarea>
            </div>
            <button onClick={createPost}>Create Post</button>
            {
                loading?<p>Loading.....</p>:<div></div>
            }

            {
                added? <p>Record Added Successfully</p>:<div></div>
            }
        </div>
    )
}
