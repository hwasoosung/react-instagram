import React from 'react';
import UserListElement from './UserListElement';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInfoList: [] };

    this.handleNewUserInfo = this.handleNewUserInfo.bind(this);
  }

  handleNewUserInfo(userInfo) {
    this.setState({
      //spread operator of es6
      userInfoList: [...this.state.userInfoList, userInfo]
    });
  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.handleNewUserInfo(nextProps.userInfo);
  }

  render() {
    const userInfoList = this.state.userInfoList;
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

export default UserList;