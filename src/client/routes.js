import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import FeatureContent from './pages/FeatureContent';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/users/:userId',
    component: UserPage,
  },
  {
    path: '/users',
    component: UsersPage,
  },
  {
    path: '/feature-content',
    component: FeatureContent,
  }
];