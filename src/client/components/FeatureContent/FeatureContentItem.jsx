import React from "react";

export default function FeatureContentItem({ featureContent }) {
return (
    <div className="feature-content-article">
        <img src={featureContent.imageUrl} alt="Default Alternative Text" />	
        <div className="feature-content-article-body">
        <a href={featureContent.articleLink} target="_blank">
            <h3> 
            {featureContent.title}
            </h3>
        </a>
        <time pubdate datetime={featureContent.publicationDate}>{featureContent.publicationDate}</time> 
        <p> 
            {featureContent.description}
        </p>
        <div className="links"> 
            <a href={featureContent.articleLink} target="_blank">{featureContent.textLink}</a>
        </div>
        </div>
    </div>
);
}