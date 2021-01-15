import React from 'react';
import s from './Post.module.css';
 

const Post = (props) => {
	return (      
    <div className={s.item}>
      <img src="https://pbs.twimg.com/profile_images/1260620267069607937/KtV-UWQH.jpg" alt="" />
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