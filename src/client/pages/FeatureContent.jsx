import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFeatureContent } from '../modules/feature-content';
import FeatureContentItems from '../components/FeatureContent/FeatureContent';

class FeatureContent extends Component {

  static fetchData(dispatch) {
    return dispatch(fetchFeatureContent());
  }

  componentDidMount() {
    this.props.fetchFeatureContent();
  }

  render() {
    const { featureContent } = this.props;
    console.log(featureContent);
    return (
        <FeatureContentItems featureContent={featureContent} />
    );
  }
}

const mapStateToProps = state => ({
    featureContent: state.featureContent
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchFeatureContent,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FeatureContent);