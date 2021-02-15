import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post.jsx';


const MyPosts = (props) => {

let postsElements = props.profilePage.posts.map(function(p) {
  return <Post message={p.message} likesCount={p.likesCount} />;
});

let newPostElement = React.createRef();

let onAddPost = () => {
  props.addPost();
}

let onTextChange = () => {
  let textChange = newPostElement.current.value;
  props.updateNewPostText(textChange);
}


	return <div className={s.postsBlock}>
        <h3>My posts</h3>

        <div className={s.form}>
          <div>
            <textarea ref={newPostElement} value={props.profilePage.newPostText} onChange={onTextChange}/>
          </div>
          <div><button onClick= {onAddPost} >Add post</button></div>  
        </div>

        <div className={s.posts}>

          {postsElements}
          
         </div>
      </div>
  }

export default MyPosts;