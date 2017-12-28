// Actions
const LOAD_FEATURE_CONTENT = 'feature-content/LOAD_FEATURE_CONTENT';
const UPDATE_FEATURE_CONTENT = 'feature-content/UPDATE_FEATURE_CONTENT';

// Action Creators
export const loadFeatureContent = () => ({
  type: LOAD_FEATURE_CONTENT,
});

export const updateFeatureContent = featureContent => ({
  type: UPDATE_FEATURE_CONTENT,
  payload: featureContent,
});

export const fetchFeatureContent = () => (dispatch) => {
  dispatch(loadFeatureContent());
  return fetch('https://api.myjson.com/bins/g4lwn')
    .then(res => {console.log(res); res.json()})
    .then(featureContent => dispatch(updateFeatureContent(featureContent)));
};

// Initial state
const INITIAL_STATE = {
  featureContent: []
};

// Reducer
export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case LOAD_FEATURE_CONTENT:
      return {
        ...state,
        featureContent: action.payload,
      };
    case UPDATE_FEATURE_CONTENT:
      return {
        ...state,
        featureContent: action.payload,
      };
    default:
      return state;
  }
};