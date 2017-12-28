import React from 'react';
import FeatureContentItem from './FeatureContentItem.jsx';
import "./FeatureContentItem.css";

const FeatureContent = ({ featureContent }) => (
    <section className="feature-content js-feature-content">
        <div className="feature-content-body">
          <FeatureContentItem featureContent={featureContent} />
        </div>
        <button type="button" className="feature-content-btn js-load-more">Load More</button>
    </section>
);

export default FeatureContent;