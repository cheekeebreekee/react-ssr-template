import Home from "./home";
import News from "./news";
import FeatureContent from "./FeatureContent";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/news",
    component: News
  },
  {
    path: "/feature-content",
    component: FeatureContent
  }
];

export default routes;
