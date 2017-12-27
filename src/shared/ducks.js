import "isomorphic-fetch";

// Actions
const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";
const FETCH_FEATURE_CONTENT_REQUEST = "FETCH_FEATURE_CONTENT_REQUEST";
const FETCH_FEATURE_CONTENT_SUCCESS = "FETCH_FEATURE_CONTENT_SUCCESS";
const FETCH_FEATURE_CONTENT_FAILURE = "FETCH_FEATURE_CONTENT_FAILURE";

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    // case FETCH_NEWS_SUCCESS:
    //   return { ...state, news: action.payload };
    case FETCH_FEATURE_CONTENT_SUCCESS:
      return { ...state, featureContent: action.payload };
    default:
      return state;
  }
}

// Action Creators
const requestNews = () => ({ type: FETCH_NEWS_REQUEST });
const receivedNews = news => ({ type: FETCH_NEWS_SUCCESS, payload: news });
const newsError = () => ({ type: FETCH_NEWS_FAILURE });
const requestFeatureContent = () => ({ type: FETCH_FEATURE_CONTENT_REQUEST });
const receivedFeatureContent = featureContent => ({ type: FETCH_FEATURE_CONTENT_SUCCESS, payload: featureContent });
const featureContentError = () => ({ type: FETCH_FEATURE_CONTENT_FAILURE });

export const fetchNews = () => (dispatch, getState) => {
  dispatch(requestNews());
  return fetch("http://localhost:3000/api/news")
    .then(response => response.json())
    .then(news => dispatch(receivedNews(news)))
    .catch(err => dispatch(newsError(err)));
};

export const fetchFeatureContent = () => (dispatch, getState) => {
  dispatch(requestFeatureContent());
  return fetch("https://api.myjson.com/bins/g4lwn")
    .then(response => response.json())
    .then(featureContent => dispatch(receivedFeatureContent(featureContent)))
    .catch(err => dispatch(featureContentError(err)));
};
