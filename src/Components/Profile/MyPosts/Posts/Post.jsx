import React from 'react';
import s from './Post.module.css';
 

const Post = (props) => {
	return (      
    <div className={s.item}>
      <img src="https://www.mcicon.com/wp-content/uploads/2021/01/People_User_1-copy-4.jpg" alt="" />
      <div>
        {props.message}
      </div>

      <div className={s.like}>
        <a href="#"> <span>Like {props.likesCount} </span> </a>
      </div>

    </div>  
  )   
}

export default Post;