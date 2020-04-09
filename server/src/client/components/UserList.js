import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

class UserList extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    const { users } = this.props;
    return (
      <div className='UserList'>
        <h3>Here's a big list of user</h3>
        <ul>
          {users &&
            users.length &&
            users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(fetchUsers()),
});

export const loadData = (store) => {
  console.dir('We need load Data from Users');
  return store.dispatch(fetchUsers());
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
