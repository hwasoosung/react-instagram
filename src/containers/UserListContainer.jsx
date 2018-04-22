import React from 'react';
import { connect } from 'react-redux'; 
import UserListElement from '../components/UserListElement';
import { bindActionCreators } from 'redux';

import * as UserFormActions from '../store/modules/userForm';

class UserListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const userInfoList = this.props.userList;
    console.log(userInfoList);
    return (
      <div> 
        <p>this is user list</p>
        { userInfoList.map((userInfo) => (
            <UserListElement userInfo={userInfo}/>
          ))
        }
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      userList: state.userForm.get('userList').toJS()
    };
  },
  (dispatch) => {
    return {};
  })(UserListContainer);