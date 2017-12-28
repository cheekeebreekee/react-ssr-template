import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUserById } from '../modules/users';

class UserPage extends Component {
  
  static fetchData(dispatch, match) {
    return dispatch(fetchUserById(match.params.userId));
  }

  componentDidMount() {
    this.props.fetchUserById(this.props.match.params.userId);
  }

  render() {
    const { user, loading } = this.props;
    return (
      <div>
        <h2>UserPage</h2>
        {loading && !user ? <div>Loading...</div> : <pre>{JSON.stringify(user, null, 2)}</pre>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.current,
  loading: state.users.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUserById,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
