import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFeatureContent } from "../ducks";
import FeatureContentItem from "./FeatureContentItem";

class FeatureContent extends Component {
  static initialAction() {
    return fetchFeatureContent();
  }

  componentDidMount() {
    if (!this.props.featureContent) {
      this.props.dispatch(FeatureContent.initialAction());
    }
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
    )
  }
}

const mapStateToProps = state => ({
  featureContent: state.featureContent
});

export default connect(mapStateToProps)(FeatureContent);
