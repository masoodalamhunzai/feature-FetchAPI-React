import * as React from "react";
import { Link } from 'react-router-dom';

  const TopNav= () => {
    return(
        <div className="top-bar">
        <ul> 
           <li><Link to="/home">Home</Link></li>
           <li><Link to="/users">Users</Link></li>
           <li><Link to="/posts">Posts</Link></li>
           <li><Link to="/comments">Comments</Link></li>
           <li><Link to="/albums">Album</Link></li>
           <li><Link to="/photos">Photos</Link></li>
        </ul>
        </div>
    )
}

export {TopNav}