import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUsers } from '../modules/users';
import Users from '../components/Users';

class UsersPage extends Component {

  static fetchData(dispatch) {
    return dispatch(fetchUsers());
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users, loading } = this.props;
    return (
      <div>
        <h2>UsersPage</h2>
        {loading && !users.length ? <div>Loading...</div> : <Users items={users} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.items,
  loading: state.users.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);