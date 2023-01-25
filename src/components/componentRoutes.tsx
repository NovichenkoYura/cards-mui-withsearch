import { Routes, Route } from 'react-router-dom';
import { locations } from '../constants/locations';

export const ComponentRoutes = () => {
  return (
    <Routes>
      <Route path={locations.articlepage.path} element={locations.articlepage.component} />
      <Route path={locations.homepage.path} element={locations.homepage.component} />
      <Route path={locations.basepage.path} element={locations.basepage.component} />
    </Routes>
  );
};
