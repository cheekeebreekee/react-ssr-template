import React from "react";
import "./FeatureContentItem.css";

export default function FeatureContentItem({ featureContent }) {
  return (
    <div className="feature-content-article-wrapper">
      {featureContent &&
        featureContent.map(post =>
          <div className="feature-content-article">
            <img src={post.imageUrl} alt="Default Alternative Text" />	
            <div className="feature-content-article-body">
              <a href={post.articleLink} target="_blank">
                <h3> 
                  {post.title}
                </h3>
              </a>
              <time pubdate datetime={post.publicationDate}>{post.publicationDate}</time> 
              <p> 
                {post.description}
              </p>
              <div className="links"> 
                <a href={post.articleLink} target="_blank">{post.textLink}</a>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
