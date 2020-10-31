import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post.jsx';

const MyPosts = () => {
	return <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={s.posts}>
          
          <Post message='Hello, how are you?' likesCount='10'/>


          <Post message="It's my first post" likesCount='2'/>


          <Post text="I'm trying React" likesCount='23'/>

        </div>
      </div>
  }

export default MyPosts;