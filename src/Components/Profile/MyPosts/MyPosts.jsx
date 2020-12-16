import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post.jsx';

const MyPosts = () => {

let postData = [
  {id: 1, message: 'Hello, how are you?', likesCount: 10},
  {id: 2, message: "It's my first post", likesCount: 2},
  {id: 3, message: "I'm trying React", likesCount: 23}
]

	return <div className={s.postsBlock}>
        <h3>My posts</h3>

        <div className={s.form}>
          <div><textarea></textarea></div>
          <div><button>Add post</button></div>  
        </div>

        <div className={s.posts}>
          
          <Post message={postData[0].message} likesCount={postData[0].likesCount}/>


          <Post message={postData[1].message} likesCount={postData[1].likesCount}/>


          <Post text="I'm trying React" likesCount='23'/>

        </div>
      </div>
  }

export default MyPosts;