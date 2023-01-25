import { ArticlePage } from 'components/pages/ArticlePage';
import { HomePage } from 'components/pages/HomePage';

export const locations = {
  homepage: { path: '/homepage', component: <HomePage /> },
  basepage: { path: '/', component: <HomePage /> },
  articlepage: { path: '/articlepage/:id', component: <ArticlePage /> }
};
