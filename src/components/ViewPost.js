import React from 'react'
import axios from 'axios'
export default function ViewPost({post}) {
    return (
        <div>
            <div class="card post">
                <div class="card-body">
                    <h5 class="card-title">{post.title}</h5>
                    <p class="card-text">{post.body}</p>
                </div>
            </div>
        </div>
    )
}
