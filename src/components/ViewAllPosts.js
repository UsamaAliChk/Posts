import React,{useState,useEffect} from 'react'
import axios from 'axios';
import ViewPost from './ViewPost';
export default function ViewAllPosts() {

    
    const [Loading,setLoading]=useState(true);

    const [Posts,setPosts]=useState([]);


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(res=>{
                 console.log(res.data)
                 setPosts(res.data);
             })
             .catch(err=>console.log(err));
        setLoading(false);
    },[])


    return (
        <div>
            {
                Loading?
                <div>
                    <h1>Posts are loading please wait</h1>
                </div>
                :
                <div className='posts'>
                    {
                        Posts.map(post=>{
                            return(
                                <ViewPost post={post}/>
                            )
                            
                        })
                    }
                
                </div>
            }
        </div>
    )
}
