import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post.jsx';

const MyPosts = (props) => {

let postsElements = props.posts.map(function(p) {
  return <Post message={p.message} likesCount={p.likesCount} />;
});

let newPostElement = React.createRef();

let addPostUI = () => {
  props.addPost();
}

let onTextChange = () => {
  let textChange = newPostElement.current.value;
  props.updateNewPostText (textChange);
}


	return <div className={s.postsBlock}>
        <h3>My posts</h3>

        <div className={s.form}>
          <div>
            <textarea ref={newPostElement} value={props.newPostText} onChange={onTextChange}/>
          </div>
          <div><button onClick= {addPostUI} >Add post</button></div>  
        </div>

        <div className={s.posts}>

          {postsElements}
          
{/*          <Post message={postData[0].message} likesCount={postData[0].likesCount}/>


          <Post message={postData[1].message} likesCount={postData[1].likesCount}/>


          <Post text="I'm trying React" likesCount='23'/>*/}

        </div>
      </div>
  }

export default MyPosts;