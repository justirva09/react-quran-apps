
import {Homepage, Surah, Quran} from 'pages';

const routes = [
  {
    title: 'Home',
    component: Homepage,
    exact: true,
    path: '/'
  },
  {
    title: 'Quran',
    component: Quran,
    exact: true,
    path: '/quran'
  },
  {
    title: 'Surah',
    component: Surah,
    exact: true,
    path: '/quran/surah/:id'
  }
];

export default routes;