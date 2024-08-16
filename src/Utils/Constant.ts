import { lazy } from 'react';

const Header = lazy(() => import('../Components/Header/Header'));
const Landing = lazy(() => import('../Components/Landing/Landing'));
const Dashboard = lazy(() => import('../Components/Dashboard/Dashboard'));

export { Header, Landing, Dashboard};
