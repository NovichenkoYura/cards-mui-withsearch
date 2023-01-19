import { Routes, Route, Link } from 'react-router-dom';
import { locations } from '../constants/locations';
import { Layout } from './Layout';

export const ComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={locations.homepage.path} element={locations.homepage.component} />
        <Route path={locations.articlepage.path} element={locations.articlepage.component} />
      </Route>
    </Routes>
  );
};
