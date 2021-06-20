import React from 'react';
import s from '../ProfileInfo/ProfileInfo.module.css';
// import Preloader from './../../Friends/Preloader/Preloader.jsx'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {

    this.setState({
      editMode: true
    }) // this is a right method to change the local state

    // this.state.editMode = true;
    // this.forceUpdate(); // ---!!! it is recommended do not use this method
  }

  deActivateEditMode = () => {

    this.setState({
      editMode: false
    }); // this is a right method to change the local state
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render');
    return <div>
          <div>
            <span className={s.fullname}>{this.props.profile.fullName}</span>
          </div>
          {!this.state.editMode &&
              <div>
                <span className={s.status_content} onDoubleClick={this.activateEditMode}>
                    {this.props.status}
                </span>
              </div>
          }
          {this.state.editMode &&
              <div>
                <input autoFocus={true} onBlur={this.deActivateEditMode}
                  onChange={this.onStatusChange} value={this.state.status}/>
              </div>
          }
    </div>
  }
	

}

export default ProfileStatus;