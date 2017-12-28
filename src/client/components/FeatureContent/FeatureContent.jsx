import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './FeatureContentItem.css';
import { fetchFeatureContent } from '../modules/feature-content';
import FeatureContentItem from './FeatureContentItem.jsx';

class FeatureContent extends Component {

  static fetchData(dispatch) {
    return dispatch(fetchFeatureContent());
  }

  componentDidMount() {
    this.props.fetchFeatureContent();
  }

  render() {
    const { featureContent } = this.props;
    console.log(this.props);
    return (
      <section className="feature-content js-feature-content">
        <div className="feature-content-body">
          <FeatureContentItem featureContent={featureContent} />
        </div>
        <button type="button" className="feature-content-btn js-load-more">Load More</button>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  users: state.featureContent
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchFeatureContent,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(featureContent);