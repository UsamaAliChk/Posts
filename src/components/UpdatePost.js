import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function UpdatePost() {


    const [id,setid]=useState(0);
    const [loading,setloading]=useState(false);
    const [gotPost,setgotPost]=useState(false)
    const [userId,setuserId]=useState(null);
    const [update,setupdate]=useState(false);
    const [postTitle,setpostTitle]=useState('');
    const [postBody,setpostBody]=useState('')


    const getPost=()=>{
        setgotPost(false);
        setloading(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
             .then(res=>{
                 setpostTitle(res.data.title);
                 setpostBody(res.data.body);
                 setloading(false);
                 setgotPost(true)
                }
            )
            .catch(err=>{alert('Record Not Found')});
        
    }


    const updatePost=()=>{
        setloading(true);
        setupdate(false);
        const body={
            id,title:postTitle,body:postBody,userId
        }
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,body).then(res=>{console.log(res); setloading(false);
        setupdate(true);}).catch(err=>console.log(err));
       
    }

    return (
        <div>
            {
                gotPost?
                <div>
                <div>
                    <input placeholder={"Post Title"} placeholder="Title Of Post" value={postTitle} onChange={e=>setpostTitle(e.target.value)} style={{width:'500px',height:'50px'}}/>
                </div>
                <div>
                    <textarea placeholder='Body Of Post' value={postBody} onChange={e=>setpostBody(e.target.value)} rows="6" style={{width:'500px',marginTop:'10px'}}></textarea>
                </div>
                <button onClick={updatePost}>Update Post</button>
            </div>:
                <div>
                <input placeholder="Enter Id" onChange={e=>setid(e.target.value)} style={{width:'500px'}}/>
                <button onClick={getPost}>Search</button>
            </div>
            
               
           
            }
            

            {
                 loading?<p>Loading....</p>:<p></p>
            }

            {
                update? <p>Record updated Successfully</p>:<div></div>
            }

        </div>
    )
}