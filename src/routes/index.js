
import { Surah, Quran} from 'pages';

const routes = [
  {
    title: 'Quran',
    component: Quran,
    exact: true,
    path: '/'
  },
  {
    title: 'Surah',
    component: Surah,
    exact: true,
    path: '/surah/:id'
  }
];

export default routes;