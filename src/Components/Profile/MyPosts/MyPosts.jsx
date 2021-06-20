import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post.jsx';
import { Field, reduxForm } from 'redux-form'; 
import {required, maxLengthCreator} from './../../../utils/validators.js';
import {Textarea} from './../../common/FormsControls/FormsControls.js';


const maxLength15 = maxLengthCreator(15);

let NewPostForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit} className={s.form}>
        <div>
          <Field component={Textarea} name="WriteNewPost" 
            validate={[required, maxLength15]}/>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    )
  }

const NewPostFormRedux = reduxForm({ 
  form: 'newPost'
})(NewPostForm);

const MyPosts = (props) => {

  let postsElements = props.profilePage.posts.map(function(p) {
    return <Post message={p.message} likesCount={p.likesCount} />;
  });

  // let newPostElement = React.createRef();

  // let onAddPost = (newPostTextForm) => {
  //   props.addPost(newPostTextForm);
  // }

  // let onTextChange = () => {
  //   let textChange = newPostElement.current.value;
  //   props.updateNewPostText(textChange);
  // }

  const addNewPost = (formData) => {
    props.addPost(formData.WriteNewPost);
    // console.log(formData.WriteNewPost);
    formData.WriteNewPost = '';
    debugger
  }


	return <div className={s.postsBlock}>
        <h3>My posts</h3>

{/*        <div className={s.form}>
          <div>
            <textarea ref={newPostElement} value={props.profilePage.newPostText} onChange={onTextChange}/>
          </div>
          <div><button onClick= {onAddPost} >Add post</button></div>  
        </div>*/}

        <NewPostFormRedux onSubmit={addNewPost}/>

        <div className={s.posts}>

          {postsElements}
          
         </div>
      </div>
  }

export default MyPosts;