import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function DeletePost() {


    const [id,setid]=useState(0);
    const [loading,setloading]=useState(false);

    const [deleted,setdeleted]=useState(false);

    


    const deletePost=()=>{
        setloading(true);
        setdeleted(false)
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
             .then(res=>
                {
                        setloading(false);
                       setdeleted(true)}
                      
                    )

             .catch(err=>{console.log(err)})
       
    }

    return (
        <div>
            <input placeholder="Enter Id" onChange={e=>setid(e.target.value)}/>
            <button onClick={deletePost}>Serach</button>

            {
                 loading?<p>Loading....</p>:<p></p>
            }
            {
                deleted? <p>Record deleted Successfully</p>:<div></div>
            }

        </div>
    )
}
