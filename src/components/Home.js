import React from 'react'


import {Link} from 'react-router-dom'


import axios from 'axios';

export default function Home() {
  


    return (
        <div className='main'>
            <Link className="links" to={'allposts'}>VIEW ALL POSTS</Link>
            <Link className="links" to={'singlepost'}>VIEW SINGLE POST</Link>
            <Link className="links" to={'deletepost'}>DELETE POST</Link>
            <Link className="links" to={'updatepost'}>UPDATE POST</Link>
        </div>
    )
}
